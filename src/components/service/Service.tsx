import serviceBg from "../../assets/img/services/bg.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ServiceBox from "./ServiceBox";

const Service = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <>
      <div
        ref={ref}
        style={{
          backgroundImage: `url(${serviceBg})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: isInView ? "translateY(0px)" : "translateY(200px)",
          transitionDuration: "500ms",
          opacity: isInView ? 1 : 0,
        }}
        className="container mt-20 "
      >
        <div className="text-center h-full md:text-left px-6 py-4 md:px-14 md:py-10 flex flex-col justify-center md:flex-row gap-2 md:gap-8">
          <h4 className="md:w-1/2 text-white tracking-[1.2px] md:text-[30px] ">
            our best services for your solution
          </h4>
          <p className="md:w-1/2 text-white md:text-[20px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            blanditiis soluta, consequatur aliquid veniam nesciunt amet minima
            quae nulla maxime, labore, incidunt odit quibusdam inventore? Eum
            aspernatur iste ab iure?
          </p>
        </div>
      </div>
      <ServiceBox />
    </>
  );
};

export default Service;
