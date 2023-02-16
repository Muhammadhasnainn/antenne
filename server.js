import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

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
    text: `Dear ${name},

  thank you for contacting Antenne5g and relying on our innovative solutions for the installation of a new 5g towers at no cost.

  Within a week, you will be contacted by one of our specialists who will be able to provide you with all the answers to your questions.`,
  });

  await transporter.sendMail({
    from: "themohdhasnain@gmail.com",
    to: "antenne5gitalia@gmail.com",
    subject: "Contact",
    text: `
      Name: ${name}
      Phone: ${phone}
      Total Area: ${area}
      ${location2.length > 0 ? "Location 1" : "Location"}: ${location1.map((elem) => {
      return JSON.stringify(elem);
    })}

    ${
      location2.length > 0 !== undefined ?
      `Location 2 : ${location2.map((elem) => {
        return JSON.stringify(elem);
      })}`
      : ""
    }
    ${
      location3.length > 0 ?
      `Location 3 : ${location3.map((elem) => {
        return JSON.stringify(elem);
      })}`
      : ""
    }
      `,
  });

  res.status(201).send("Successfull");
});

app.listen(Process.env.PORT || 8800, () => {
  console.log("Connected");
});
