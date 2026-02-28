import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ContactExperience } from "@/components/models/contact/ContactExperience";
import { TitleHeader } from "@/components/TitleHeader";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_USER = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_USER;
const TEMPLATE_ID_OWNER = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_OWNER;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmit = async () => {
    if (!formRef.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_USER, formRef.current);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_OWNER, formRef.current);
      reset();
      toast.success(
        "Message sent successfully! Check your email for confirmation.",
      );
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Something went wrong. Try again or contact me directly: ost.tomasz@gmail.com",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          subtitle="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-7"
                autoComplete="off"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="What's your name?"
                    autoComplete="off"
                    {...register("name")}
                  />
                  <p className="text-red-500 text-sm mt-1 min-h-5">
                    {errors.name?.message}
                  </p>
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="What's your email address?"
                    autoComplete="off"
                    {...register("email")}
                  />
                  <p className="text-red-500 text-sm mt-1 min-h-5">
                    {errors.email?.message}
                  </p>
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="How can I help you?"
                    rows={5}
                    {...register("message")}
                  />
                  <p className="text-red-500 text-sm mt-1 min-h-5">
                    {errors.message?.message}
                  </p>
                </div>

                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  text={loading ? "Sending..." : "Send Message"}
                />
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#ff9900] w-full h-full hover:cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
