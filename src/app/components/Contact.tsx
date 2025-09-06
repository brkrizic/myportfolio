"use client";

import { useEffect, useState } from "react";
import { submitForm } from "../api/contact/actions";
import { z } from "zod";
import { motion, Variants } from "framer-motion";

const shakeVariant: Variants = {
  rest: { x: 0 },
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [triggerShake, setTriggerShake] = useState(false); // <-- state to retrigger shake

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus(null);
    setIsSubmitting(true);

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);

      
      setTriggerShake(false);
      setTimeout(() => setTriggerShake(true), 0);

      setIsSubmitting(false);
      return;
    } else {
      setErrors({});
    }

    try {
      const result = await submitForm(validation.data);

      if (result.success) {
        setStatus("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch {
      setStatus("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="my-24 max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
      <p className="mb-8 text-gray-400">Feel free to reach out via email or the form below.</p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 max-w-xl mx-auto">
        <fieldset disabled={isSubmitting} className="flex flex-col gap-4">
          <motion.input
            type="text"
            name="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            variants={shakeVariant}
            initial="rest"
            animate={errors.name && triggerShake ? "shake" : "rest"}
            className={`p-3 rounded bg-gray-800 text-white focus:outline-none transition-all duration-300 ${
              errors.name ? "border border-red-500 shadow-red-500/50 shadow-md" : "border border-transparent"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <motion.input
            type="email"
            name="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            variants={shakeVariant}
            initial="rest"
            animate={errors.email && triggerShake ? "shake" : "rest"}
            className={`p-3 rounded bg-gray-800 text-white focus:outline-none transition-all duration-300 ${
              errors.email ? "border border-red-500 shadow-red-500/50 shadow-md" : "border border-transparent"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <motion.textarea
            name="message"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            variants={shakeVariant}
            initial="rest"
            animate={errors.message && triggerShake ? "shake" : "rest"}
            className={`p-3 rounded bg-gray-800 text-white focus:outline-none transition-all duration-300 ${
              errors.message ? "border border-red-500 shadow-red-500/50 shadow-md" : "border border-transparent"
            }`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </fieldset>
      </form>

      {status && <p className="mt-6 text-green-400">{status}</p>}

      <p className="mt-12 text-gray-400">
        Or email me directly at{" "}
        <a href="mailto:bruno.krizic1999@gmail.com" className="text-blue-500 hover:underline">
          bruno.krizic1999@gmail.com
        </a>
      </p>
    </section>
  );
}
