'use client'

import { useState, useRef, type SubmitEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "90cd1cd8-4974-40fc-afb2-e1cae956bc2a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        clearInputs();
        setStatus("Message sent!");
        return;
      }
      throw new Error("Something went wrong");
    }
    catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col self-stretch items-start gap-4 ">
      <input
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full"
        type="text" value={name} name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="your name"
        required />
      <input
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full"
        type="email" value={email} name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required />
      <textarea
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 resize-none w-full"
        value={message} name="message"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="hey im pretty coool and I think you're pretty coool, lets chat!"
        required />
      <div className="flex items-center gap-3">
        <button className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2"> abcde </button>
        <span className="text-neutral-100 break-all">{status}</span>
      </div>
    </form>
  );
}
