import React from "react";
import img1 from "../images/Antenne 5g italia.jpg";
import img2 from "../images/antenne 5g affittare spazio.jpg";
import img3 from "../images/antenne 5g italia locazione.jpg";

const Spirit = () => {
  return (
    <div className="bg_primary Spirit">
      <div className="d-flex justify-content-between Spirit_grid">
        <div className="info">
          <h1 className="fw-bold text-white">IL NOSTRO SPIRITO ECOLOGISTA</h1>
          <p className="mt-2 text-white">
            Il 5G, non è solo innovazione tecnologica! Abbiamo a cuore anche la
            salvaguardia dell’ambiente. <br /> Due temi che affrontiamo con una
            visione unitaria, perchè si tratta di due facce della stessa <br />
            medaglia: il digitale è il più grande alleato della sostenibilità e
            non si può avere sostenibilità <br /> senza le tecnologie digitali.
            In quest’ottica, il nostro progetto viene sviluppato il più
            possibile <br /> in armonia con ambiente, paesaggio e territorio.
            <br /> La peculiarità di alcune nostre strutture, infatti, è il
            posizionamento <br />– alla loro estremità superiore <br />– di un
            nido per le cicogne.
            <br /> Un modo per cercare di richiamare sul territorio questi
            suggestivi volatili, che negli ultimi tempi
            <br /> stanno ripopolando l’hinterland milanese.
            <br />I fatti ci danno ragione.
          </p>
        </div>
        <div className="img_grid col-2">
          <img src={img1} className="" />
          <img src={img3} className="big_img" />
          <img src={img2} className="" />
        </div>
      </div>
    </div>
  );
};

export default Spirit;
