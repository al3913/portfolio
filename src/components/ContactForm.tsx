'use client'

import { useState, useRef, type SubmitEvent } from 'react';
import { MorphIcon } from "morphicons/react";
import { Mail, Xmark, ICONOIR_STROKE_WIDTH } from "@/icons/iconoir";

export default function ContactForm() {
  const inFlight = useRef(false);
  const [pending, setPending] = useState(false);
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
    if (inFlight.current) {
      return;
    }

    inFlight.current = true;
    setPending(true);
    setStatus("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

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
      throw new Error(data.message);
    }
    catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed");
    }
    finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  const mockPending = (e: SubmitEvent) => {
    e.preventDefault();
    if (inFlight.current) {
      return;
    }

    inFlight.current = true;
    setPending(true);
    setStatus("Sending...");
    setTimeout(() => {
      inFlight.current = false;
      setStatus("Submitted");
      setPending(false);
    }, 5000);
  }

  const shared = {
    disabled: pending,
    required: true,
  }

  return (
    <form onSubmit={mockPending} className="flex flex-col self-stretch items-start gap-4 ">
      <input
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full"
        type="text" value={name} name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="your name"
        {...shared}
      />
      <input
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full"
        type="email" value={email} name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        {...shared}
      />
      <textarea
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 resize-none w-full"
        value={message} name="message"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="hey im pretty coool and I think you're pretty coool, lets chat!"
        {...shared}
      />
      <div className="flex items-center gap-3">
        <button
          className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2"
          disabled={pending}
        >
          <MorphIcon icon={!pending ? Mail : Xmark} strokeWidth={ICONOIR_STROKE_WIDTH} />
        </button>
        <span className="text-neutral-100 break-all">{status}</span>
      </div>
    </form>
  );
}
