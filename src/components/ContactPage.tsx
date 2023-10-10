import React, { useState } from "react";
import { PiDevToLogo } from "react-icons/pi"
import { LiaDiscord } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "react-hot-toast";

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

const ContactPage = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    setState('loading');

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        senderEmail: formData.senderEmail,
        senderName: formData.senderName,
        message: formData.message
      })
    })

    setState('ready');

    if (response.status === 200) {
      e.target.reset()
      toast.success(`Hey ${formData.senderName}, your message was sent successfully!`, { style: { borderRadius: '10px', background: '#333', color: '#fff' } })
    } else {
      toast.error("Uh-Oh, an extremely rare error occurred while sending your message!", { style: { borderRadius: '10px', background: '#333', color: '#fff' } })
    };
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 flex"
      >
        <div className="lg:py-3">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect!
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-3">
            <Link href="https://github.com/27Saumya">
              <BsGithub size={35} />
            </Link>
            <Link href="https://twitter.com/27saums">
              <FaXTwitter size={35} />
            </Link>
            <Link href="https://discord.com/users/917693263480229918">
              <LiaDiscord size={35} />
            </Link>
            <Link href="https://dev.to/27saumya">
              <PiDevToLogo size={35} />
            </Link>
          </div>
        </div>
        <div className="lg:py-3">
          <form className="flex flex-col" id="contact-form" onSubmit={handleOnSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                name="senderEmail"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="john@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="senderName"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                name="senderName"
                type="text"
                id="senderName"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="John"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-900 hover:bg-indigo-950 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={state === 'loading'}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;