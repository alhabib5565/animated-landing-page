import { MdOutlineHealthAndSafety } from "react-icons/md";

const Hero = () => {
  return (
    <div className=" bg-grey pt-16  pb-8 md:pb-0 mt-0 md:-mt-10  z-[-1]">
      <div className="container flex justify-between items-center gap-8 overflow-hidden">
        {/* text section */}
        <div className="w-[90%] md:max-w-[42%] mx-auto text-left md:mx-0 space-y-4">
          <div className="px-5 py-1 rounded-full bg-white flex items-center gap-1 w-fit">
            <MdOutlineHealthAndSafety className="w-5 h-5 text-accent" />
            <span className="uppercase tracking-[1.1px]">Live your life</span>
          </div>
          <h1 className="text-accent">We care about your health</h1>
          <p className="text-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            sunt cumque voluptas praesentium omnis harum autem modi doloremque
            vitae ad!
          </p>
          <button
            // style={{ clipPath: "circle(5% at 39% 53%)" }}
            className="px-4 py-0.5 bg-accent rounded-full text-white hover:bg-accent-secondary font-medium text-[18px] tracking-[1.1px]"
          >
            Contact
          </button>
        </div>

        {/* image */}
        <div className="w-[45%] hidden md:block">
          <img src="../src/assets/img/hero/img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
