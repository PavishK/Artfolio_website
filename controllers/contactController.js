import nodemailer from 'nodemailer';
import { title } from '@/data/names';

export async function sendConfirmMail(data) {
    try {

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: data.email,
            subject: `New contact form submitted by ${data.name}`,
            html: htmlCode({ ...data, title }),
        };
        
        await transporter.sendMail(mailOptions);
        return { message:"Email sent successfully", status:200 };
    } catch (error) {
        return { message:"Internal server error", error:error, status:500 };
    }
}

const htmlCode = (data) => {
  return `
  <div style="
    background-color:#F5F7FA;
    padding:30px;
    font-family:'Segoe UI', Arial, sans-serif;
  ">
    <div style="
      max-width:600px;
      margin:auto;
      background:#FFFFFF;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 8px 24px rgba(0,0,0,0.08);
    ">

      <!-- Header -->
      <div style="
        background:linear-gradient(135deg, #6A5AE0, #8F7CFF);
        padding:20px 25px;
        color:#FFFFFF;
      ">
        <h2 style="margin:0; font-size:20px;">📧 New Contact Form Submission</h2>
        <p style="margin:6px 0 0; font-size:14px; opacity:0.9;">
          You’ve received a new enquiry
        </p>
      </div>

      <!-- Body -->
      <div style="padding:25px; color:#2D2D2D;">

        <p style="margin:0 0 12px;">
          <strong style="color:#6A5AE0;">Name:</strong>
          <span>${data.name}</span>
        </p>

        <p style="margin:0 0 12px;">
          <strong style="color:#6A5AE0;">Email:</strong>
          <span>${data.email}</span>
        </p>

        <!-- Reason -->
        <p style="margin:0 0 18px;">
          <strong style="color:#6A5AE0;">Reason:</strong>
          <span style="
            background:#F0F2FF;
            color:#4A46C8;
            padding:6px 12px;
            border-radius:20px;
            font-size:13px;
            margin-left:6px;
            display:inline-block;
          ">
            ${data.reason}
          </span>
        </p>

        <p style="margin:10px 0 8px;">
          <strong style="color:#6A5AE0;">Message:</strong>
        </p>

        <div style="
          background:#F8F9FC;
          padding:15px;
          border-radius:8px;
          font-size:14px;
          line-height:1.6;
          color:#444444;
        ">
          ${data.desc}
        </div>

        ${
          data.image != ''
            ? `
            <div style="margin-top:20px;">
              <p>Attached Image:</p>
              <img
                src="${data.image}"
                alt="Uploaded Image"
                style="max-width:100%; border-radius:8px; border:1px solid #e0e3ff;"
              />
            </div>
            `
            : ""
        }

      </div>

      <!-- Footer -->
      <div style="
        background:#F0F2FF;
        padding:15px;
        text-align:center;
        font-size:12px;
        color:#666666;
      ">
        This email was generated from your website contact page.
        <br/>
        <strong style="color:#6A5AE0;">${data.title}</strong>
      </div>

    </div>
  </div>
  `;
};
