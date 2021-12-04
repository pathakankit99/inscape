var nodemailer = require("nodemailer");

import nextConnect from "next-connect";

const quote = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

quote.post(async (req, res) => {
  if (req.method === "POST") {
    const { email, contact, type, tech, pages, template, seo, total } = req.body;
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: "admin@inscapetechnologies.com",
      to: "inscape.t@gmail.com",
      subject: email + " has filled the quote form",
      html:
        "Email: " +
        email +
        " <br/>Contact: " +
        contact +
        " <br/>Type: " +
        type +
        " <br/>Tech: " +
        tech +
        " <br/>Pages: " +
        pages +
        " <br/>Template: " +
        template +
        " <br/>SEO: " +
        seo +
        " <br/>Total: " +
        total,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(400).send("Some problem occured. Try again later.");
      } else {
        return res.status(200).json({
          message: "The Data has been submitted successfully",
        });
      }
    });
  } else {
    res.status(422).send("Non supported request method");
  }
});

export default quote;
