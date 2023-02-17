import React, { useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Address from "../Components/Address";
import Hero from "../Components/Hero";
import RowSection from "../Components/RowSection";
import Services from "../Components/Services";
import img1 from "../images/Progetto-Gaif-Tower.webp";
import HowWorks from "../Components/HowWorks";
import OurTeam from "../Components/OurTeam";
import Contact from "../Components/Contact";
import Accordian from "../Components/Accordian";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import Spirit from "../Components/Spirit";
import ContactForm from "../Components/ContactForm";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const addressRef = useRef(null);
  const serviceRef = useRef(null);
  const workRef = useRef(null);

  const executeScrollAddress = () => {
    addressRef.current.scrollIntoView();
    setMenu(false);
  };
  const executeScrollService = () => {
    serviceRef.current.scrollIntoView();
    setMenu(false);
  };
  const executeScrollWork = () => {
    workRef.current.scrollIntoView();
    setMenu(false);
  };

  return (
    <div>
      <div className="Hero mb-5">
        <nav className="d-flex align-items-center Navbar">
          <div className="d-flex justify-content-between align-items-center canvas">
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
            <div className="d-flex align-items-center menu">
              {window.matchMedia("(min-width: 800px)").matches && (
                <>
                  <p
                    type="button"
                    onClick={executeScrollAddress}
                    className="nav-link"
                  >
                    Fa per te?
                  </p>
                  <p
                    type="button"
                    onClick={executeScrollService}
                    className="nav-link ms-3"
                  >
                    Cosa otterrai
                  </p>
                  <p
                    type="button"
                    onClick={executeScrollWork}
                    className="nav-link ms-3"
                  >
                    Come funziona
                  </p>
                </>
              )}
              <button className="btn primary_btn ms-3 px-4">LAND</button>
              {window.matchMedia("(max-width: 800px").matches && (
                <AiOutlineMenu
                  className="ms-3 text-white"
                  size={30}
                  cursor="pointer"
                  onClick={() => setMenu(!menu)}
                />
              )}
            </div>
          </div>
        </nav>
        {menu && (
          <div className="resp_menu">
            <p
              type="button"
              onClick={executeScrollAddress}
              className="nav-link mt-5 p-2"
            >
              Fa per te?
            </p>
            <p
              type="button"
              onClick={executeScrollService}
              className="nav-link mt-2 p-2"
            >
              Cosa otterrai
            </p>
            <p
              type="button"
              onClick={executeScrollWork}
              className="nav-link mt-2 p-2"
            >
              Come funziona
            </p>
          </div>
        )}

        <Hero />
      </div>
      <div ref={addressRef}>
        <Address />
      </div>
      <div ref={serviceRef}>
        <Services />
      </div>
      <RowSection
        direction="flex-row"
        heading="L'innovazione tecnologica è un fattore importante per raggiungere un futuro più sostenibile"
        text="Gli impianti di illuminazione installati sulle nostre strutture utilizza tecnologie come LED a basso consumo energetico e contribuiscono a ridurre le emissioni di gas serra, oltre ad assicurare la corretta visibilità del manto stradale."
        list1="Installazione di antenne in luoghi poco invasivi: cercare di installare le antenne in luoghi che minimizzino l'impatto visivo."
        list2="Integrazione architettonica: utilizzare materiali e design che integrino l'antenna in modo armonioso con l'ambiente circostante, in modo che non sia troppo evidente."
        list3="
        Risparmio energetico: utilizzare tecnologie ad alta efficienza energetica per le antenne mobili, come i sistemi di raffreddamento ad acqua, che possono ridurre il consumo di energia."
        img={img1}
      />
      <div ref={workRef}>
        <HowWorks />
      </div>
      <Spirit />
      <OurTeam />
      <Contact />
      <Accordian />
      <Footer />
    </div>
  );
};

export default Home;
