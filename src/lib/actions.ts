"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in every field." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "yogatamaradix55@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return { success: true, message: "Message sent! I'll get back to you soon." };
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}