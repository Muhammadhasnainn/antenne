import React from "react";
import { MdCall, MdSavings} from "react-icons/md";
import { BsFillPencilFill, BsQuestionLg } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import {AiFillSetting} from "react-icons/ai";

const HowWorks = () => {
  return (
    <div className="worksection mt-10">
      <h1 className="fw-bold text-center text-white mt-3">
        Vuoi anche tu Contribuire alla digitalizzazione del Paese?
      </h1>
      <div className="canvas">
        <h4 className="fw-bold text-center text-white mt-3">
          Ci occuperemo totalmento delle pratiche burocratiche ed amministrative
          senza nessun aggravio di costo o tempo per il proprietario
        </h4>
        <div className="small-grid">
          <div className="text-center text-white">
            <p className="highlight">STEP 1</p>
            <BsQuestionLg className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">RISPONDI ALLI DOMANDE</p>
            <p className="mt-2">
              Segui la procedura online dove dovrai rispondere a delle veloci
              domande e potrai individuare sulla mappa il tuo terreno.
            </p>
          </div>
          <div className="text-center text-white">
            <p className="highlight">STEP 2</p>
            <BsFillPencilFill className="highlight mt-2" size={45} />
            <p className="fs-5 fw-bold mt-2">INSERISCI I CONTATTI</p>
            <p className="mt-2">
              Dopo aver svolto la procedura inserisci i tuoi contatti per venire
              richiamato e procedere con un nostro specialista.
            </p>
          </div>

          <div className="text-center text-white">
            <p className="highlight">STEP 3</p>
            <MdCall className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">ASSISTENZA</p>
            <p className="mt-2">
              Verrai poi contattato da un nostro consulente che raccoglierà
              ulteriori dati ed organizzerà un sopralluogo.
            </p>
          </div>

          <div className="text-center text-white">
            <p className="highlight">STEP 4</p>
            <AiFillSetting className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">ATTO NOTARILE</p>
            <p className="mt-2">
              Stipula un atto di locazione con diritto di superficie presso il
              notaio.
            </p>
          </div>

          <div className="text-center text-white">
            <p className="highlight">STEP 5</p>
            <MdSavings className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">PAGAMENTI</p>
            <p className="mt-2">
              Percepirai i tuoi canoni di locazione come da
              contratto sottoscritto
            </p>
          </div>
        </div>
        <button className="btn primary_btn d-block text-white py-2 px-4 mx-auto mt-5">
          Inizia la procedura online <TbHandClick size={25} />
        </button>
      </div>
    </div>
  );
};

export default HowWorks;
