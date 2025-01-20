import React, { useEffect } from 'react'
import pr1 from "../images/project2.png"
import pr2 from "../images/project1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
      useEffect(() => {
              AOS.init();
            }, [])
  return (
    <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" id="home" className=" w-full pt-6 mb-10 md:pt-0  ">
         <div  className="px-20 xl:px-12 nb:px-5">    
            <h2
className="font-bold dancing-script text-[30px] text-[#781727] text-center" >
        Proyektlarim
        </h2></div>
       
      <div className="flex px-20 items-center  mt-12 justify-between xl:gap-x-7 xl:px-12 md:gap-3 lg:px-8 md:flex-col nb:px-5 md:items-center">
        <div className=" w-[48%]  md:w-[100%]">
          <a href="https://fom-clinic.uz">
              <img src={pr1} alt="projects" loading='lazy' className='transform transition-transform duration-300 hover:scale-105 hover:shadow-lg' />
          </a>
            </div>
             <div className=" w-[48%]  md:w-[100%]">
          <a href="https://shakhzadef-biografiya.vercel.app/">
              <img src={pr2} alt="projects" loading='lazy' className='transform transition-transform duration-300 hover:scale-105 hover:shadow-lg' />
          </a>
            </div>
            </div></div>
  )
}

export default Projects