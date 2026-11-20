import { useState, useRef } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <input className="" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="hey im pretty coool and I think you're pretty coool, lets chat!" required />
      <button></button>
    </form>
  );
}
