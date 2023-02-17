import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8800;

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), {
    function(err) {
      res.status(500).send(err);
    },
  });
});


var transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "themohdhasnain@gmail.com",
    pass: process.env.Password,
  },
});

app.post("/contact", async (req, res) => {
  const { userEmail, name, surname, message, phone } = req.body;

  await transporter.sendMail({
    from: "themohdhasnain@gmail.com",
    to: userEmail,
    subject: "Contact Antenne5g",
    text: "Your message has been received we will get back to you as soon as possible.", // plain text body
  });

  await transporter.sendMail({
    from: "themohdhasnain@gmail.com",
    to: "antenne5gitalia@gmail.com",
    subject: "Contact",
    text: `
    Name: ${name}
    Cognome: ${surname}
    Phone: ${phone}
    Message: ${message}
    `,
  });

  res.status(201).send("Successfull");
});

app.post("/senddata", async (req, res) => {
  const { userEmail, name, phone, area, location1, location2, location3 } =
    req.body;

  console.log(location3.length);

  await transporter.sendMail({
    from: "themohdhasnain@gmail.com",
    to: userEmail,
    subject: "Contact Antenne5g",
    text: `Gentile ${name},

    grazie per aver contattato antenne5g.it .
    Entro una settimana, verrai ricontattato da uno dei nostri specialisti in grado di fornirti tutte le risposte alle tue domande.
    `,
  });

  await transporter.sendMail({
    from: "themohdhasnain@gmail.com",
    to: "antenne5gitalia@gmail.com",
    subject: "Contact",
    text: `
      Name: ${name}
      Phone: ${phone}
      Total Area: ${area}
      ${location2.length > 0 ? "Location 1" : "Location"}: ${location1.map(
      (elem) => {
        return JSON.stringify(elem);
      }
    )}

    ${
      location2.length > 0 !== undefined
        ? `Location 2 : ${location2.map((elem) => {
            return JSON.stringify(elem);
          })}`
        : ""
    }
    ${
      location3.length > 0
        ? `Location 3 : ${location3.map((elem) => {
            return JSON.stringify(elem);
          })}`
        : ""
    }
      `,
  });

  res.status(201).send("Successfull");
});

// app.post("/verification", async (req, res) => {
//   const { token } = req.body;

//   await axios.post(
//     `https://www.google.com/recaptcha/api/siteverify?secret=${""}&response=${token}`
//   );

//   if (res.status(200)) {
//     res.send(true);
//   } else {
//     res.send(false);
//   }
// });

app.listen(8800, () => {
  console.log("Connected");
});
