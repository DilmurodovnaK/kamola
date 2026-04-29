
import image from "../images/about2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = () => {
   
      useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div  id="about" className=" w-full mb-20   mt-16 md:mb-24 nb:mb-2  nb:mt-40 ms:mt-56 xl:px-0  ">
      <div  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="flex px-20 xl:px-12 items-center nb:px-5  nb:h-[800px] h-[550px] gap-x-5 md:flex-col  nb:items-center nb:justify-center  justify-between ">
        <div className="max-w-[500px] nb:max-w-[600px] md:order-2">
          <img
          src={image}
            alt="myphoto"
            width={450}
            className="max-w-[650px] w-[90%]   md:w-[100%] md:max-w-[400px] md:max-h-[470px]"
          />
        </div>
        <div className="flex md:order-1 nb:mb-6 flex-col w-[50%] gap-1 nb:items-center  items-start nb:w-[100%]  md:w-[80%]">
          <h2 className=" font-bold text-4xl text-white mb-2  max-w-[650px] pacifico-regular ">
            <span className="text-[#781727] ">Здравствуйте!</span> Я Камола
          </h2>
          {/* <p className="font-medium text-[22px] text-[#781727] nb:text-center  max-w-[580px] md:font-light md:text-[17px] md:leading-[22px]">
            Frontend React Dasturchiman
          </p> */}
          <p className="font-medium text-lg text-white   max-w-[580px] md:font-light md:text-lg ">
        Сейчас мне 19 лет, я студентка второгр курса университета KIUT. Я окончила курс Frontend React в феврале 2024 года. Я креативный разработчик React, который быстро осваивает современные технологии. Я стремлюсь создавать удобные, эффективные и эстетически привлекательные веб-дизайны.

          </p>

          <div className="flex mt-2 justify-between  ">
            <div className="flex flex-col gap-1 w-[160px] ms:w-[130px]">
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                Дата рождения
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
               Номер телефона
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]"></span>
             
              <span className=" text-white md:text-[14px] font-medium text-[17px]">
               Хобби
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
               Адрес 
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : Декабрь, 2006
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : +998 970063404
              </span>
           
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : Настольный теннис, Фотография
              </span>
              <span className=" text-white md:text-[14px]  font-medium text-[17px]">
                : Город Ташкент, Яккасарайский район, Ракат
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
