const nodemailer = require("nodemailer");

async function testSMTP() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bruno.krizic1999@gmail.com",
      //pass: "your-app-password",
    },
  });

  try {
    let info = await transporter.verify();
    console.log("SMTP connection successful:", info);
  } catch (error) {
    console.error("SMTP connection failed:", error);
  }
}

testSMTP();
