import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import axios from "axios";

import "@fontsource/poppins";
import "aos/dist/aos.css";

import { database } from "../firebase";
import weather from "../assets/img/background-weather.webp";

function Weather() {

  const [suhu, setSuhu] = useState(0);
  const [kelembapan, setKelembapan] = useState(0);
  const [nutrisi, setNutrisi] = useState(0);

  const [city, setCity] = useState("Sidoarjo");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cities = [
    // Kabupaten
    "Bangkalan",
    "Banyuwangi",
    "Blitar",
    "Bojonegoro",
    "Bondowoso",
    "Gresik",
    "Jember",
    "Jombang",
    "Kediri",
    "Lamongan",
    "Lumajang",
    "Madiun",
    "Magetan",
    "Malang",
    "Mojokerto",
    "Nganjuk",
    "Ngawi",
    "Pacitan",
    "Pamekasan",
    "Pasuruan",
    "Ponorogo",
    "Probolinggo",
    "Sampang",
    "Sidoarjo",
    "Situbondo",
    "Sumenep",
    "Trenggalek",
    "Tuban",
    "Tulungagung",

    // Kota
    "Batu",
    "Blitar",
    "Kediri",
    "Madiun",
    "Malang",
    "Mojokerto",
    "Pasuruan",
    "Probolinggo",
    "Surabaya",
  ];

  useEffect(() => {
    const suhuRef = ref(database, "sensor/suhu");
    const kelembapanRef = ref(database, "sensor/kelembapan");
    const nutrisiRef = ref(database, "sensor/nutrisi");

    const unsubscribeSuhu = onValue(suhuRef, (snapshot) => {
      setSuhu(snapshot.val() ?? 0);
    });

    const unsubscribeKelembapan = onValue(
      kelembapanRef,
      (snapshot) => {
        setKelembapan(snapshot.val() ?? 0);
      }
    );

    const unsubscribeNutrisi = onValue(
      nutrisiRef,
      (snapshot) => {
        setNutrisi(snapshot.val() ?? 0);
      }
    );

    return () => {
      unsubscribeSuhu();
      unsubscribeKelembapan();
      unsubscribeNutrisi();
    };
  }, []);

  const getSuhuColor = (value) => {
    if (value < 24) return "text-blue-400";
    if (value > 28) return "text-red-500 animate-pulse";

    return "text-green-400";
  };

  const getKelembapanColor = (value) => {
    if (value < 60) return "text-yellow-400";
    if (value > 75) return "text-red-500";

    return "text-green-400";
  };

  const getNutrisiColor = (value) => {
    if (value < 800) return "text-yellow-400";
    if (value > 1200) return "text-red-500";

    return "text-green-400";
  };

  const simulasiKirimData = async () => {
    const suhuAcak =
      Math.floor(Math.random() * (35 - 20 + 1)) + 20;

    const kelembapanAcak =
      Math.floor(Math.random() * (90 - 40 + 1)) + 40;

    const nutrisiAcak =
      Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    try {
      await Promise.all([
        set(ref(database, "sensor/suhu"), suhuAcak),
        set(
          ref(database, "sensor/kelembapan"),
          kelembapanAcak
        ),
        set(
          ref(database, "sensor/nutrisi"),
          nutrisiAcak
        ),
      ]);

      console.log("Data simulasi berhasil dikirim");
    } catch (error) {
      console.error(
        "Gagal mengirim data simulasi:",
        error
      );
    }
  };

  const fetchWeather = async (cityName) => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const url =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(url);

      setWeatherData(response.data);
    } catch (error) {
      console.error("Gagal mengambil data cuaca:", error);

      setWeatherData(null);
      setError("Tidak dapat mengambil data cuaca");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div
      className="
        min-h-screen
        bg-center
        bg-no-repeat
        bg-cover
        font-poppins
      "
      style={{
        backgroundImage: `url(${weather})`,
      }}
    >
      {/* Overlay */}
      <div
        className="
          min-h-screen
          w-full
          bg-[#07754E]/90
          py-16
          px-4
        "
      >
        <div
          className="
            container
            mx-auto
            max-w-5xl
          "
        >

          <section className="text-center mb-10">
            <h1
              className="
                text-xl
                md:text-3xl
                lg:text-4xl
                font-bold
                text-white
                mb-4
              "
            >
              Cuaca Hari Ini di Kota-Kota Jawa Timur
            </h1>

            <select
              value={city}
              onChange={handleCityChange}
              className="
                w-full
                max-w-xs
                p-3
                rounded-full
                shadow-lg
                text-center
                text-white
                border
                border-white/20
                bg-white/20
                backdrop-blur-md
                focus:outline-none
                focus:ring-2
                focus:ring-gray-800/50
              "
            >
              {cities.map((cityName) => (
                <option
                  key={cityName}
                  value={cityName}
                  className="text-black"
                >
                  {cityName}
                </option>
              ))}
            </select>
          </section>

          <section className="flex justify-center mb-12">
            {loading && (
              <div
                className="
                  bg-gray-800/80
                  backdrop-blur-md
                  rounded-2xl
                  p-8
                  text-center
                  text-white
                "
              >
                <p>Loading weather data...</p>
              </div>
            )}

            {!loading && error && (
              <div
                className="
                  bg-red-500/30
                  backdrop-blur-md
                  rounded-2xl
                  p-8
                  text-center
                  text-white
                "
              >
                <p>{error}</p>
              </div>
            )}

            {!loading && weatherData && (
              <div
                className="
                  w-full
                  max-w-md
                  bg-white/20
                  backdrop-blur-md
                  p-8
                  rounded-2xl
                  shadow-xl
                  text-center
                  border
                  border-white/20
                "
              >
                <h2 className="text-3xl font-semibold text-white mb-4">
                  {weatherData.name}
                </h2>

                <p
                  className="
                    text-5xl
                    md:text-6xl
                    font-bold
                    text-[#FFF100]
                    mb-4
                  "
                >
                  {Math.round(weatherData.main.temp)}°C
                </p>

                <p
                  className="
                    text-xl
                    font-medium
                    capitalize
                    text-white
                    mb-6
                  "
                >
                  {weatherData.weather[0].description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="
                      bg-black/10
                      rounded-xl
                      p-3
                    "
                  >
                    <p className="text-sm text-white/70">
                      Wind Speed
                    </p>

                    <p className="text-lg font-semibold text-white">
                      {weatherData.wind.speed} m/s
                    </p>
                  </div>

                  <div
                    className="
                      bg-black/10
                      rounded-xl
                      p-3
                    "
                  >
                    <p className="text-sm text-white/70">
                      Humidity
                    </p>

                    <p className="text-lg font-semibold text-white">
                      {weatherData.main.humidity}%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section>
            <div className="text-center mb-6">
              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  pb-3
                  border-b
                  border-white/20
                "
              >
                Sensor Monitoring FitoLoka
              </h2>
            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-6
              "
            >
              <div
                className="
                  bg-white/20
                  backdrop-blur-md
                  p-6
                  rounded-2xl
                  shadow-lg
                  text-center
                  border
                  border-white/10
                "
              >
                <h3 className="text-lg text-gray-300">
                  Air Temperature
                </h3>

                <p
                  className={`
                    text-5xl
                    font-bold
                    my-4
                    transition-colors
                    duration-300
                    ${getSuhuColor(suhu)}
                  `}
                >
                  {suhu}
                  <span className="text-2xl ml-1">
                    °C
                  </span>
                </p>
              </div>

              <div
                className="
                  bg-white/20
                  backdrop-blur-md
                  p-6
                  rounded-2xl
                  shadow-lg
                  text-center
                  border
                  border-white/10
                "
              >
                <h3 className="text-lg text-gray-300">
                  Humidity
                </h3>

                <p
                  className={`
                    text-5xl
                    font-bold
                    my-4
                    transition-colors
                    duration-300
                    ${getKelembapanColor(kelembapan)}
                  `}
                >
                  {kelembapan}
                  <span className="text-2xl ml-1">
                    %
                  </span>
                </p>
              </div>

              <div
                className="
                  bg-white/20
                  backdrop-blur-md
                  p-6
                  rounded-2xl
                  shadow-lg
                  text-center
                  border
                  border-white/10
                "
              >
                <h3 className="text-lg text-gray-300">
                  Nutrient Level
                </h3>

                <p
                  className={`
                    text-5xl
                    font-bold
                    my-4
                    transition-colors
                    duration-300
                    ${getNutrisiColor(nutrisi)}
                  `}
                >
                  {nutrisi}
                  <span className="text-2xl ml-1">
                    PPM
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <div
                className="
                  w-full
                  max-w-md
                  p-5
                  border
                  border-dashed
                  border-gray-400
                  bg-black/20
                  rounded-xl
                  text-center
                "
              >
                <p className="text-sm text-gray-300 mb-3">
                  Simulation Panel
                </p>

                <p className="text-xs text-gray-400 mb-4">
                  Use this button to simulate
                  sensor data before the IoT device is active.
                </p>

                <button
                  onClick={simulasiKirimData}
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    active:scale-95
                    text-white
                    font-bold
                    py-2.5
                    px-6
                    rounded-full
                    transition
                    duration-200
                  "
                >
                  Simulate Sensor Data
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Weather;