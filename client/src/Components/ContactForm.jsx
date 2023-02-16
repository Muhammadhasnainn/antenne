import React, { useState ,useRef} from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/contact", {
          "name": form.name,
          "userEmail": form.email,
          "phone": form.phone,
          "message": form.message,
          "surname": form.surname,
      });
      alert("We will get back to you soon!");
      formRef.current.reset()
    } catch (err) {
      console.log(err);
      alert("Please fill the form below!")
    }
  };

  return (
    <div className="bg_primary ContactForm">
      <form onSubmit={(e)=> HandleSubmit(e)} className="canvas" ref={formRef}>
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
        {/* <div className="mt-2">
          <label className="text-white">Email</label>
          <input type={"email"} className="form-control mt-1" placeholder="Email"/>
        </div> */}

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

            {/* <p className="ms-3">-</p> */}
          </div>
        </div>

        <div className="mt-2">
          <label className="text-white">Messagi</label>
          <textarea
            placeholder="Enter your messagi!"
            className="form-control mt-1"
            id="message"
            onChange={(e) => handleChange(e)}
            // minLength={10}
            required
          />
        </div>
        <button
          className="py-2 bg-white border px-3 rounded mt-4 mx-auto 
        d-block"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
