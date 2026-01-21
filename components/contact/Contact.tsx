"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    subject_id: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_ovj4zzb",
        "template_6bvpefj",
        formData,
        "jpN6fK64PFeBdBUZB"
      );
      toast.success("Message sent successfully!", {
        style: { background: "#2EFFC1", color: "#000" },
      });
      setFormData({ from_name: "", email_id: "", subject_id: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.", {
        style: { background: "#FF4C4C", color: "#fff" },
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 bg-[rgb(var(--mesh-2))]">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div
            className="
              contact-section
              p-10
              rounded-2xl
              bg-[rgb(var(--bg-card))]
              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
              transition-all
              duration-300
              hover:shadow-[0_0_25px_rgba(46,255,193,0.45)]
              hover:border-[rgb(var(--accent))]
              border
              border-transparent
            "
          >
            <h1 className="text-center text-3xl font-bold mb-6 text-[rgb(var(--text-primary))]">
              Contact Me
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/** Name */}
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="
                  w-full p-4 rounded-lg
                  bg-[rgb(var(--bg-gray))]
                  border border-[rgba(255,255,255,0.08)]
                  text-[rgb(var(--text-primary))]
                  focus:border-[rgb(var(--accent))]
                  focus:shadow-[0_0_15px_rgba(46,255,193,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(46,255,193,0.45)]
                "
              />
              {/** Email */}
              <input
                type="email"
                name="email_id"
                value={formData.email_id}
                onChange={handleChange}
                placeholder="Email"
                required
                className="
                  w-full p-4 rounded-lg
                  bg-[rgb(var(--bg-gray))]
                  border border-[rgba(255,255,255,0.08)]
                  text-[rgb(var(--text-primary))]
                  focus:border-[rgb(var(--accent))]
                  focus:shadow-[0_0_15px_rgba(46,255,193,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(46,255,193,0.45)]
                "
              />
              {/** Subject */}
              <input
                type="text"
                name="subject_id"
                value={formData.subject_id}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="
                  w-full p-4 rounded-lg
                  bg-[rgb(var(--bg-gray))]
                  border border-[rgba(255,255,255,0.08)]
                  text-[rgb(var(--text-primary))]
                  focus:border-[rgb(var(--accent))]
                  focus:shadow-[0_0_15px_rgba(46,255,193,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(46,255,193,0.45)]
                "
              />
              {/** Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                required
                className="
                  w-full p-4 rounded-lg
                  bg-[rgb(var(--bg-gray))]
                  border border-[rgba(255,255,255,0.08)]
                  text-[rgb(var(--text-primary))]
                  focus:border-[rgb(var(--accent))]
                  focus:shadow-[0_0_15px_rgba(46,255,193,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(46,255,193,0.45)]
                "
              />

              {/** Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-1/2 mx-auto block py-4 rounded-lg
                  bg-gradient-to-r from-[rgb(var(--secondary-color))] to-[rgb(var(--accent))]
                  text-black font-semibold
                  hover:translate-y-1 hover:scale-105
                  transition-transform duration-300
                "
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
