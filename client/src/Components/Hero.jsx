import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="Hero mb-5">
      <Navbar />
      <div className="d-flex flex-column justify-items-center heroMain">
        <div className="d-flex align-items-center canvas herofirst">
          <div className="content w-50 text-white">
            <h1 className="fw-bold main_heading">
            Partecipa alla digitalizzazione del
              paese
            </h1>
            <p className="fs-5 mt-2">
             Contribuisci anche tu allo 
             sviluppo digitale del Paese, 
             proponi i tuoi spazi immobiliari.
            </p>
            <Link to="/questions" className="btn primary_btn px-3 mt-3 py-2">
              Scopri se il tuo terreno e` idoneo
            </Link>
          </div>
        </div>
{/* 
        <div className="grid canvas pb-5">
          <div className="text-center">
            <BsFillCheckCircleFill size={50} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
          <div className="text-center">
            <AiFillTool size={55} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
          <div className="text-center">
            <FaSortAmountUpAlt size={50} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
          <div className="text-center">
            <FaWarehouse size={55} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
