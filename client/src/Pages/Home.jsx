import React from "react";
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
  return (
    <div>
      <Hero />
      <Address />
      <Services />
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
      <HowWorks />
      <Spirit />
      <OurTeam />
      <Contact />
      <Accordian />
      <Footer />
    </div>
  );
};

export default Home;
