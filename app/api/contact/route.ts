// ...new file...
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // If SMTP config is missing, log the message (useful for local dev)
    const SMTP_HOST = process.env.SMTP_HOST
    if (!SMTP_HOST) {
      console.log("Contact (dev):", { name, email, message })
      return NextResponse.json({ ok: true })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to,
      subject: `Website message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${(message || "").replace(/\n/g, "<br/>")}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
// ...new file...