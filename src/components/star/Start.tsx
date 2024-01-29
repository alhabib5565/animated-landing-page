import { useInView } from "framer-motion";
import { useRef } from "react";

const Start = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const stars = [
    {
      count: "+523",
      description: "Happy Patients",
    },
    {
      count: "23",
      description: "Total Branches",
    },
    {
      count: "+53",
      description: "Senior Doctors",
    },
    {
      count: "+3",
      description: "Years Experience",
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
      className="container md:divide-x-2 divide-accent py-16 flex flex-col md:flex-row gap-y-4 justify-between items-center"
    >
      {stars.map((star, index) => (
        <div className="text-center w-full" key={index}>
          <h1 className="text-accent-secondary">{star.count}</h1>
          <p className="text-[20px]">{star.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Start;
