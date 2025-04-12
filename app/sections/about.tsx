import React from 'react';
import TiltedCard from "../components/TiltedCard/TiltedCard";

type ScrollToContactFunction = () => void;

interface MyComponentProps {
    scrollToContact: ScrollToContactFunction;
}

const AboutSection : React.FC<MyComponentProps> = ({ scrollToContact }) => {
  return (
    <div className="w-lvw lg:h-[75vh] about-section">
        <div className="col-span-3 row-span-5 lg:col-span-4 lg:row-span-5 lg:row-start-3 xl:col-start-3 xl:row-start-5 xl:col-span-3 xl:row-span-5 rounded-3xl">
          <TiltedCard
            imageSrc="./God2.png"
            altText="Mohammad Taheri - Developer"
            captionText="Ready to create magic!"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
        <div className="col-span-1 col-start-2 lg:col-span-2 lg:row-start-3 xl:col-start-6 xl:row-start-5 xl:col-span-2 flex flex-col justify-end">
          <h1 className="text-4xl font-bold">Hello!</h1>
        </div>
        <div className="col-span-3 row-span-2 row-start-13 lg:col-span-4 lg:row-span-2 lg:row-start-8 lg:col-start-8 xl:col-start-10 xl:row-start-9 xl:col-span-3 xl:row-span-2 flex flex-col justify-start">
          <button onClick={scrollToContact} className="flex flex-row justify-evenly items-center rounded-full border-2 border-[#e0e0e0] w-full h-3/5 bg-transparent text-[#e0e0e0] font-[Montserrat] font-medium text-xl transition-colors duration-300 ease-in-out hover:bg-[#e0e0e0] hover:text-[#121212] group">
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
          </button>
        </div>
        <div className="lg:text-justify col-span-3 row-span-5 lg:col-span-8 lg:row-span-4 lg:row-start-4 xl:col-start-6 xl:row-start-6 xl:col-span-6 xl:row-span-3 text-2xl leading-relaxed font-thin">
          <p>
            I'm a <span className="font-bold">Full Stack Developer</span> with
            over <span className="font-bold">7 years</span> of experience,
            dedicated to creating{" "}
            <span className="font-bold">user-friendly applications</span>. I
            thrive on building innovative solutions that drive success.{" "}
            <span className="font-bold">
              Let's connect and bring your ideas to life!
            </span>
          </p>
        </div>
      </div>
  )
}

export default AboutSection