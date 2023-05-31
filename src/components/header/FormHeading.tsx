import React from "react";
import Petals from "../../assets/petals 1.png";

const FormHeading = () => {
  return (
    <div className="flex justify-center items-center w-80 ml-12 flex-col mb-0">
      <div className="w-14 h-14 flex justify-center items-end">
        <img src={Petals} alt="petals" className="w-14" />
      </div>
      <div className="-mt-1">
        <h1 className="text-4xl font-semibold">
          Welcome <span className="text-teal-500">Back!</span>
        </h1>
      </div>
      <div>
        <p className="text-gray-600 font-medium mt-1.5" style={{fontSize: '0.8rem'}}>Glad to see you, Again!</p>
      </div>
    </div>
  );
};

export default FormHeading;
