"use client";
import { useState } from "react";
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      console.log(JSON.stringify({ data: form }),"Submitting form data");
     const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:5004"}/api/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: form }),
        }
      );
      if (!res.ok) throw new Error("Failed to submit");
      // 2. Trigger Node.js email service
    const emailRes = await fetch("http://localhost:5005/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!emailRes.ok) throw new Error("Failed to send email");

    setSuccess("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("There was a problem submitting your message.");
    }
  }

  return (
    <section className="container mx-auto py-12 px-4">
      <PageHeader heading="Contact Us" text="We'd love to hear from you!" />
      <form
        className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100"
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100"
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100"
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          Send Message
        </button>
        {success && <p className="text-green-400">{success}</p>}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </section>
  );
}