import { MdOutlineHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion";
import cn from "../../utils/cn";
const Hero = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const item = {
    hidden: { x: "-100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
      },
    },
  };
  return (
    <div className=" bg-grey py-14 md:pb-0 mt-0 md:-mt-10 ">
      <div className="container flex justify-between items-center gap-8 overflow-hidden">
        {/* text section */}
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.2,
            type: "spring",
            bounce: 1,
          }}
          className={cn(
            "w-full md:max-w-[42%] mx-auto text-center md:text-left md:mx-0 space-y-4 "
          )}
        >
          <motion.div
            variants={item}
            className="px-5 py-1 rounded-full bg-white flex items-center gap-1 w-fit mx-auto md:mx-0"
          >
            <MdOutlineHealthAndSafety className="w-5 h-5 text-accent" />
            <span className="uppercase tracking-[1.1px]">Live your life</span>
          </motion.div>
          <motion.h1 variants={item} className="text-accent">
            We care about your health
          </motion.h1>
          <motion.p variants={item} className="text-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            sunt cumque voluptas praesentium omnis harum autem modi doloremque
            vitae ad!
          </motion.p>
          <motion.button
            variants={item}
            // style={{ clipPath: "circle(5% at 39% 53%)" }}
            className="px-4 py-0.5 bg-accent rounded-full text-white hover:bg-accent-secondary font-medium text-[18px] tracking-[1.1px]"
          >
            Contact
          </motion.button>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="w-[45%] hidden md:block"
        >
          <img src="../src/assets/img/hero/img.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
