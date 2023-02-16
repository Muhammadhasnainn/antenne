import React from "react";
import { GiFactory } from "react-icons/gi";
import {AiFillBank, AiFillHome} from  "react-icons/ai";
import icon3 from "../images/icon3.png";

const Address = () => {
  return (
    <section className="Address mt-10 pb-3">
      <h1 className="text-center fw-bold heading_style">
        A chi ci rivolgiamo?
      </h1>
      <p className="text-center mt-4 fs-5 text-muted">
        Ill nostro progetto fa per te se rientri in almento uno dei casi sotto
        descritti
      </p>

      <div className="canvas">
        <div className="cards-grid">
          <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
            <div className="d-flex align-items-center justify-content-center icon">
              <AiFillHome size={50} />
            </div>
            <p className="fw-bold">PRIVATI</p>
            <p className="mt-3">Proprietari terrieri, condomini</p>
          </div>

          <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
            <div className="d-flex align-items-center justify-content-center icon">
              <GiFactory size={50} color="white"/>
            </div>
            <p className="fw-bold">AZIENDA</p>
            <p className="mt-3">A chi possiede capannoni, terreni, parcheggi</p>
          </div>

          <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
            <div className="d-flex align-items-center justify-content-center icon">
           <AiFillBank size={59} color="white"/>
            </div>
            <p className="fw-bold">PUBBLICA AMMINSTRAZIONE</p>
            <p className="mt-3">Comuni con piano antenne</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
