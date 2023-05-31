import logo from "../../assets/Frame 45 2.png";
import bg from "../../assets/Rectangle_15.png";
import "./container.css";
import compName from "../../assets/Frame 55.png";
import socialmedia from "../../assets/Frame 61.png";

const Container = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-20 mt-9 ml-8">
        <img src={logo} alt="logo" />
      </div>

      <div className="mt-48 ml-8">
        <h1 className="text-white text-4xl font-bold tracking-wider">
          100% Uptime<span>&#128526;</span>
        </h1>
        <h2 className="text-white text-3xl max-w-sm tracking-wide mt-2 leading-8">
          Zero Infrastructure Management
        </h2>
      </div>
      <div className="flex gap-1 ml-8 mt-4">
        <div className="w-4 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div> 
      </div>
      <div className="mt-28">
        <div className="flex justify-between ml-8">
          <img src={compName} alt="company name" />
          <img src={socialmedia} alt="follow us on" className="mr-6" />
        </div>
      </div>
    </div>
  );
};

export default Container;
