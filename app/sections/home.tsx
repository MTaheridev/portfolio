import React from 'react'
import Iridescence from "../components/Iridescence/Iridescence";
import ShinyText from "../components/Shiny Text/ShinyText";
import Carousel from "../components/Carousel/Carousel";
import TicTacToe from "../components/TicTacToe/TicTacToe";

type ScrollDownFunction = () => void;

interface MyComponentProps {
    scrollDown: ScrollDownFunction;
}

const HomeSection : React.FC<MyComponentProps> = ({ scrollDown }) => {
  return (
    <div className="home-section md:h-lvh w-lvh">
        <div className="border-[#E0E0E0] border-2 rounded-3xl col-span-3 row-span-2 xl:col-span-3 xl:row-span-3 xl:col-start-[14] lg:col-span-2 lg:row-span-3 lg:col-start-7 flex flex-col justify-evenly items-center">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
        <div className="border-[#E0E0E0] border-2 rounded-3xl row-start-1 col-span-3 row-span-3 xl:col-span-7 xl:row-span-5 lg:col-span-3 lg:row-span-4 lg:row-start-2 md:mt-8 overflow-hidden relative">
          <Iridescence
            color={[0.55, 0.55, 0.57]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.5}
          />
        </div>
        <div className="border-[#E0E0E0] border-2 rounded-3xl hidden lg:block xl:col-span-6 xl:row-span-9 lg:col-span-2 lg:row-span-4 mt-8 overflow-hidden relative">
          <img src=".\God.png" className="h-full object-cover" />
        </div>
        <div className="border-[#E0E0E0] border-2 rounded-3xl col-span-3 row-span-4 xl:col-span-3 xl:row-span-6 lg:col-span-3 lg:row-span-6 lg:col-start-6 overflow-hidden">
          <TicTacToe />
        </div>
        <div className="row-start-4 col-span-3 row-span-3 xl:col-span-6 xl:row-span-2 lg:col-span-5 lg:row-span-2">
          <div className="flex flex-col justify-center items-start  h-full w-full lg:pl-8">
            <ShinyText
              text="Your Ideas"
              className="font-[Montserrat] text-[#E0E0E0] select-none  text-6xl font-bold"
            />
            <ShinyText
              text="Our Creative Flow"
              className="font-[Montserrat] text-[#E0E0E0] select-none  text-6xl font-bold"
            />
          </div>
        </div>
        <div className="hidden lg:block xl:col-start-7 xl:row-start-10 lg:col-start-5 lg:row-start-8 lg:p-4 xl:p-0 overflow-hidden relative">
          <img
            onClick={scrollDown}
            src=".\icons\ArrowDown.svg"
            className="h-full w-full opacity-70 hover:opacity-100 cursor-pointer transition-transform duration-300 ease-in-out transform scale-100 hover:scale-75"
          />
        </div>
        <div className="flex flex-col justify-center items-center row-start-7 xl:col-start-[14] xl:row-start-10 lg:col-start-6 lg:row-start-1">
          <img
            src=".\icons\FigmaLogo.svg"
            className="h-4/5 w-4/5 transition-transform duration-300 ease-in-out transform scale-75 hover:scale-100"
          />
        </div>
        <div className="flex flex-col justify-center items-center row-start-7 xl:col-start-[15] xl:row-start-10  lg:col-start-6 lg:row-start-2">
          <img
            src=".\icons\ReactLogo.svg"
            className="h-4/5 w-4/5 transition-transform duration-300 ease-in-out transform scale-75 hover:scale-100"
          />
        </div>
        <div className="flex flex-col justify-center items-center row-start-7 xl:col-start-[16] xl:row-start-10  lg:col-start-6 lg:row-start-3">
          <img
            src=".\icons\PythonLogo.svg"
            className="h-4/5 w-4/5 transition-transform duration-300 ease-in-out transform scale-75 hover:scale-100"
          />
        </div>
      </div>
  )
}

export default HomeSection