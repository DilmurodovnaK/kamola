"use client";
import React, {  useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Checkbox from "@mui/material/Checkbox";
const Yozilish = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    xabar: "",
    tel: "",
   
  });
  const [isChecked,  setIsChecked] = useState(false);

  // Handle changes in the Select component
 

  const handleClick = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^\d]/g, ""); // Only allow digits
    setFormData({
      ...formData,
      tel: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isChecked) {
    alert("Пожалуйста, подтвердите согласие на политику конфиденциальности.");
    return;
  }

  const TELEGRAM_TOKEN = "8041622895:AAFz5ZwUARFYlnHr3egm16JLDN_aOER8ODY";
  const CHAT_ID = "1334411608"; 

  const message = `FIO: ${formData.name}\nTelefon: ${formData.tel}\nUsernametg: ${formData.username}\nXabar:${formData.xabar} `;

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  // Log the message and URL for debugging
  console.log("Message to be sent:", message);
  console.log("Sending to Telegram API URL:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const result = await response.json();
    console.log("Telegram API response:", result); // Log the response from Telegram

    if (result.ok) {
      alert("Сообщение успешно отправлено!");
      setFormData({ name: "", username: "", xabar: "", tel: "" }); // Clear the form
      
    } else {
      alert("Ошибка при отправке сообщения! Ошибка API: " + result.description);
    }
  } catch (error) {
    alert("Ошибка при отправке сообщения!");
    console.error("Error:", error);
  }
};
 useEffect(() => {
              AOS.init();
            }, [])
  return (
    <div id="contacts" className="w-full mt-10">
      <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="p-14 mx-20 xl:mx-10 xl:px-5 nb:mx-5 lg:mx-8 bg-[#ac5b67] md:py-14 rounded-[14px]">
        <div className="flex justify-between items-start gap-10 nb:flex-col nb:items-center nb:gap-3">
          <h2 className="pacifico-regular max-w-[536px] font-bold text-[48px] leading-[48px] ms:text-[34px] ms:leading-[34px] ms:text-start text-white nb:text-center">
            Если вам нужно создать сайт для себя или бизнеса свяжитесь со мной
          </h2>
          <p className="script max-w-[355px] font-normal text-xl text-white nb:text-center md:text-lg ms:text-start">
           Оставьте свой запрос, и я свяжусь с вами в ближайшее время
          </p>
        </div>
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-between lg:justify-center gap-5 mt-16 nb:mt-10">
          <div className="flex flex-col space-y-4 min-w-[280px] max-w-[400px]">
            <div>
            
                <input
              type="text"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              name="name"
               id="name"
              value={formData.name}
              onChange={handleClick}
              placeholder= "ФИО"
              required
            />
            </div>

            <div>
           
                <input
              type="text"
              id="username"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Telegram Username"
              name="username"
              value={formData.username}
              onChange={handleClick}
              required
             
            />
              
            </div>
</div>
<div className="flex flex-col space-y-4 min-w-[280px] max-w-[400px]">
            <div>
            
               <input
              type="tel"
               id="tel"
                name="tel"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Ваш номер телефона"
              value={formData.tel}
              onChange={handlePhoneChange}
              required
            />
            </div>

            <div>
                            <input
              type="text"
               id="xabar"
                name="xabar"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Оставьте сообщение"
              value={formData.xabar}
              onChange={handleClick}
              required
            />
               
            </div>
</div>
<div className="flex flex-col space-y-4 min-w-[280px] max-w-[400px] justify-evenly">
            {/* Checkbox for privacy policy consent */}
            <div className='flex items-center'>
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              <span className='text-white'>Я соглас(-ен/-на)</span>
            </div>

         

          {/* Submit button */}
<button
  type="submit"
  className="w-full bg-white text-black text-sm border rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
>
Оставьте свой запрос
</button>
 </div>
        </form>

      </div>
    </div>
  );
};

export default Yozilish;
