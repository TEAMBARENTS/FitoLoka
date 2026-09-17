import { useEffect, useState } from 'react'
import axios from 'axios'
import Card1 from '../assets/img/card-portofolio1.webp' //img by https://crocodic.com/sistem-irigasi-pertanian-dengan-iot/
import Card2 from '../assets/img/card-portofolio2.webp' // img by https://medium.com/@amos.marketing/remote-sensing-technology-in-drones-af08d5bc21d3
import Card3 from '../assets/img/card-portofolio3.webp' // img by https://www.google.com/url?sa=i&url=https%3A%2F%2Fpertanian.sultengprov.go.id%2Fpertanian-modern-dengan-smart-farming%2F&psig=AOvVaw3k-lUXBSmgnHUKfVDmVNPo&ust=1727694603783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCNj0o4uC6IgDFQAAAAAdAAAAABAE
import Bg1 from '../assets/img/bg-porto1.webp' // img by google search
import AOS from 'aos'
import 'aos/dist/aos.css';
import '@fontsource/poppins';
import { useNavigate } from 'react-router-dom'


const Portofolio = () => {

    const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const city = 'Jawa timur'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Unable to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

    const [activePin, setActivePin] = useState(null);
  
    useEffect(()=> {
        AOS.init({duration: 1500});
    }, []);
    
    const navigate = useNavigate();

    const goToPorto = () => {
      navigate('/portofolio');
    };

    return (
        <section>
                <div id='portofolio' className='w-full bg-cover bg-center h-full ' style={{ backgroundImage: `url(${Bg1})` }}>
                <div className='w-full bg-[#0A6847] opacity-95 py-10 lg:py-16 lg:px-16 md:px-10 px-10'>
                  <h1 className='text-shadow text-2xl lg:text-4xl leading-[60px] font-bold pb-0 lg:pb-10 flex justify-center align-center font-poppins text-white tracking-wider'>Real Results of Our Innovations</h1> 
                    <div className='max-w-[960px] mx-auto grid md:grid-cols-2 md:border-none sm:border-b-2 px-0 lg:px-20'>
                        <img className='w-[250px] h-[150px] lg:w-[350px] lg:h-[220px] border-[#2A835F] mx-auto my-4 border-2 rounded-[50px]' data-aos='fade-right' src={Card1} alt="/" />
                        <div className='md:mx-auto flex flex-col justify-center text-white font-poppins md:h-ful px-6 lg:px-0'>
                        <h1 className='text-xl lg:text-2xl font-bold py-3 tracking-wider'>Smart Irrigation System</h1>
                        <p className='text-justify text-sm lg:text-md'>We have implemented smart irrigation systems in East Java farmlands, utilizing soil moisture and weather sensors connected to an application for automated irrigation. This initiative saves up to 30% water and boosts crop efficiency by 25%.</p>
                        <button onClick={goToPorto} className='text-white w-[200px] rounded-lg my-5 md:mx-0 flex font-thin tracking-wide underline'>Learn More</button>
                        </div>
                    </div>
                    <div className='max-w-[1200px] mx-auto xl:mx-auto lg:mx-36 grid md:grid-cols-2 md:border-none sm:border-b-2 px-0 xl:px-60 lg:px-20'>
                        <img className='flex w-[250px] h-[150px] border-[#2A835F] mx-auto my-4 border-2 rounded-[50px] md:hidden' data-aos='fade-left' src={Card2} alt="/" />  
                        <div className='flex flex-col justify-center text-white font-poppins md:h-full px-6 md:mx-auto'>
                        <h1 className='text-xl lg:text-2xl font-bold py-3 tracking-wider'>Drone Precision Farming</h1>
                        <p className='text-justify text-sm lg:text-md'>We have leveraged drone technology for agricultural mapping and monitoring in East Java. This allows farmers to assess crop health and soil conditions with precision, boosting yields and lowering operating costs.</p>
                        <button onClick={goToPorto} className='text-white w-[200px] rounded-lg my-5 md:mx-0 flex font-thin tracking-wide underline'>Learn More</button>

                        </div>
                        <img className='hidden w-[250px] h-[150px] lg:w-[350px] lg:h-[220px] border-[#2A835F] mx-auto my-4 border-2 rounded-[50px] md:flex' data-aos='fade-left' src={Card2} alt="/" />
                    </div>
                    <div className='max-w-[960px] mx-auto grid md:grid-cols-2 px-0 lg:px-20'>
                            <img className='w-[250px] h-[150px] lg:w-[350px] lg:h-[220px] border-[#2A835F] mx-auto my-4 border-2 rounded-[50px]' data-aos='fade-right' src={Card3} alt="/" />
                            <div className=' md:mx-auto flex flex-col justify-center text-white font-poppins md:h-full px-6 lg:px-0'>
                            <h1 className='text-xl lg:text-2xl font-bold py-3 tracking-wider'>Greenhouse Digital Monitor</h1>
                            <p className='text-justify text-sm lg:text-md'>We developed technological greenhouses in Sumatra equipped with digital monitoring systems. Temperature, humidity, and nutrient control are managed automatically via a web dashboard, significantly boosting horticultural productivity.</p>
                            <button onClick={goToPorto} className='text-white w-[200px] rounded-lg my-5 md:mx-0 flex font-thin tracking-wide underline'>Learn More</button>
                            </div>
                        </div>
                </div>
                </div>
            </section>  
            );
        };
          

export default Portofolio
