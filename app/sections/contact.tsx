import React from "react";
import Iridescence from "../components/Iridescence/Iridescence";

const ContactMe = () => {
  return (
    <div className="w-[90vw] h-[65vh] relative mb-12">
      <div className="w-full h-full rounded-3xl overflow-hidden">
        <Iridescence
          color={[0.55, 0.55, 0.57]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
        />
      </div>
      <div className="absolute inset-0 w-full h-full mx-12 py-14 flex flex-col justify-between ">
        <h1 className="text-4xl leading-[1.1] w-[60vw]">
          Wanna create somthing <span className="font-bold">awesome</span>{" "}
          together?
        </h1>
        <div className="">
        <a
          href="mailto:mohammadtaheri.dev@gmail.com"
          className="flex flex-row justify-evenly items-center rounded-full border-2 border-[#e0e0e0] w-72 h-14 bg-transparent text-[#e0e0e0] font-[Montserrat] font-medium text-xl transition-colors duration-300 ease-in-out hover:bg-[#e0e0e0] hover:text-[#121212] group mb-6"
        >
          <img
            src="./icons/Star.svg"
            className="h-2/4 transition-transform duration-700 ease-in-out transform rotate-0 group-hover:rotate-[360deg] group-hover:filter group-hover:invert"
            alt="Star"
          />
          <span className="transition-colors duration-300 ease-in-out group-hover:text-[#121212]">
            Get In Touch
          </span>
          <img
            src="./icons/Star.svg"
            className="h-2/4 transition-transform duration-700 ease-in-out transform rotate-0 group-hover:rotate-[360deg] group-hover:filter group-hover:invert"
            alt="Star"
          />
        </a>
        <div>
          <h1 className="text-xl">Don't like shiny buttons?</h1>
          <h1 className="text-xl">reach out to me at:</h1>
          <div className="flex flex-row mt-4">
            <a href="https://www.linkedin.com/in/mohammad-taheri-6b5ba0241">
              <img src="./icons/linkedinIcon.svg" />
            </a>
            <a href="https://t.me/Mhdtr99">
              <img src="./icons/telegramIcon.svg" />
            </a>
            <a href="mailto:mohammadtaheri.dev@gmail.com">
              <img src="./icons/gmailIcon.svg" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
