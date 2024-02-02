import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req, res) {
  const { to, subject, text } = await req.json();
  console.log(to, subject, text);

  const email = process.env.GMAIL_USER;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: process.env.GMAIL_PASS,
      },
    });


    const mailOptions = {
      from: email,
      to: to,
      subject: subject,
      text
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Successfully mail sent",
        response,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        status: 500,
        message: "Failed to send mail",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
