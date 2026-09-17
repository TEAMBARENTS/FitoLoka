import { useEffect } from 'react'
import BgHero from '../assets/img/bg-hero1.webp' // Image by https://irrigation.org/...
import { ReactTyped } from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource/poppins';

const Hero = ({ inputLahan, setInputLahan, handleCariLahan, pesanError }) => {
    useEffect(()=> {
        AOS.init({});
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section>
      <div className="max-w-[1240px] h-[96vh]">
        <div
          className="relative w-screen bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${BgHero})` }}
        >
        
        <div className="relative w-screen bg-gradient-to-t from-[#196348] via-transparent to-transparent bg-[#001803] bg-opacity-60 h-full">
        <div className="max-w-[1240px] flex flex-col items-center text-center justify-center h-full mx-auto">
            <div className="tracking-widest text-white">
              <h1
                className="md:text-5xl sm:text-6xl md:py-4 font-poppins font-medium text-3xl"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Welcome to
                <p
                  className="md:text-6xl sm:text-7xl text-4xl font-bold font-poppins pt-4 mb-5 lg:mb-0"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  FITO
                  <span className="font-thin font-poppins">LOKA</span>
                </p>
              </h1>
            </div>
            
            <ReactTyped 
              className="text-lg sm:text-xl md:text-2xl text-center font-poppins font-normal max-w-screen-md mx-8 text-white" 
              strings={['<div class="text-center"><p>Modern agricultural innovation supporting productivity</p> <p> and sustainability for the future of farming. </p></div>']} 
              typeSpeed={35} 
              showCursor={false} 
            />

            <div 
              className="mt-4 w-full max-w-2xl px-6 z-10"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <form onSubmit={handleCariLahan} className="flex flex-col items-center relative">
                
                <div className="relative w-full max-w-lg flex items-center">
                  
                  <div className="absolute left-6 text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>

                  <input 
                    type="text" 
                    className="w-full py-2 pl-16 pr-6 bg-white/20 rounded-full text-gray-800 font-poppins focus:outline-none placeholder-gray-800"
                    placeholder="Find Your Agricultural Farmland"
                    value={inputLahan}
                    onChange={(e) => setInputLahan(e.target.value)}
                  />
                  
                  <div className="absolute right-6 backdrop-blur-sm md:backdrop-blur-none border-l-2 pl-4 border-gray-800/30">
                    <button type="submit" className="text-gray-800/80 font-semibold">Search</button>
                  </div>

                </div>
                {pesanError && (
                  <div className=" text-gray-800 py-2 text-md font-bold font-poppins">
                    {pesanError}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
        </div>
        </div>
  </section>
  )
}

export default Hero