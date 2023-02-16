import React from "react";
import { TbPhoneCall } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="contact  bg_primary mt-10 py-5">
      <div
        className="canvas d-flex justify-content-md-between 
      align-items-center flex-wrap justify-content-center"
      >
        <div className="text-white">
          <h1>Hai ancora dubbi o domande?</h1>
          <p className="mt-3">
            Chiama il nostro numero verde gratuito e parla con un nostro
            specialista
          </p>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div
            className="bg-white d-flex align-items-center justify-content-center"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          >
            <TbPhoneCall color="green" size={30} />
          </div>
          <div className="bg-white py-2 px-5 ms-3" style={{ color: "green" }}>
            800 987 789
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
