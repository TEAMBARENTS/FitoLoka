import { useEffect } from 'react'
import Bg1 from '../assets/img/bg-layanan.webp' // img by google search
import Bg2 from '../assets/img/portofolio/bg-second.webp' // img by canva pro
import Elemen from '../assets/img/elemen1.webp' // img by canva pro
import Layanan1 from '../assets/img/img-layanan1.webp' // img by google search
import Layanan2 from '../assets/img/img-layanan2.webp' // img by google search
import Layanan3 from '../assets/img/img-layanan3.webp' // img by google search
import Layanan4 from '../assets/img/img-layanan4.webp' // img by google search
import Card1 from '../assets/img/card-layanan1.webp' // img by google search
import Card2 from '../assets/img/card-layanan2.webp' // img by google search
import Card3 from '../assets/img/card-layanan3.webp' // img by google search
import AOS from 'aos'
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import '@fontsource/poppins';

const Service = () => {
    useEffect(()=> {
        AOS.init({duration: 1100});
    }, []);

    
    const navigate = useNavigate();

    const goToService = () => {
      navigate('/services');
    };

    const generateWhatsappURL = (phoneNumber, message) => {
      // Pastikan nomor dalam format internasional (tanpa tanda +)
      const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Menghapus karakter non-digit
      const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
        message
      )}`;
    
      return whatsappURL;
    };
    
      const clickMe = () => {
        const phoneNumber = "6285706804408";
        const message = "Hello! I am interested in trying Fito Loka greenhouse solutions. Could I get more information about facilities, pricing, and how to order? Thank you!"; // Default message
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`;
    
        window.location.href = generateWhatsappURL(phoneNumber, message);
      };
    

    return (
        <section>
          <div className='w-full bg-cover bg-center h-full' style={{ backgroundImage: `url(${Bg1})` }}>
            <div className="bg-[#0A6847] bg-opacity-90 text-white py-36 bg-gradient-to-t from-transparent via-transparent to-[#196348]">
              <div className="container mx-auto flex flex-col lg:flex-row mt-11 items-center px-10 lg:px-52">
                <div className="lg:grid lg:grid-cols-2 gap-4 lg:w-1/2 lg:mb-0 hidden mr-10">
                  <img
                    src={Layanan1}
                    alt="/"
                    className="w-full h-full border-[#2A835F] border-2 rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px]"
                    data-aos="fade-down-right"

                  />
                  <img
                    src={Layanan3}
                    alt="/"
                    className="w-full h-full border-[#2A835F] border-2 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
                    data-aos='fade-down-left'
                    data-aos-delay="300"
                  />
                  <img
                    src={Layanan2}
                    alt="/"
                    className="w-full h-full border-[#2A835F] border-2 rounded-tl-[40px] rounded-br-[40px] rounded-tr-[40px]"
                    data-aos='fade-up-right'
                    data-aos-delay="900"
                  />
                  <img
                    src={Layanan4}
                    alt="/"
                    className="w-full h-full border-[#2A835F] border-2 rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px]"
                    data-aos='fade-up-left'
                    data-aos-delay="600"
                  />
                </div>
    
                <div className="lg:w-1/2 p-4 -mt-20 lg:mt=0">
                  <h1 className="text-lg md:text-2xl lg:text-2xl font-poppins font-semibold mb-6 " data-aos="fade-left">
                    Our Innovative Solutions <p> for the Future of Agriculture </p>
                  </h1>
                  <p className="mb-6 text-md md:text-2xl lg:text-2xl text-justify" data-aos="fade-up" data-aos-duration="1700">
                  We believe that the future of agriculture lies in the adoption of technology and innovation. We provide practical solutions that help farmers overcome modern agricultural challenges, enabling easier workflows, cost savings, and higher crop yields.
                  </p>
                  <button onClick={goToService} className="bg-transparent border text-sm text-white font-medium font-poppins py-4 px-6 mt-6 rounded-full hover:bg-white hover:text-[#0A6847] hover:font-semibold hover:border-[#0A6847]" data-aos="fade-left">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-cover bg-center h-full" style={{ backgroundImage: `url(${Bg2})` }}>
            <div className='bg-white bg-opacity-70 h-full w-full py-16'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 font-poppins lg:py-0 py-16 px-16">

              <div className="relative group w-full h-96" data-aos="fade-down">
                <img
                  src={Card1}
                  alt="/"
                  className="w-full h-full object-cover rounded-[40px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-[40px] transition duration-300 ease-in-out flex items-end pb-8 px-8">
                  <div className="border-l-4 border-[#2A835F] opacity-0 ml-2 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ml-6">
                  Fito Loka Greenhouses are equipped with automated technology to control temperature, humidity, and plant nutrition. With this system, crops grow optimally year-round, and farmers can monitor all conditions from anywhere.
                  </p>
                  </div>
                </div>
              </div>

              <div className="relative group w-full h-96" data-aos="fade-down">
                <img
                  src={Card2}
                  alt="/"
                  className="w-full h-full object-cover rounded-[40px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-[40px] transition duration-300 ease-in-out flex items-end pb-8 px-10">
               <div className="border-l-4 border-[#2A835F] opacity-0 ml-2 group-hover:opacity-100 transition duration-300 ease-in-out">
               <div className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ml-6">
               Fito Loka Smart Irrigation uses sensors to measure soil moisture and weather. The system automatically manages watering schedules, saving water and promoting lush plant growth effortlessly.
                  </div>
                  </div>
                </div>
              </div>

              <div className="relative group w-full h-96" data-aos="fade-down">
                <img
                  src={Card3}
                  alt="/"
                  className="w-full h-full object-cover rounded-[40px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-[40px] transition duration-300 ease-in-out flex items-end pb-8 px-8">
               <div className="border-l-4 border-[#2A835F] opacity-0 ml-2 group-hover:opacity-100 transition duration-300 ease-in-out">
               <p className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ml-6">
                  With Fito Loka technology, harvest yields are more abundant and of superior quality. Farmers enjoy healthier crops with faster harvest cycles.
                  </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10">
              <div className="md:w-1/2 font-poppins tracking-wide mt-[-50px] sm:py-10 md:py-16 lg:px-10">
                <h2 className="text-[15px] md:text-3xl lg:text-3xl font-bold text-[#0A6847]">
                  Hydroponic Optimization: <p>Soilless Agriculture Solutions</p>
                </h2>
                <p className="mt-4 text-md lg:xl text-[#0A6847] text-justify max-w-md md:max-w-lg lg:max-w-2x mb-2 lg:m">
                Fito Loka offers soilless farming solutions through advanced hydroponic systems. Crops are cultivated using nutrient-rich water without requiring soil. This system enables faster, healthier growth and premium yields.
                </p>
                <button onClick={clickMe} className="mt-6 bg-[#0A6847] text-sm text-white px-6 py-3 rounded-[50px] shadow-lg hover:text-[#000000] hover:font-medium hover:bg-transparent border hover:border-[#0A6847]">
                  Try Now
                </button>
              </div>

              <div className="md:w-1/2 mt-10 lg::mt-0 flex items-end justify-end mr-[-60px]">
                <img
                  src={Elemen}
                  alt="/"
                  className="w-[100%] h-auto lg:h-[100%] mt-0 lg:mt-[-25px] object-contain"
                  data-aos="fade-left"
                  data-aos-duration="2500"
                />
              </div>
            </div>
            </div>
          </div>
        </section>
        
    )
}

export default Service
