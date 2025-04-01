"use client";
import { useRef, useState } from "react";
import HomeSection from "./sections/home";
import AboutSection from "./sections/about";
import WorkSection from "./sections/work";
import ContactMe from "./sections/contact";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center">
      <div className="h-24 lg:hidden"></div>
      <div ref={homeRef}>
        <HomeSection scrollDown={() => scrollToSection(aboutRef)} />
      </div>

      <div ref={aboutRef}>
        <AboutSection scrollToContact={() => scrollToSection(contactRef)} />
      </div>

      <div ref={workRef}>
        <WorkSection />
      </div>

      <div ref={contactRef}>
        <ContactMe />
      </div>

      <div className="fixed z-50 top-0 left-0 w-full flex flex-row justify-between items-center px-5 pb-4 bg-[#121212] lg:bg-transparent">
        <div className="flex flex-row justify-center items-center">
        <div className="col-span-2 " onClick={() => scrollToSection(homeRef)}>
          <h1 className="text-3xl mt-5">Mohammad</h1>
          <h1 className="text-3xl">Taheri</h1>
        </div>
        <div className="hidden lg:flex flex-row justify-evenly items-center self-center w-96 h-12 bg-[#1e1e1e]/30 backdrop-blur-lg  rounded-full ml-4 px-1 col-span-4">
          <h1
            className="font-extralight"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </h1>
          <h1
            className="font-extralight"
            onClick={() => scrollToSection(workRef)}
          >
            My Work
          </h1>
          <h1
            className="font-extralight"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact Me
          </h1>
        </div>
        </div>
        <div>
          <div
            className="lg:hidden border-2 border-[#e0e0e0] rounded-3xl py-2 px-5 text-[#e0e0e0]"
            onClick={menuHandler}
          >
            {isOpen ? "X" : "Menu"}
          </div>
        </div>
      </div>

      {
        isOpen && (
          <div className="lg:hidden fixed z-50 bottom-0 w-[100vw] bg-[#121212]/80 h-[25vh] rounded-3xl flex flex-col justify-evenly items-center">
          <a onClick={() => scrollToSection(aboutRef)} className="text-[#e0e0e0] font-[Montserrat] text-lg">About</a>
          <hr className="w-full"/>
          <a onClick={() => scrollToSection(workRef)} className="text-[#e0e0e0] font-[Montserrat] text-lg">My Work</a>
          <hr className="w-full"/>
          <a onClick={() => scrollToSection(contactRef)} className="text-[#e0e0e0] font-[Montserrat] text-lg">Contact me</a>
        </div>
        )
      }
    </div>
  );
}
