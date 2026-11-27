'use client'

import { useActionState, useEffect, useId, useState, useRef, type SubmitEvent } from 'react';
import { MorphIcon } from "morphicons/react";
import { Mail, Send, ICONOIR_STROKE_WIDTH } from "@/icons/iconoir";

type Contact = {
  name: string;
  email: string;
  message: string;
}

const EMPTY_CONTACT: Contact = {
  name: "",
  email: "",
  message: "",
}

export default function ActionContactForm() {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);
  const inFlight = useRef(false);
  const inputToFocus = useRef<HTMLElement>(null);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Contact>(EMPTY_CONTACT);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);

  useEffect(() => {
    inputToFocus.current?.focus();
    inputToFocus.current = null;
  }, [errors])

  const clearInputs = () => {
    setContact(EMPTY_CONTACT);
  }

  const validate = (field: keyof Contact, value: string): boolean => {
    if (!value.trim()) {
      setErrors((errors) => ({ ...errors, [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` }))
      return false;
    }
    if (field === "email") {
      const emailField = form.current?.elements.namedItem("email") as HTMLInputElement;
      if (emailField?.validity.typeMismatch) {
        setErrors((errors) => ({ ...errors, [field]: `Enter a valid ${field}` }))
        return false;
      }
    }
    setErrors((errors) => ({ ...errors, [field]: `` }))
    return true;
  }

  const checkInputs = () => {
    let first = null;
    for (const fieldInput of Object.keys(contact) as (keyof Contact)[]) {
      if (!validate(fieldInput, contact[fieldInput])) {
        if (!first) first = fieldInput;
      }
    }
    if (first) inputToFocus.current = form.current?.elements.namedItem(first) as HTMLInputElement;
    return first ? false : true;
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (inFlight.current) {
      return;
    }

    if (!checkInputs()) return;

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    inFlight.current = true;
    setPending(true);
    setStatus("Sending...");
    setTimeout(async () => {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        if (!response.ok) throw new Error(`Request failed ${response.status}`);

        const data = await response.json();

        if (data.success) {
          clearInputs();
          setStatus("Message sent!");
          return;
        }

        throw new Error(data?.message ?? "Something went wrong");

      }
      catch (error) {
        setStatus(error instanceof Error ? error.message : "Submission failed");
      }
      finally {
        inFlight.current = false;
        setPending(false);
      }
    }, 2000);
  };

  const handleChange = (inputName: keyof Contact, value: string) => {
    setStatus("");
    setContact((contact) => ({ ...contact, [inputName]: value }))
    if (errors[inputName]) {
      validate(inputName, value);
    }
  }

  const shared = {
    disabled: pending,
    required: true,
  };

  return (
    <form ref={form} noValidate onSubmit={handleSubmit} className="flex flex-col self-stretch items-start gap-4 ">
      <label className="w-full text-neutral-100">
        name
        <input
          className="text-neutral-900 bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full transition duration-500 motion-reduce:transition-none disabled:opacity-40"
          type="text" value={contact.name} name="name"
          onChange={(e) => handleChange("name", e.currentTarget.value)}
          placeholder="your name"
          aria-invalid={errors["name"] ? true : undefined}
          aria-describedby={errors["name"] ? `${id}-name` : undefined}
          {...shared}
        />
      </label>
      <span id={`${id}-name`} className="text-red-200">{errors["name"]}</span>
      <label className="w-full text-neutral-100">
        email
        <input
          className="text-neutral-900 bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full transition duration-500 motion-reduce:transition-none disabled:opacity-40"
          type="email" value={contact.email} name="email"
          onChange={(e) => handleChange("email", e.currentTarget.value)}
          placeholder="your@email.com"
          aria-invalid={errors["email"] ? true : undefined}
          aria-describedby={errors["email"] ? `${id}-email` : undefined}
          {...shared}
        />
      </label>
      <span id={`${id}-email`} className="text-red-200">{errors["email"]}</span>
      <label className="w-full text-neutral-100">
        message
        <textarea
          className="text-neutral-900 bg-neutral-100 border border-neutral-500 rounded-2xl p-2 resize-none w-full transition duration-500 motion-reduce:transition-none disabled:opacity-40"
          value={contact.message} name="message"
          onChange={(e) => handleChange("message", e.currentTarget.value)}
          placeholder="hey im pretty coool and I think you're pretty coool, lets chat!"
          aria-invalid={errors["message"] ? true : undefined}
          aria-describedby={errors["message"] ? `${id}-message` : undefined}
          {...shared}
        />
      </label>
      <span id={`${id}-message`} className="text-red-200">{errors["message"]}</span>

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
