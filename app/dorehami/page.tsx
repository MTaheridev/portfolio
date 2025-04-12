"use client";
import React, { useRef } from "react";
import Particles from "../components/Particles/particles";
import { Icon } from "@iconify/react";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";

const LandingPage = () => {
  // Create refs for each of the 5 sections
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Array of content for each section
  const sectionsContent = [
    <Section1 key={"section1"} />,
    <Section2 key={"section2"} />,
    <Section3 key={"section3"}/>,
    <Section4 key={"section4"}/>,
    <Section5 key={"section5"}/>,
  ];

  // Function to scroll to a given section index
  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-lvh overflow-hidden">
      {/* Loop through sections */}
      {sectionRefs.map((ref, index) => (
        <div key={index} ref={ref} className="relative overflow-x-hidden overflow-y-auto h-lvh w-lvw scroll-smooth">
          <div>
            {/* Render the specific content for each section */}
            {sectionsContent[index]}

            {/* Render "Previous Section" button for sections 2 to 5 */}
            {index > 0 && (
              <button
                onClick={() => scrollToSection(index - 1)}
                className="absolute top-[1%] left-[50%] -translate-x-1/2 z-50"
              >
                <Icon
                  icon="simple-line-icons:arrow-up"
                  className="text-4xl text-white mt-6"
                />
                

              </button>
            )}

            {/* Render "Next Section" button for sections 1 to 4 */}
            {index < sectionRefs.length - 1 && (
              <button
                onClick={() => scrollToSection(index + 1)}
                className="absolute bottom-[3%] left-[50%] -translate-x-1/2 z-50 flex flex-col justify-center items-center"
              >
                <h2 className="font-[Vazirmatn] font-light">دیگه چی؟</h2>
                <Icon
                  icon="simple-line-icons:arrow-down"
                  className="text-4xl text-white"
                />
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Particles Background */}
      <div className="fixed top-0 left-0 -z-10 w-lvw h-lvh">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

    </div>
  );
};

export default LandingPage;
