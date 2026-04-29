import React, { useEffect } from 'react';

import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icons3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const card = [
 
  {
    title: "Создание веб-сайта",
    description: "Создание веб-приложений, разработка пользовательских интерфейсов, работа с React.",
    image: icon1, // reactIcon o'zgartiring, mos rasm yoki ikonani qo'ying
  },
  {
    title: "Landing Page",
    description: "Портфолио и корпоративные сайты для клиентов",
    image: icon2, // designIcon o'zgartiring, mos rasm yoki ikonani qo'ying
  },
  {
    title: "Персональный сайт",
    description: "Сайты, написанные на основе запросов клиентов ",
    image: icon3, // websiteIcon o'zgartiring, mos rasm yoki ikonani qo'ying
  },
  
 
];

const XizmatKorsatish = () => {
     useEffect(() => {
              AOS.init();
            }, [])
  return (
    <div id='services' className="w-full  ms:mt-28   mt-14 xl:px-0">
      <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="px-20 xl:px-12 nb:px-5">
        <h2 className="font-bold text-[30px] text-[#781727]  pacifico-regular text-center">Услуги</h2>
        <div className="flex justify-center  sm:flex-col sm:items-center gap-4 mt-5">
          {card.map((service, index) => (
            <div
              key={index}
              className="max-w-[440px] max-h-[360px] p-6 border border-[#781727] bg-[#D196A3] rounded-lg  shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              <h5 className="mb-3 text-2xl font-semibold pacifico-regular text-[#781727] tracking-tight text-center">
                {service.title}
              </h5>
              <p className="mb-3 font-medium text-lg text-[#00000] playfair-display text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XizmatKorsatish;
