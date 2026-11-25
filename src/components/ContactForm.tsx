'use client'

import { useState, useRef, type SubmitEvent } from 'react';
import { MorphIcon } from "morphicons/react";
import { Mail, Send, ICONOIR_STROKE_WIDTH } from "@/icons/iconoir";

type Contact = {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef(null);
  const inFlight = useRef(false);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState<Contact>({ name: "", email: "", message: "" });

  const clearInputs = () => {
    setContact({ name: "", email: "", message: "" });
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (inFlight.current) {
      return;
    }

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    inFlight.current = true;
    setPending(true);
    setStatus("Sending...");
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
      throw new Error(data.message ?? "Something went wrong");
    }
    catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed");
    }
    finally {
      inFlight.current = false;
      setPending(false);
    }
  };

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
      clearInputs();
    }, 5000);
  };

  const handleChange = (inputName: keyof Contact, value: string) => {
    setContact((contact) => ({ ...contact, [inputName]: value }))
  }


  const shared = {
    disabled: pending,
    required: true,
  };

  return (
    <form ref={form} onSubmit={mockPending} className="flex flex-col self-stretch items-start gap-4 ">
      <label className="w-full text-neutral-100">
        name
        <input
          className="text-neutral-900 bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full transition duration-500 motion-reduce:transition-none disabled:opacity-40"
          type="text" value={contact.name} name="name"
          onChange={(e) => handleChange("name", e.currentTarget.value)}
          placeholder="your name"
          {...shared}
        />
      </label>
      <span className="hidden">put your name down!</span>
      <label className="w-full text-neutral-100">
        email
        <input
          className="text-neutral-900 bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full transition duration-500 motion-reduce:transition-none disabled:opacity-40"
          type="email" value={contact.email} name="email"
          onChange={(e) => handleChange("email", e.currentTarget.value)}
          placeholder="your@email.com"
          {...shared}
        />
      </label>
      <span className="hidden">put in a valid email address!</span>
      <label className="w-full text-neutral-100">
        message
        <textarea
          className="text-neutral-900 bg-neutral-100 border border-neutral-500 rounded-2xl p-2 resize-none w-full transition duration-500 motion-reduce:transition-none disabled:opacity-40"
          value={contact.message} name="message"
          onChange={(e) => handleChange("message", e.currentTarget.value)}
          placeholder="hey im pretty coool and I think you're pretty coool, lets chat!"
          {...shared}
        />
      </label>
      <span className="hidden">don't forget your message!</span>

      <div className="flex items-center gap-3">
        <button
          className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 transition duration-500 motion-reduce:transition-none aria-disabled:opacity-40"
          aria-disabled={pending}
          aria-busy={pending || undefined}
          aria-label={pending ? "Sending Message..." : "Send Message"}
        >
          <MorphIcon icon={pending ? Mail : Send} strokeWidth={ICONOIR_STROKE_WIDTH} spring="smooth" reducedMotion='user' />
        </button>
        <span className="text-neutral-100 break-all" role="status" aria-atomic="true">{status}</span>
      </div>
    </form>
  );
}
