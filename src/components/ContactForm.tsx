import { useState, useRef } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex flex-col self-stretch items-start gap-4 ">
      <input
        className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 w-full"
        type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required />
      <textarea className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2 resize-none w-full" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="hey im pretty coool and I think you're pretty coool, lets chat!" required />
      <button className="bg-neutral-100 border border-neutral-500 rounded-2xl p-2"> abcde </button>
    </form>
  );
}
