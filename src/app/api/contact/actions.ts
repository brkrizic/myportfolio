"use server";

import Message, { IMessage } from "@/app/models/MessageSchema";
import connectToDatabase from "@/app/lib/mongodb";

// POST MESSAGE
export async function saveMessage(data: { name: string; email: string; message: string }) {
  await connectToDatabase();

  const { name, email, message } = data;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  const newMessage: IMessage = new Message({ name, email, message });
  await newMessage.save();

  return { success: true, message: "Message saved" };
}

// CLIENT SIDE CALLER
export async function submitForm(data: { name: string; email: string; message: string }) {
  const res = await fetch("https://myportfolio-pi-one-93.vercel.app/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return { success: false, message: "Failed to send message" };
  }

  return await res.json();
}
