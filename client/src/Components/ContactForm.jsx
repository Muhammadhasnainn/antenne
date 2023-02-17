import React, { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
  const privacyRef = useRef();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef();

  function onChange(value) {
    console.log("Captcha value:", value);
    setToken(value);
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (privacyRef.current.checked && token.length > 0) {
      try {
        await axios.post("/contact", {
          name: form.name,
          userEmail: form.email,
          phone: form.phone,
          message: form.message,
          surname: form.surname,
        });
        alert("We will get back to you soon!");
        formRef.current.reset();
        setLoading(false);
      } catch (err) {
        console.log(err);
        alert("Please fill the form below!");
        setLoading(false);
      }
    } else {
      alert(
        token.length === 0 ? "Recaptcha failed!" : "Accept the Privacy Policy!"
      );
      setLoading(false);
    }
  };

  return (
    <div className="bg_primary ContactForm">
      <form onSubmit={(e) => HandleSubmit(e)} className="canvas" ref={formRef}>
        <h1 className="fw-bold text-white">CONTATTACI</h1>
        <div className="mt-3">
          <label className="text-white">
            Nome / Cognome <span>*</span>
          </label>

          <div className="d-flex mt-1">
            <input
              type={"text"}
              className="form-control"
              placeholder="Nome"
              id="name"
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type={"text"}
              className="form-control ms-3"
              placeholder="Cognome"
              id="surname"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>
        <div>
          <div className="d-flex mt-1">
            <div className="w-100">
              <label className="text-white">Email</label>
              <input
                type={"email"}
                className="form-control mt-1"
                placeholder="Email"
                id="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="w-100">
              <label className="text-white">
                Telefono <span>*</span>
              </label>
              <input
                type={"number"}
                className="form-control ms-3"
                id="phone"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="text-white">Messagi</label>
          <textarea
            placeholder="Enter your messagi!  ------   Scrivi il tuo messaggio"
            className="form-control mt-1"
            id="message"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="d-flex align-items-start form-check mt-3">
          <input
            className="form-check-input mb-0"
            type="checkbox"
            id="flexCheckDefault"
            ref={privacyRef}
          />
          <label
            className="text-white form-check-label ms-3"
            for="flexCheckDefault"
          >
            Accetto i termini e le condizioni della{" "}
            <span className="highlight">Privacy Policy</span>*
          </label>
        </div>
        <ReCAPTCHA
          sitekey="6LfCFYskAAAAAGljsvREjMHYs7ECoZBWXu3-hxPZ"
          onChange={onChange}
          className="mt-2"
        />
        <button
          className="py-2 bg-white border px-3 rounded mt-4 mx-auto 
        d-block"
        >
          {loading ? "loading..." : "Submit ----- Invia"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
