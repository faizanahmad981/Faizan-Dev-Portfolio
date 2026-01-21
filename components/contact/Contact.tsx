"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import { TextInput } from "@/components/form/TextInput";
import { TextArea } from "@/components/form/TextArea";
import { SubmitButton } from "@/components/form/SubmitButton";
import { useReveal } from "@/hooks/useReveal"; // <-- import your scroll reveal hook

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const reveal = useReveal(0.2); // Scroll reveal for the entire contact card

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      await emailjs.send(
        "service_ovj4zzb",
        "template_6bvpefj",
        data,
        "jpN6fK64PFeBdBUZB"
      );

      toast.success("Message sent successfully!", {
        style: { background: "#2EFFC1", color: "#000" },
      });

      reset();
    } catch {
      toast.error("Failed to send message", {
        style: { background: "#FF4C4C", color: "#fff" },
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[rgb(var(--mesh-2))] py-24">
      <Toaster position="top-right" />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">

          {/* Apply scroll reveal */}
          <div
            ref={reveal.ref}
            className={`
              p-8 md:p-10 lg:p-12
              rounded-2xl
              bg-[rgb(var(--bg-card))]
              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
              border border-transparent
              hover:border-[rgb(var(--accent))]
              hover:shadow-[0_0_35px_rgba(46,255,193,0.45)]
              transition-all duration-700
              transform
              ${reveal.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
            `}
          >
            
            <h1 className="text-center text-4xl font-bold mb-8">
              Contact Me
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <TextInput
                name="from_name"
                placeholder="Name"
                register={register}
                error={errors.from_name?.message}
              />

              <TextInput
                name="email_id"
                type="email"
                placeholder="Email"
                register={register}
                error={errors.email_id?.message}
              />

              <TextInput
                name="subject_id"
                placeholder="Subject"
                register={register}
                error={errors.subject_id?.message}
              />

              <TextArea
                name="message"
                placeholder="Message"
                register={register}
                error={errors.message?.message}
              />

              <SubmitButton loading={loading} />
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
