import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f4330] pb-6 lg:pb-0">
      <div className="max-w-[1240px] h-[200px] lg:mx-auto lg:h-auto mx-10 py-10 lg:py-16 px-4 grid lg:grid-cols-4 gap-8 text-white">
        <div>
          <h1 className="text-center lg:text-start w-full text-xl lg:text-3xl font-bold">
            Fito Loka - Modern Agricultural Solutions
          </h1>
          <p className="py-4 text-center lg:text-start">
            © 2026 Fito Loka. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 lg:gap-0 lg:justify-between md:w-[75%] my-4 mx-auto lg:mx-0">
            <div className="hover:scale-110 duration-300">
              <FaFacebookSquare size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaInstagram size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaTwitterSquare size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaGithubSquare size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaLinkedin size={30} />
            </div>
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:flex justify-between mt-6 px-8">
          <div>
            <ul>
              <li className="py-2 text-xs lg:text-sm">Digital Agriculture</li>
              <li className="py-2 text-xs lg:text-sm">Smart Irrigation</li>
              <li className="py-2 text-xs lg:text-sm">Greenhouse</li>
              <li className="py-2 text-xs lg:text-sm">Precision Farming</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-2 text-xs lg:text-sm">Hydroponic Systems</li>
              <li className="py-2 text-xs lg:text-sm">Organic Fertilizers</li>
              <li className="py-2 text-xs lg:text-sm">Soil Management</li>
              <li className="py-2 text-xs lg:text-sm">Fertilization Technology</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-2 text-xs lg:text-sm">
                Jl. Bukhori No.17, Kedungkendo
              </li>
              <li className="py-2 text-xs lg:text-sm">Candi, Sidorjo</li>
              <li className="py-2 text-xs lg:text-sm">East Java, Indonesia</li>
              <li className="py-2 text-xs lg:text-sm">(+62) 823 3589 4637</li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block mt-6">
          <iframe
            title="Location of Fito Loka"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7911.828571363536!2d112.68550910174262!3d-7.474717471153535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Bukhori%20No.17%2C%20Kedungkendo%2C%20Candi%2C%20Sidoarjo%20!5e0!3m2!1sid!2sid!4v1788684865148!5m2!1sid!2sid"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Footer;
