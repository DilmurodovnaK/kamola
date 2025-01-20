import image from '../images/myphoto.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
          AOS.init();
        }, [])
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className=" w-full pt-6 pb-5 md:pt-16  ">
      <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="flex px-20 items-center max-h-[670px] justify-between xl:gap-x-7 xl:px-12 md:gap-3 lg:px-8 md:flex-col nb:px-5 md:items-center">
        <div className="flex  flex-col w-[50%] items-start gap-7 xl:gap-4  md:w-[100%]">
          <h1 className=" font-bold dancing-script text-[60px] xl:text-[48px]  leading-[60px] text-white max-w-[550px] md:text-[40px] md:leading-[40px]">
            Yo`lchiyeva Kamola Dilmurodovna
          </h1>
          <p className="font-normal playfair-display text-[20px] text-white  lg:text-[15px]  leading-[30px] max-w-[580px] md:font-light md:text-[19px] md:leading-[24px]">
            Men Frontend React dasturchisi sifatida mijozlarga yuqori sifatli veb-saytlar va foydalanuvchi interfeyslari yaratish bo'yicha xizmatlar ko'rsataman. Mening maqsadim — mijozlarimga mukammal va samarali xizmatlar taqdim etishdir!
          </p>
        </div>

        <img
          src={image}
          loading="lazy"
          alt="doktor"
          className="max-w-[470px] w-[50%] max-h-[555px]  md:w-[100%] md:max-w-[390px] md:max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default Header;
