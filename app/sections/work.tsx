import React from "react";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import ScrollVelocity from "../components/ScrollVelocity/ScrollVelocity";
import SkillItem from "../components/SkillItem/skillItem";
import { Icon } from "@iconify/react/dist/iconify.js";

const WorkSection = () => {
  return (
    <div className="flex flex-col items-center">
      
      <div className="w-lvw work-section">
        <SpotlightCard
          className="custom-spotlight-card h-full w-full lg:col-span-7 lg:row-span-2 lg:col-start-2 xl:col-span-4 xl:row-span-3 xl:col-start-3 xl:row-start-1"
          spotlightColor="rgba(30, 136, 229, 0.4)"
        >
          <img src="./icons/crmIcon.svg" className="h-1/6" />
          <h1 className="font-medium text-2xl mt-8">
            CRM Application Developer
          </h1>
          <p className="font-light text-lg mt-6 leading-relaxed">
            Developed and deployed CRM applications, improving operational
            efficiency by 30%.
          </p>
          <p className="font-light text-lg w-full text-right">Freelance</p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-full w-full lg:col-span-7 lg:row-span-2 xl:col-span-4 xl:row-span-3 xl:col-start-3 xl:row-start-4"
          spotlightColor="rgba(30, 136, 229, 0.4)"
        >
          <img src="./icons/figmaIcon.svg" className="h-1/6" />
          <h1 className="font-medium text-2xl mt-8">UI Designer</h1>
          <p className="font-light text-lg mt-6 leading-relaxed">
            Designed responsive user interfaces, increasing user engagement by
            25%.
          </p>
          <p className="font-light text-lg w-full text-right">Freelance</p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-full w-full lg:col-span-7 lg:row-span-2 lg:col-start-2 xl:col-span-4 xl:row-span-3 xl:col-start-7 xl:row-start-1"
          spotlightColor="rgba(30, 136, 229, 0.4)"
        >
          <img src="./icons/apiIcon.svg" className="h-1/6" />
          <h1 className="font-medium text-2xl mt-8">API Integrator</h1>
          <p className="font-light text-lg mt-6 leading-relaxed">
            Collaborated on a digital currency broker application, integrating
            real-time data APIs.
          </p>
          <p className="font-light text-lg w-full text-right">Freelance</p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-full w-full lg:col-span-7 lg:row-span-2 xl:col-span-4 xl:row-span-3 xl:col-start-7 xl:row-start-4"
          spotlightColor="rgba(30, 136, 229, 0.4)"
        >
          <img src="./icons/reactIcon.svg" className="h-1/6" />
          <h1 className="font-medium text-2xl mt-8">Frontend Lead</h1>
          <p className="font-light text-lg mt-6 leading-relaxed">
            Led front-end development for an arbitrage platform, optimizing
            performance for faster transactions.
          </p>
          <p className="font-light text-lg w-full text-right">
            PROLLET (co-founder)
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-full w-full lg:col-span-7 lg:row-span-2 lg:col-start-2 xl:col-span-4 xl:row-span-3 xl:col-start-11 xl:row-start-1"
          spotlightColor="rgba(30, 136, 229, 0.4)"
        >
          <img src="./icons/pythonIcon.svg" className="h-1/6" />
          <h1 className="font-medium text-2xl mt-8">Python Instructor</h1>
          <p className="font-light text-lg mt-6 leading-relaxed">
            Created interactive programming courses, enhancing student
            engagement and comprehension by 40%.
          </p>
          <p className="font-light text-lg w-full text-right">
            Iran Technical Training Organization
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-full w-full lg:col-span-7 lg:row-span-2 xl:col-span-4 xl:row-span-3 xl:col-start-11 xl:row-start-4"
          spotlightColor="rgba(30, 136, 229, 0.4)"
        >
          <img src="./icons/netIcon.svg" className="h-1/6" />
          <h1 className="font-medium text-2xl mt-8">
            .NET Programming Instructor
          </h1>
          <p className="font-light text-lg mt-6 leading-relaxed">
            Recorded over 120 training video sessions for a .NET programming
            course, helping students secure their first projects.
          </p>
          <p className="font-light text-lg w-full text-right">
            Tosegar Programming Academy
          </p>
        </SpotlightCard>
      </div>

      <div className="w-lvw h-[70vh] flex flex-col justify-evenly items-center">
        <h1 className="text-2xl self-center">SELECTED WORK</h1>
        <a href="https://everbloom-mt.vercel.app/"
          className="w-[90vw] md:w-[70vw] text-white translate-x-0 hover:translate-x-5 transition-transform duration-500 ease-in-out"
          
        >
          <h1 className="">E-commerce App</h1>
          <h1 className="text-2xl md:text-3xl font-bold my-4">EverBloom</h1>
          
          <hr className="w-full" />
        </a>
        <a href="https://3d-concert-hall.vercel.app/"
          className="w-[90vw] md:w-[70vw] text-white translate-x-0 hover:translate-x-5 transition-transform duration-500 ease-in-out"
          
        >
          <h1 className="">3D seat selection tool</h1>
          <h1 className="text-2xl md:text-3xl font-bold my-4">VR seat</h1>
          
          <hr className="w-full" />
        </a>
        <a href="https://3d-product-presenter.vercel.app/"
          className="w-[90vw] md:w-[70vw] text-white translate-x-0 hover:translate-x-5 transition-transform duration-500 ease-in-out"
          
        >
          <h1 className="">3D product presenter</h1>
          <h1 className="text-2xl md:text-3xl font-bold my-4">3D BMW</h1>
          
          <hr className="w-full" />
        </a>
        <a href="https://github.com/MTaheridev"
          className="w-[90vw] md:w-[70vw] text-white translate-x-0 hover:translate-x-5 transition-transform duration-500 ease-in-out"
          
        >
          <h1 className="">for any updates or new projects</h1>
          <h1 className="text-2xl md:text-3xl font-bold my-4">GitHub</h1>
          
          <hr className="w-full" />
        </a>

      </div>

      

      <div className=" mt-16 md:mt-24 lg:mt-32">
        <ScrollVelocity
          texts={["keep scrolling", "OR just leave"]}
          velocity={100}
          className="custom-scroll-text select-none text-[#e0e0e0]/30"
        />
      </div>

      <SkillItem
        topText="Web"
        gifSrc="./gifs/web.gif"
        bottomText="Development"
      />

      <SkillItem
        topText="Interface"
        gifSrc="./gifs/ui.gif"
        bottomText="Design"
      />
      <SkillItem
        topText="Mobile"
        gifSrc="./gifs/mobile.gif"
        bottomText="Development"
      />
      <SkillItem
        topText="Server-side"
        gifSrc="./gifs/server.gif"
        bottomText="Apps"
        className="mb-16 md:mb-24 lg:mb-32"
      />
    </div>
  );
};

export default WorkSection;
