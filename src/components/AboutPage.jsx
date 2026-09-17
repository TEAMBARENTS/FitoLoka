import {useEffect} from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos'
import bg1 from '../assets/img/background.webp' // img by google search
import ilustrasi from '../assets/img/illustration1.webp' // img by canva pro
import mockup from '../assets/img/mockup.webp' // img by canva pro
import ilustrasi2 from '../assets/img/illustration2.webp' // img by canva pro
import tim2 from '../assets/img/member/raflish.webp' // img by Nice Team
import bgv from '../assets/img/background-visi.webp' // img by Nice Team
import w from '../assets/img/wallpaper.webp' // img by Nice Team
import Chart from './Chart';
import '@fontsource/poppins';   


const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0),
    AOS.init({duration: 1300});
  }, []);

  return (
      <div className='font-poppins'>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-32 lg:top-3 left-1/2 transform -translate-x-1/2 text-center text-white xl:pt-16 my-auto" >
                <div data-aos="zoom-out">
                    <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold" >Fito Loka</h1>
                    <p className="mt-4 text-lg md:text-2xl">The future of modern agriculture</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-white rounded-tl-3xl rounded-tr-3xl px-10 py-6">
                    <div className="flex flex-col md:flex-row justify-center items-center py-6">
                        <div className="ml-0 max-w-2xl text-[#0A6847]">
                            <h1 className="text-center lg:text-start text-xl lg:text-5xl font-bold mb-6">What is Fito Loka?</h1>
                            <p className="text-md lg:text-2xl text-justify">
                                Fito Loka is a company dedicated to bringing innovation and modern solutions to the world of agriculture. We believe that agriculture is the backbone of life, and we are committed to supporting farmers in meeting the challenges of the modern era.
                            </p>
                        </div>
                        <div className="mt-10 md:mt-5 flex-shrink-0 " >
                            <img src={ilustrasi} alt="Fito Loka" className="w-full md:w-[400px] lg:w-[500px] h-auto rounded-lg transform transition duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>

             <div className="relative h-fit bg-cover bg-center bg-no-repeat py-10 mt-52 md:mt-20 lg:mt-0" style={{ backgroundImage: `url(${bgv})` }}>
                <div className="absolute inset-0 bg-[#0A6847] opacity-90"></div>
                <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-48 items-center">
                    <div className="py-16 mx-10 lg:mx-0" data-aos="zoom-out-right">
                        <div className="bg-gray-50/10 p-8 rounded-lg shadow-lg z-10 backdrop-blur-lg  mb-16 lg:mb-10 transform transition duration-300 hover:scale-105">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">Vision</h2>
                            <ul className="list-disc list-inside text-sm lg:text-xl text-white text-justify mb-4">
                            We aspire to be an industry leader by continuously delivering innovative and high-value solutions to our clients. Our vision is to create a positive, sustainable impact on society through the products and services we offer.
                            </ul>
                        </div>
                        <div className="bg-gray-50/10 p-8 rounded-lg shadow-lg z-10 backdrop-blur-lg transform transition duration-300 hover:scale-105">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">Mission</h2>
                            <div className="list-disc list-outside text-sm lg:text-xl text-white text-justify mb-4">
                                <li>Providing high-quality services tailored to client needs.</li>
                                <li>Developing innovative solutions that positively impact client businesses.</li>
                                <li>Being a trusted partner for every client in navigating modern agricultural and business challenges.</li>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center z-10">
                        <h2 className="max-w-sm text-6xl leading-normal font-bold text-white text-center  transform transition duration-300 hover:scale-105">Vision & Mission of Fito Loka</h2>
                    </div>
                </div>
            </div>

             <div className="bg-white mt-16 px-10 lg:px-20">
                 <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                 <div className="block lg:hidden w-[80vh] justify-center mb-10">
                         <img src={mockup} alt="History of Fito Loka" className="w-[30vh] h-[20vh] transform transition duration-300 hover:scale-105 rounded-[4vh] mx-auto" />
                     </div>
                     <div className="lg:w-1/2 mr-0 lg:mr-14 max-w-xl">
                         <h2 className="text-center lg:text-left text-xl lg:text-3xl font-bold text-[#0A6847] mb-6">The History of Fito Loka</h2>
                         <p className="text-sm lg:text-lg text-justify text-[#0A6847] mb-0 lg:mb-6">
                             Fito Loka was founded with the vision to drive positive transformation in Indonesian agriculture. Born from a passion to overcome challenges faced by local farmers, Fito Loka serves as a bridge between modern technology and agricultural practices. With dedication and hard work, we have grown into a company that not only delivers high-quality products but also provides sustainable solutions to improve farmer welfare.
                         </p>
                     </div>
                     <div className="hidden lg:block lg:w-[80vh] justify-center px-16" data-aos="fade-down-left">
                         <img src={mockup} alt="History of Fito Loka" className=" lg:w-[65vh] lg:h-[40vh] transform transition duration-300 hover:scale-105 rounded-[4vh]" />
                     </div>
                 </div>
             </div>
            

             <div className="relative bg-white mt-2 h-fit">
                 <div className="flex flex-col lg:flex-row justify-center items-center my-10">
                     <div className="container mx-5 max-w-sm lg:mx-4 lg:max-w -xl mb-4 lg:mb-10">
                         <div className="max-w-lg mx-auto justify-center" data-aos="fade-up">
                            <Chart />
                         </div>
                         <p className="text-sm text-gray-500 text-center">FitoLoka Service Usage Data 2026</p>
                     </div>
                     <div className="text-[#0A6847] px-2 py-5 max-w-2xl ml-0 lg:ml-10">
                         <h1 className="text-xl text-center lg:text-start lg:text-2xl font-bold mb-4">We Keep Growing</h1>
                         <p className="text-sm lg:text-lg text-justify mx-10 lg:mx-0 mb-10">Fito Loka is always committed to providing innovative and sustainable agricultural solutions for farmers in East Java. By harnessing cutting-edge technology, we continuously strive to enhance service quality, from distributing superior seeds to providing education on efficient farming techniques.   
                         </p>
                     </div>
                 </div>
             </div>

             <div className="relative bg-[#0A6847] pt-20 pb-6 h-fit">
                 <div className="container mx-auto px-4 text-center">
                     <h2 className="text-xl text-white lg:text-2xl md:text-2xl font-bold mb-4 lg:mb-6">Why Choose Fito Loka?</h2>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center py-8 px-6 lg:px-3">
                     <div className=" p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 max-w-md h-44 lg:h-54" style={{ backgroundImage: `url(${w})` }} >
                         <h2 className="text-[#0A6847] text-xl font-semibold">Quality Products</h2>
                         <p className="mt-2 text-sm text-[#0A6847]">We provide high-quality agricultural products that have been tested and proven to enhance crop yields. Fito Loka is always committed to delivering the best for farmers.</p>
                     </div>
                     <div className=" p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 max-w-md lg:max-w-lg h-44 lg:h-54" style={{ backgroundImage: `url(${w})` }}>
                         <h2 className="text-[#0A6847] text-xl font-semibold">Agricultural Solutions</h2>
                         <p className="mt-2 text-sm text-[#0A6847]">Leveraging state-of-the-art technology and innovation, Fito Loka delivers modern, efficient agricultural solutions, helping farmers produce more abundant and premium harvests.</p>
                     </div>
                     <div className="p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 max-w-md lg:max-w-md h-44 lg:h-54" style={{ backgroundImage: `url(${w})` }}>
                         <h2 className="text-[#0A6847] text-xl font-semibold">Experienced Team</h2>
                         <p className="mt-2 text-sm text-[#0A6847]">Fito Loka is supported by experienced agricultural experts, ready to assist farmers with technical knowledge and guidance to optimize their yields.</p>
                     </div>
                 </div>
                <div className="flex flex-col lg:flex-row max-w-7xl items-center justify-center py-8 mx-auto">
                     <div className="hidden lg:block max-w-md transform transition duration-300 hover:scale-105">
                         <img src={ilustrasi2} data-aos='flip-right'/>
                     </div>
                     <div className="px-4 text-white lg:ml-10">
                         <h1 className="text-xl lg:text-4xl font-bold mb-4 text-center lg:text-left">Maximum Yields, Ideal Agriculture</h1>
                         <p className="text-sm lg:text-2xl md:text-lg lg:leading-10 text-justify max-w-2xl lg:max-w-2xl">With modern agricultural services and eco-friendly products, we are ready to provide effective and efficient solutions to boost your land's productivity. Join us, enjoy ease in every farming step, and experience real transformation on your land. Together with Fito Loka, toward better and sustainable agriculture!</p>
                     </div>
                     <div className="block lg:hidden w-72 h-auto max-w-lg my-10 transform transition duration-300 hover:scale-105">
                         <img src={ilustrasi2} />
                     </div>
                 </div>
             </div>

           <div className="bg-white py-16 mb-20">
                 <div className="mx-auto">
                     <h2 className="text-2xl lg:text-5xl font-bold text-center text-[#0A6847] mb-2 lg:mb-6">Our Team</h2>
                     <p className="text-lg lg:text-2xl text-[#0A6847] text-center mb-10 lg:mb-14 px-20 ">We are a passionate team dedicated to delivering the best innovations and solutions for our clients.</p>
                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center px-32 lg:px-20"  data-aos="zoom-in" >
                         <div className="relative bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg mx-auto lg:mx-0 transform transition duration-300 hover:scale-105" >
                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                 <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                     {/* <img src={tim1} alt="Cropped Image" className="w-full h-full object-cover" /> */}
                                 </div>
                             </div>
                             <div className="pt-12 text-center">
                                 <h3 className="text-xl font-semibold text-[#0A6847]">Farel Nova Ardian</h3>
                                 <p className="text-sm text-gray-600 mt-2">Chief Executive Officer</p>
                             </div>
                         </div>
            
                        <div className="relative bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg mx-auto lg:mx-0 transform transition duration-300 hover:scale-105">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                    <img src={tim2} alt="Cropped Image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="pt-12 text-center">
                                <h3 className="text-xl font-semibold text-[#0A6847]">Muhammad Rafli Safirashad</h3>
                                <p className="text-sm text-gray-600 mt-2">Chief Operating Officer</p>
                            </div>
                        </div>
            
                         <div className="relative bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg mx-auto lg:mx-0 transform transition duration-300 hover:scale-105">
                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                 <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                     {/* <img src={tim3} alt="Cropped Image" className="w-full h-full object-cover" /> */}
                                 </div>
                             </div>
                             <div className="pt-12 text-center">
                                 <h3 className="text-xl font-semibold text-[#0A6847]">Muhammad Hilman Fanani</h3>
                                 <p className="text-sm text-gray-600 mt-2">Chief Financial Officer</p>
                           </div>
                         </div>
            
                     </div>
                 </div>
             </div>
        </div>
  )
}

export default AboutPage
