import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://portfolio-backend-vhzl.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResponse(data.message);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="container my-5">
      <h2>Contact Me</h2>
      <input name="name" className="form-control my-2" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" className="form-control my-2" placeholder="Email" value={form.email} onChange={handleChange} />
      <textarea name="message" className="form-control my-2" placeholder="Message" value={form.message} onChange={handleChange} />
      <button className="btn btn-primary">Send</button>
      {response && <p className="mt-3 alert alert-success">{response}</p>}
    </form>
  );
}
