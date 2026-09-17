import { useEffect } from "react";
import "@fontsource/poppins";
import "aos/dist/aos.css";
import AOS from "aos";
import Youtube from "./Youtube";
import Weather from "./Weather";

import Bg from "../assets/img/bg-hero-layanan.webp"; // img by canva pro
import Elemen from "../assets/img/elemen-hero-layanan.webp"; // img by canva pro
import Hidro from "../assets/img/layanan/hidroponik.webp"; // img by google search
import Pa from "../assets/img/layanan/pengontrol_air.webp"; // img by google search
import M from "../assets/img/layanan/monitoring.webp"; // img by google search
import St from "../assets/img/layanan/sensor_tanah.webp"; // img by google search
import Sc from "../assets/img/layanan/sensor_cuaca.avif"; // img by google search
import Gh1 from "../assets/img/greenhouse/greenhouse1.webp"; // img by google search
import Gh2 from "../assets/img/greenhouse/greenhouse2.webp"; // img by google search
import Gh4 from "../assets/img/greenhouse/greenhouse4.webp"; // img by google search
import Gh3 from "../assets/img/greenhouse/greenhouse3.webp"; // img by google search
import Igh from "../assets/img/greenhouse/illuss_greenhouse.webp";

const generateWhatsappURL = (phoneNumber, message) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return whatsappURL;
};

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0), AOS.init({ duration: 1300, delay: 200 });
  }, []);

  const clickMe = () => {
    const phoneNumber = "6285706804408"; // Nomor WhatsApp dengan kode negara (62 untuk Indonesia)
    const message = "Halo! Saya tertarik untuk mencoba greenhouse Fito Loka. Bisa minta informasi lebih lanjut tentang fasilitas, harga, dan cara pemesanannya? Terima kasih!"; // Pesan default
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Mengarahkan ke WhatsApp
    window.location.href = generateWhatsappURL(phoneNumber, message);
  };

  return (
    <section className="font-poppins">
      <div className="relative h-fit bg-[#07754E]">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${Bg})` }}></div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between h-fit lg:h-full lg:px-28 px-6 py-20 lg:py-auto">
          <div className="text-white lg:max-w-2xl max-w-sm my-auto text-center lg:text-left">
            <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 leading-relaxed">
              Transforming Agriculture through Technology and Innovation
            </h1>
            <p className="lg:text-2xl text-sm lg:leading-10 pt-3">
              Explore our services to drive more superior and sustainable agricultural outcomes.
            </p>
          </div>
          <div
            className="flex justify-center lg:max-w-5xl md:max-w-4xl my-2"
            data-aos="fade-left">
            <img
              src={Elemen}
              className="lg:w-full lg:h-full w-96 h-96 sm:max-w-md md:max-w-xl lg:max-w-4xl"
            />
          </div>
        </div>
      </div>

      <div>
        <Weather />
      </div>

      <div className="relative h-fit py-6">
        <div className="lg:px-28 px-10 lg:pt-10 pt-5 flex">
          <div className="max-w-36">
            <h1 className="lg:text-3xl sm:text-lg tracking-wide text-white bg-[#0A6847] rounded-md lg:py-3 py-2 px-6">
              Irrigation
            </h1>
          </div>
          <span className="ml-4 max-w-2xl lg:text-xl md:text-md text-xs font-medium text-[#0A6847]">
            Efficient Water Management System Based on Sensors
          </span>
        </div>

        <div className="lg:px-32 px-10 py-12">
          <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-14 gap-7">

            <div
              className="bg-white border-2 border-[#0A6847] lg:border-0 lg:bg-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="zoom-out-right"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start lg:text-white text-[#0A6847]">
                <h2 className="lg:text-2xl text-md font-bold mb-2">
                  Water Controller
                </h2>
                <p className="lg:text-md font-medium mr-4 lg:leading-7">
                  To automatically control the irrigation valve based on data received from soil and weather sensors.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={Pa}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-[#0A6847] lg:bg-white lg:border-2 border-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="zoom-out-left"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-white lg:text-[#0A6847] mb-2">
                  Monitoring System
                </h2>
                <p className="lg:text-md font-medium text-white lg:text-[#0A6847] mr-4 lg:leading-7">
                  To monitor the irrigation system from a distance through a mobile
                  application or web platform.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={M}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-white border-2 border-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="fade-up-right"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-[#0A6847] mb-2">
                  Soil Sensor
                </h2>
                <p className="lg:text-md font-medium text-[#0A6847] mr-4 lg:leading-7">
                  Helps determine the right time and amount of water to supply to the plants.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={St}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="fade-up-left"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-white mb-2">
                  Weather Sensor
                </h2>
                <p className="lg:text-md font-medium text-white mr-4 lg:leading-7">
                  Measures weather parameters like air temperature to adjust
                  irrigation patterns.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={Sc}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-fit py-6">
        <div className="lg:px-28 px-10 lg:pt-10 pt-5 flex">
          <div className="max-w-40 lg:max-w-60">
            <h1 className="lg:text-3xl sm:text-lg tracking-wide text-white bg-[#0A6847] rounded-md lg:py-3 py-2 px-6">
              Greenhouse
            </h1>
          </div>
          <span className="ml-4 max-w-2xl lg:text-xl md:text-md text-xs font-medium text-[#0A6847]">
            Enhancing agricultural productivity through optimal conditions
          </span>
        </div>

        <div className="md:max-w-[700px] lg:max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-10 mx-auto items-center justify-center">
          <div className="w-full h-auto max-w-md mx-auto" data-aos="fade-right">
            <img src={Igh} alt="" />
          </div>

          <div className="text-[#0A6847] w-full md:px-2 py-5 text-center items-center">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold" data-aos="fade-left">
              Optimizing Modern Agriculture with Greenhouses
            </h2>
              <p className="lg:text-xl md:text-md text-sm text-justify" data-aos="fade-left">
                Fito Loka offers greenhouse services designed to enhance your agricultural productivity and efficiency. With advanced technology and innovative design, our greenhouses provide an ideal environment for plants to grow and thrive.
              </p>
            <div className="py-12 items-center justify-center text-center" data-aos="fade-up">
              <a
                href="#"
                onClick={clickMe}
                className="bg-[#07754E] text-white text-sm md:text-lg font-semibold py-3 px-7 md:py-3 md:px-8 rounded-full transition-transform transform hover:scale-105 hover:text-[#07754E] hover:bg-white border border-transparent hover:border-[#07754E]" 
              >
                Try Now
              </a>
            </div>
          </div>
        </div>


        <div className="flex flex-col-reverse md:flex-row pb-16 xl:px-32 mx-auto">
          <div className="text-[#0A6847] w-full md:max-w-2xl md:pl-20 py-6">
            <h2 className="text-xl md:text-2xl text-[#0A6847] font-extrabold text-center lg:text-start rounded-2xl mb-4 max-w-full lg:max-w-xl mx-12 md:mx-0 md:max-w-md">
              Main Features of Greenhouse Services
            </h2>
            <div className="text-justify pt-3 mx-3">
              <h5 className="lg:text-lg text-md font-semibold my-3">
                1. Accurate Climate Control
              </h5>
              <p className="text-sm md:text-md">
                The greenhouse is equipped with adjustable temperature, humidity, and lighting control systems, ensuring the plants receive optimal conditions throughout the year.
              </p>

              <h5 className="lg:text-lg text-md font-semibold my-3">
                2. Prevention of Pests and Diseases
              </h5>
              <p className="text-sm md:text-md">
                The enclosed environment reduces the risk of pest and disease infestations, leading to healthier plants and improved harvest yields.
              </p>

              <h5 className="lg:text-lg text-md font-semibold my-3">
                3. Sustainable and Environmentally Friendly
              </h5>
              <p className="text-sm md:text-md">
                Our greenhouses are designed to minimize environmental impact,
                utilizing sustainable technology to create an eco-friendly
                agricultural environment.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full px-10 lg:px-24 mt-16 lg:mt-0">
            <div className="grid grid-cols-3 gap-2 mb-0 lg:mb-2">
              <img
                src={Gh1}
                alt="Photo 1"
                className="w-40 h-40 md:w-60 md:h-60 object-cover"
                data-aos="zoom-out"
                data-aos-duration="1000"
              />
              <img
                src={Gh4}
                alt="Photo 4"
                className="w-40 h-40 md:w-60 md:h-60 object-cover"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="300"
              />
              <img
                src={Gh2}
                alt="Photo 2"
                className="w-40 h-40 md:w-60 md:h-60 object-cover"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="600"
              />
            </div>
            <img
              src={Gh3}
              alt="Photo 3"
              className="mt-0 w-full lg:w-100 xl:w-[590px] h-40 md:h-52 object-cover"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg lg:text-2xl md:text-2xl mb-10 font-bold text-[#0A6847] text-center">
            Modern Agriculture Video References
          </h2>
          <div data-aos="fade-up">
            <Youtube />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicePage;
