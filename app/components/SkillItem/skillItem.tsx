import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const SkillItem = ({
  topText,
  gifSrc,
  bottomText,
  className,
}: {
  topText: string;
  gifSrc: string;
  bottomText: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div className={`skills-item ${className}`}>
      <motion.h1
        initial={{ x: 0 }}
        animate={isInView ? { x: "-2rem" } : { x: "5rem" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        
      >
        {topText}
      </motion.h1>
      <motion.div
        ref={ref}
        className="skills-item flex items-center justify-center my-8 h-[6rem] w-[6rem] md:h-[10rem] md:w-[10rem] rounded-xl relative overflow-hidden"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={gifSrc} className="w-full h-full object-cover" />
      </motion.div>
      <motion.h1
        initial={{ x: 0 }}
        animate={isInView ? { x: "2rem" } : { x: "-5rem" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        
      >
        {bottomText}
      </motion.h1>
    </div>
  );
};

export default SkillItem;
