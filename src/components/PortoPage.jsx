import {useEffect} from 'react'
import '@fontsource/poppins';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../src/index.css';
import bg1 from "../assets/img/portofolio/bg-hero.webp" // img by google search
import bg2 from "../assets/img/portofolio/bg-second.webp" // img by canva pro
import card1 from "../assets/img/portofolio/card1.webp" // img by google search
import card2 from "../assets/img/portofolio/card2.webp" // img by google search
import card3 from "../assets/img/portofolio/card3.webp" // img by google search
import profile from "../assets/img/portofolio/profile.webp" // img by google search
import s1 from "../assets/img/portofolio/swiper1.webp" // img by google search
import s2 from "../assets/img/portofolio/swiper2.webp" // img by google search
import s3 from "../assets/img/portofolio/swiper3.webp" // img by google search
import s4 from "../assets/img/portofolio/swiper4.webp" // img by google search
import s5 from "../assets/img/portofolio/swiper5.webp" // img by google search
import s6 from "../assets/img/portofolio/swiper6.webp" // img by google search
import {
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa';

const PortoPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0),
        AOS.init({duration: 1300});
      }, []);

  return (
        <section className='font-poppins'>
            <div  className="relative w-full h-fit lg:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-[#015034] bg-opacity-35"></div>
                <div className="relative text-white lg:p-40 p-32 items-center xl:pt-80">
                    <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-center tracking-wider flex justify-center space-x-5"><p data-aos="fade-right">FARMER'S</p><p data-aos="fade-left">WORK</p></h1>
                    <p className="mt-4 text-md lg:text-2xl text-center justify-center" data-aos="fade-up">Let's take a look at the results of our agricultural processing.</p>
                    <div className="mt-4 flex justify-center space-x-6" data-aos="fade-up">
                        <FaInstagram size={20} className='transform transition duration-300 hover:scale-125'/>
                        <FaFacebookSquare size={20} className='transform transition duration-300 hover:scale-125'/>
                        <FaYoutube size={20} className='transform transition duration-300 hover:scale-125'/>
                    </div>
                </div>
            </div>

            <div className="relative h-fit bg-white">
                <div className="lg:px-28 px-10 lg:pt-10 pt-5">
                    <div className="max-w-5xl">
                        <h1 className="lg:text-3xl text-2xl tracking-wide text-[#0A6847] font-bold">
                            Agricultural Innovation
                        </h1>
                    </div>
                    <p className="max-w-5xl lg:text-xl md:text-md text-sm font-medium text-[#0A6847] mt-1 lg:mt-2">
                        Agricultural innovation and solutions that we have created to advance this sector.
                    </p>
                </div>

                    <div className="py-8 lg:py-10">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper max-w-full lg:w-[1190px] lg:h-[370px] w-[310px] h-[150px]"
                            
                        >
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s1} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Agricultural Innovation in Plant Irrigation with Drone Technology</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Fito Loka brings fast and precise irrigation technology, helping farmers improve crop yields with modern and effective methods.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s2} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]"/>
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Success in Crop Yields with Fito Fertilizer</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">With a specially designed formula, Fito Fertilizer helps improve soil fertility and provides optimal nutrition for plants.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s3} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]"/>
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Agricultural Revolution in Greenhouse Farming for Optimal Results</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Fito Loka's greenhouse technology is a step forward towards more efficient agriculture and readiness to face future challenges.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s4} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Smart Hydroponics for Food Security</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">With hydroponic technology, we provide precise nutrition and faster, higher-quality harvests.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s5} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">The Future of Agriculture with Weather Sensor Panels</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Our sensor panels measure various weather parameters, providing the data needed to plan irrigation, fertilization, and plant care.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s6} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Increasing Productivity Through Mobile Technology</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">We provide a platform that allows farmers to monitor their agriculture more easily and efficiently.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    
                     <div className="w-full bg-cover bg-center h-full my-16" style={{ backgroundImage: `url(${bg2})` }}>
                        <div className="w-full h-fit bg-white bg-opacity-80">
                            <div className="py-3 lg:py-10 items-center">
                                <h1 className="text-[#0A6847] text-2xl lg:text-4xl text-center font-bold">Modern Solutions for Agriculture</h1>
                            </div>
                            <div className="flex flex-wrap justify-between max-w-5xl mx-auto py-2 lg:py-5 px-7">
                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={bg1} alt="Image 1" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar">
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Tractor Sprayer</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2">Designed to increase productivity, this tool helps farmers spray pesticides and fertilizers evenly, ensuring optimal harvest results.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={card1} alt="Image 2" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar"> 
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Rice Transplanter</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2">The Fito Loka rice transplanter is designed to simplify the planting process, making the work faster and more efficient.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={card2} alt="Image 2" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar"> 
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Smart Agricultural App</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2">By leveraging cutting-edge technology, this app provides real-time data on weather, soil moisture, and crop conditions, enabling farmers to make better and timely decisions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={card3} alt="Image 2" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar"> 
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Drone Precision Farming</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2"> Equipped with high-resolution cameras and sensors, drones can detect issues such as pests, plant diseases, or areas requiring additional irrigation with high accuracy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="relative bg-white py-2 lg:py-10 z-10 mb-10">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                            <h2 className="text-[#0A6847] text-3xl lg:text-4xl font-bold text-center mb-0 lg:mb-4" data-aos="fade-right">Testimonial</h2>
                    
                            <div className="bg-white rounded-lg shadow-lg p-8 lg:px-12 lg:pt-2 lg:pb-10 max-w-7xl mx-auto">
                                <h3 className="text-[#0A6847] text-xl font-semibold mb-10 text-center" data-aos="fade-left">What They Say About Fito Loka</h3>
                                <div className="flex flex-wrap justify-center gap-x-8 -bottom-3 h-80 overflow-y-scroll hide-scrollbar scroll-shadow transition-shadow duration-300 ease-in-out" data-aos="flip-right" data-aos-delay="100">

                                    
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0">
                                        <p className="text-sm text-[#0A6847]">"The Fito Loka products have greatly helped me improve my crop yields. The modern technology implemented makes field work much easier."</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Budi Santoso</h4>
                                                <p className="text-xs text-[#0A6847]">Rice Farmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between mt-4 lg:mt-8 lg:h-[200px]">
                                        <p className="text-sm text-[#0A6847]">"I highly recommend Fito Loka to other farmers. The experience of using this product is truly satisfying!"</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Siti Aminah</h4>
                                                <p className="text-xs text-[#0A6847]">Vegetable Farmer</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0">
                                        <p className="text-sm text-[#0A6847]">"Drone-based plant watering innovation is highly efficient and makes the work easier."</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Agus Pratama</h4>
                                                <p className="text-xs text-[#0A6847]">Fruit Farmer</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0">
                                        <p className="text-sm text-[#0A6847]">"Fito Loka has changed the way I farm. With their products, my crop yields have improved and the quality of my plants has gotten better!"</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Andrian Hidayat</h4>
                                                <p className="text-xs text-[#0A6847]">Vegetable Farmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between mt-4 lg:mt-8 lg:h-[200px]">
                                        <p className="text-sm text-[#0A6847]">"Since using Fito Loka fertilizers, I have experienced a significant improvement in my land's productivity, making me more confident in my farming practices."</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Vika Lestari</h4>
                                                <p className="text-xs text-[#0A6847]">Corn Farmer</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0 mb-8 lg:mb-0">
                                        <p className="text-sm text-[#0A6847]">"The services and products from Fito Loka have greatly helped me in improving my organic fruit yields. Thank you, Fito Loka!"</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Muhammad Ibnu</h4>
                                                <p className="text-xs text-[#0A6847]">Organic Fruit Farmer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
  )
}

export default PortoPage
