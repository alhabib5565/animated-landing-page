import { useRef } from "react";
import icon1 from "../../assets/icons/services/icon-1.svg";
import icon2 from "../../assets/icons/services/icon-2.svg";
import icon3 from "../../assets/icons/services/icon-3.svg";
import icon4 from "../../assets/icons/services/icon-4.svg";
import { useInView } from "framer-motion";
const ServiceBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const services = [
    {
      icon: icon1,
      title: "Lorem ipsum dolor sit amet ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex!",
    },
    {
      icon: icon2,
      title: "Lorem ipsum dolor sit amet ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex!",
    },
    {
      icon: icon3,
      title: "Lorem ipsum dolor sit amet ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex!",
    },
    {
      icon: icon4,
      title: "Lorem ipsum dolor sit amet ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex!",
    },
  ];
  return (
    <div
      style={{
        transform: isInView ? "translateY(0px)" : "translateY(200px)",
        transitionDuration: "500ms",
        opacity: isInView ? 1 : 0,
      }}
      ref={ref}
      className="container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 "
    >
      {services.map((service, index) => (
        <div
          key={index}
          className=" h-[300px] text-center p-4 w-full flex flex-col justify-center items-center gap-4 shadow-md border-2 border-accent rounded-md hover:bg-accent hover:bg-opacity-25"
        >
          <img className="text-accent" src={service.icon} alt="" />
          <h3 className="text-gray-700">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex!
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceBox;
