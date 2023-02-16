import React from "react";
import img1 from "../images/mobile-network-cell-tower.jpg"
import img2 from "../images/antenne 5g installazione.jpg";

const OurTeam = () => {
  return (
    <div className="Team mt-10 mb-5 py-5">
      <div className="canvas">
        <h1 className="fw-bold text-center">
          Tipologia standard di infrastrutture
        </h1>
        <p className="fs-5 mt-3 text-muted text-center">
          Le infrastrutture idonee all’installazione di stazioni radio base o
          BTS (acronimo dalla lingua inglese per “Base Transceiver Station”)
          ospitano le antenne ricetrasmittenti che servono i terminali mobili
          degli utenti coprendo una determinata area geografica, coperta da una
          cella radio. Le tipologie sono:
        </p>

        <div className="grid_2 mt-5">
          <div>
            <img src={img1} alt="img" className="h-75 w-100"/>
            <p className="mt-3 text-center">
              Sito costituito da una palina, ancorata o staffata a strutture
              portanti, sulla copertura di un edificio. La SRB occupa una
              superficie variabile a seconda della necessità, sarà concordata
              con il locatore.
            </p>
          </div>
          <div>
            <img src={img2} alt="img" className="h-75 w-100"/>
            <p className="mt-3 text-center">
              Sito a terra. La Stazione Radio Base (SRB) è costituita da una
              struttura porta-antenne con fondazioni nel terreno. La SRB occupa
              mediamente una superficie di 36 mq rispettando le distanze minime
              dai confini di 5 mq. L’altezza della struttura può variare da un
              minimo di 24 mt ad un massimo di 36 mt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
