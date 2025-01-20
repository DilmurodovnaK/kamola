
import image from "../images/about.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = () => {
   
      useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div  id="about" className=" w-full   mt-16 md:mb-24 nb:mb-2  nb:mt-36 xl:px-0  ">
      <div  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="flex px-20 xl:px-12 items-center nb:px-5  nb:h-[800px] h-[550px] gap-x-5 md:flex-col  nb:items-center nb:justify-center  justify-between ">
        <div className="max-w-[500px] nb:max-w-[600px] md:order-2">
          <img
          src={image}
            alt="myphoto"
            width={450}
            className="max-w-[650px] w-[90%] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg  md:w-[100%] md:max-w-[400px] md:max-h-[420px]"
          />
        </div>
        <div className="flex md:order-1 nb:mb-6 flex-col w-[50%] gap-1 nb:items-center  items-start nb:w-[100%]  md:w-[80%]">
          <h2 className=" font-bold text-4xl text-white mb-2  max-w-[650px] dancing-script ">
            <span className="text-[#781727] ">Salom!</span> Men Kamola
          </h2>
          {/* <p className="font-medium text-[22px] text-[#781727] nb:text-center  max-w-[580px] md:font-light md:text-[17px] md:leading-[22px]">
            Frontend React Dasturchiman
          </p> */}
          <p className="font-medium text-lg text-white   max-w-[580px] md:font-light md:text-lg ">
           Hozirda 18yoshman va KIUT institutinig 1-kurs talabasiman, 2024-yil Fevral oyida Frontend React kursini bitirganman, Men zamonaviy texnologiyalarni tez o`zlashtiradigan, kreativ fikrlovchi  React dasturchisiman. Men foydalanuvchi uchun qulay, samarali va estetik jihatdan jozibali veb-loyihalarni yasashga intilaman.

          </p>

          <div className="flex mt-2 justify-between  ">
            <div className="flex flex-col gap-1 w-[160px] ms:w-[130px]">
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                Tug`ilgan Sana
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                Telefon Raqam
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]"></span>
             
              <span className=" text-white md:text-[14px] font-medium text-[17px]">
                Hobby
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                Yashash Joyi
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : Dekabr, 2006
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : +998 970063404
              </span>
           
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : Stol tennisi, Suratga olish
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : Toshkent Shahar, Yakkasaroy Tumani, Rakat
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
