// pages/register.tsx

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Compose the message text from the form fields
    const message = `🔷️ ثبت نام جدید دورهمی انجام شد:\n\n🙂 نام :\n🔹️ ${fullName}\n\n📱 شماره تماس :\n\n🔹️ ${phone}\n❔️ میزان آشنایی با برنامه نویسی :\n\n🔹️ ${experience}`;

    // Replace with your Telegram Bot Token and Chat ID
    const token = "8196658484:AAEf3bSLnuw_vpRSRP0HdMOwHN7VcOtM-tM";
    const chatId = "2014781460";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!res.ok) {
        throw new Error("Error sending message");
      }

      // Reset the form fields or show a success message
      setFullName("");
      setPhone("");
      setExperience("آشنایی ندارم");
      alert("ثبت نام انجام شد");
    } catch (error) {
      console.error(error);
      alert("حواست باشه با فیلترشکن روشن ثبت نام کنی!");
    }
  };

  // Common style for inputs and select element
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem",
    marginTop: "0.5rem",
    backgroundColor: "transparent",
    border: "1px solid lightgray",
    borderRadius: "1rem",
    color: "white",
  };

  // Label style
  const labelStyle: React.CSSProperties = {
    color: "white",
  };

  // Container style: full width & height, dark background, centered content
  const containerStyle: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  };

  // Form wrapper style
  const formWrapperStyle: React.CSSProperties = {
    maxWidth: "600px",
    width: "100%",
  };

  return (
    <div dir="rtl" style={containerStyle} className="font-[Vazirmatn]">
      <div style={formWrapperStyle}>
        <div className="flex flex-row mb-10">
          <Icon icon={"typcn:tick"} className="text-4xl text-white/70" />
          <h2 className="font-[Vazirmatn] text-2xl font-semibold">
            دوست داری شرکت کنی؟
          </h2>
        </div>
        <div className="flex flex-row mt-8 mb-10">
          <Icon
            icon={"simple-icons:comma"}
            className="text-3xl text-white/35 ml-2"
          />
          <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
            برای ثبت نام در دورهمی صمیمی ما لطفا اطلاعات خودت رو برامون بزار تا
            اسمت رو توی لیست بزارم.
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="fullName" style={labelStyle}>
              نام و نام خانوادگی:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="phone" style={labelStyle}>
              شماره تماس:
            </label>
            <input
              type="text"
              dir="ltr"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="experience" style={labelStyle}>
              میزان آشنایی با برنامه نویسی:
            </label>
            <input
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              // Tailwind classes for transparent background, white text, and focus styling
              className="bg-transparent text-white appearance-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              style={inputStyle}
            />
              
          </div>
          <button
            type="submit"
            className="flex flex-row justify-evenly items-center rounded-full border-2 border-[#e0e0e0] w-full h-14 bg-transparent text-[#e0e0e0] font-[Montserrat] font-medium text-lg transition-colors duration-300 ease-in-out hover:bg-[#e0e0e0] hover:text-[#121212] group mb-6"
          >
            <img
              src="./icons/Star.svg"
              className="h-2/4 transition-transform duration-700 ease-in-out transform rotate-0 group-hover:rotate-[360deg] group-hover:filter group-hover:invert"
              alt="Star"
            />
            <span className="transition-colors duration-300 ease-in-out group-hover:text-[#121212] font-[Vazirmatn]">
              ثبت نام
            </span>
            <img
              src="./icons/Star.svg"
              className="h-2/4 transition-transform duration-700 ease-in-out transform rotate-0 group-hover:rotate-[360deg] group-hover:filter group-hover:invert"
              alt="Star"
            />
          </button>
        </form>
      </div>
      <style jsx>{`
        /* Custom styles for the select options */
        .custom-select option {
          color: white;
          background-color: rgba(255, 255, 255, 0.2);
        }
        .custom-select option:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Register;
