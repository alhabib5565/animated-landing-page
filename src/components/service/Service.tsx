import serviceBg from "../../assets/img/services/bg.svg";
import icon1 from "../../assets/icons/services/icon-1.svg";
import icon2 from "../../assets/icons/services/icon-2.svg";
import icon3 from "../../assets/icons/services/icon-3.svg";
import icon4 from "../../assets/icons/services/icon-4.svg";

const Service = () => {
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
    <>
      <div
        style={{
          backgroundImage: `url(${serviceBg})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
      <div className="container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
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
    </>
  );
};

export default Service;
