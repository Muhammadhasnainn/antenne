import React, { useState,useRef } from "react";
import GMap from "./Map";
import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";

const Question = () => {
  const [area, setArea] = useState(0);
  const [pollygons, setPolygons] = useState([]);
  const [email, setEmail] = useState(false);
  const [warning, setWarning] = useState(false);
  const [result, setResult] = useState(false);
  const [question, setQuestion] = useState(0);
  const [gmap, setGmap] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState(0);
  const [address, setAddress] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: ""
  });
  const formRef = useRef()

  const questions = [
    {
      id: "01 Demonda",
      qno: "hai la piena proprietà o sei tra i proprietari del terreno / fabbricato ?",
    },
    {
      id: "02 Demonda",
      qno: "Il tuo terreno ha un accesso carrabile e libero da vincoli ambientali  ?",
    },
    {
      id: "03 Demonda",
      qno: "Il tuo terreno/ fabbricato è entro i 1kM di distanza da un'area industriale o artigianale o commerciale, Centri abitati o entro i 300 m di distanza da autostrade??",
    },
    {
      id: "04",
      qno: "Traccia l’area indicativa del tuo terreno",
    },
  ];


  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/senddata", {
          "name": form.name,
          "userEmail": form.email,
          "phone": form.phone,
          "area": area,
      });
      alert("We will get back to you soon!");
      formRef.current.reset()
    } catch (err) {
      console.log(err);
      alert("Please fill the form below!")
    }
  };

  return (
    <>
      {!gmap ? (
        <div className="Questions">
          <div className="bg"></div>
          {email && !result && (
            <form className="w-50 mx-auto email_form" ref={formRef}>
              <h1>Scopri quanto puoi guadagnare inserendo i tuoi contatti</h1>
              <div className="mt-3">
                <label>Nome e Cognome</label>
                <input
                  type={"text"}
                  id="name"
                  onChange={(e)=> handleChange(e)}
                  placeholder="eg Cristiano"
                  className="form-control mt-2 border-0"
                />
              </div>
              <div className="mt-3">
                <label>Lasciaci la tua email</label>
                <input
                  type={"email"}
                  placeholder="eg Cristiano"
                  id="email"
                  onChange={(e)=> handleChange(e)}
                  className="form-control mt-2 border-0"
                />
              </div>
              <div className="mt-3">
                <label>Numero di telefono</label>
                <input
                  type={"number"}
                  placeholder="Phone Number"
                  id="phone"
                  onChange={(e)=> handleChange(e)}
                  className="form-control mt-2 border-0"
                />
              </div>
              <div className="d-flex align-items-start form-check mt-3">
                <input
                  className="form-check-input mb-0"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label ms-3" for="flexCheckDefault">
                  Accetto la Privacy Policy
                </label>
              </div>

              <button
                className="bg_primary px-5 py-2 mx-auto d-block fs-5 
            text-white rounded mt-5 border-0"
            onClick={HandleSubmit}
              >
                Invia i dati
              </button>

              <p
                style={{ textDecoration: "underline" }}
                className="text-center mt-4"
                type="button"
                onClick={() => setResult(true)}
              >
                Torna indietro
              </p>
            </form>
          )}
          {!show && !result && !email
            ? questions.map((elem, i) => {
                return (
                  <>
                    {i === question && (
                      <div className={"question"} key={elem.id}>
                        <div id="animated_div">
                          <div className="main-question">
                            <h1 className="no">{questions[question].id}</h1>
                            <h2 className="mt-4">{questions[question].qno}</h2>
                          </div>

                          {i !== 3 ? (
                            <div className="mt-5">
                              <button
                                className="answer"
                                type="button"
                                onClick={() => {
                                  setQuestion(question + 1);
                                }}
                              >
                                Sì
                              </button>
                              <br />
                              <button
                                className="answer"
                                type="button"
                                onClick={() => setShow(true)}
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <button
                              className="bg-white px-4 py-2 border-0 mt-5"
                              onClick={() => setGmap(true)}
                              type="button"
                              key={i}
                            >
                              Vai alla mappa!
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                );
              })
            : ""}

          {show && (
            <div className="text-center w-75">
              <p className="fs-5">si procede con domanda {question + 1}</p>
              <p className="mt-2">
                no Ci dispiace, il tuo terreno non è idoneo all'installazione di
                un antenna 5g.
              </p>
              <Link to="/">Torna alla home</Link>
            </div>
          )}
          {warning && (
            <div
              className="modal d-flex justify-content-center align-items-center"
              style={{ background: "rgba(0,0,0,0.2)" }}
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content bg-dark text-white">
                  <div className="modal-body text-center">
                    <AiFillWarning size={60} color="#fce100" />
                    <h1 className="fw-bold fs-2 mt-2">
                      La superficie individuata è superiore alla media
                    </h1>
                    <p className="mt-2 fs-5">
                      Controlla le dimensioni della superficie.
                    </p>
                    <h1 className="mt-4">{area} m²</h1>
                    <button
                      type="button"
                      className="bg-white py-2 px-5 mt-4 rounded fs-5 fw-bold"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setGmap(true);
                        setWarning(false);
                      }}
                    >
                      Riconfigura superficie
                    </button>
                    <p
                      type="button"
                      className="fs-5 mt-2 fw-bold"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setEmail(true);
                        setWarning(false);
                      }}
                    >
                      Conferma superficie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result && (
            <>
              <div className={"question"}>
                <div id="animated_div">
                  <div className="main-question">
                    <h1 className="no">06</h1>
                    <h2 className="mt-4">La superficie individuata è di</h2>
                    <button className="bg-white fs-5 px-4 py-2 border-0 mt-5">
                      {area} m²
                    </button>
                  </div>

                  <div className="mt-5">
                    <button
                      className="answer w-75 text-start px-3"
                      type="button"
                      onClick={() => setGmap(true)}
                    >
                      Torna alla mappa
                    </button>
                    <br />
                    <button
                      className="answer w-75 text-start px-3 bg-white mt-3"
                      type="button"
                      onClick={() => {
                        setEmail(true);
                        setResult(false);
                      }}
                    >
                      Continua
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        ""
      )}

      <div className={gmap ? "d-block" : `d-none`}>
        <GMap
          setGmap={setGmap}
          setQuestion={setQuestion}
          setResult={setResult}
          setWarning={setWarning}
          setArea={setArea}
          setPolygons={setPolygons}
          pollygons={pollygons}
          setLocation={setLocation}
          setAddress={setAddress}
          setEmail={setEmail}
          address={address}
          location={location}
        />
      </div>
    </>
  );
};

export default Question;
