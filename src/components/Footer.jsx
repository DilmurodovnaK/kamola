import React, { useEffect, useRef, } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tg from '/telegram.svg';

const Footer = () => {
  
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

   useEffect(() => {
                AOS.init();
              }, [])
  return (
    <footer id='kontakti' className="w-full mt-14 border-t-2 border-[#781727]  py-[70px] px-20 xl:px-10 sm:px-5 ">
      <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="flex justify-between items-center gap-x-10 xl:gap-x-7 sm:gap-x-4 md:flex-col md:items-center">
        {/* Left Section */}
        <div className="flex justify-between w-[60%] gap-x-10 md:w-full sm:flex-col sm:gap-y-5 sm:items-center">
          <div className="flex flex-col items-start gap-5 sm:items-center">
            <h2 className="pacifico-regular text-white text-4xl font-bold  sm:text-center ">Юлчиева Камола Дилмуродовна</h2>
           
            <p className="font-normal text-white max-w-[350px] text-start lg:text-sm md:text-center playfair-display">
                     
                       Каждый проект — это новое вдохновение для меня и шаг к успеху наших клиентов.
            </p>
          </div>
            <div>
             <p className="max-w-[380px] text-white lg:text-sm text-start md:text-center ">
           Моя цель — воплотить ваши идеи в реальность, повысив эффективность вашего бизнеса за счет современного дизайна и других инновационных решений.

            </p>
         </div>
         
        </div>

        {/* Right Section */}
        <div className="flex justify-between items-center w-[40%] gap-x-10 md:w-full sm:mt-5 sm:gap-y-5 sm:flex-col sm:items-center">
        <div className="flex flex-col gap-3 ">
            <p className="font-semibold text-white text-xl text-center pacifico-regular"> Телефон</p>
            <p className="font-semibold text-white text-xl lg:text-sm text-center ">(998) 97 006-34-04</p>
          
          </div>
          <div className="flex flex-col gap-3  text-center">
            <a href='https://t.me/dilmurodovna_k' className="flex text-white items-center gap-x-2 font-semibold">
              <img src={tg} alt="Telegram" width={30} height={30} />
              Написать в Telegram         </a>
            <a href='https://t.me/+vmoVKXVCRohhYWYy' className="flex text-white items-center gap-x-2 font-semibold">
              <img src={tg} alt="Telegram" width={30} height={30} />
             Телеграм канал       </a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
