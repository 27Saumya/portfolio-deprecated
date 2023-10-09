import React, { useState } from "react";
import GithubIcon from "../../public/images/github-icon.svg"
import TwitterIcon from "../../public/images/twitter.svg"
import DiscordIcon from "../../public/images/discord-icon.svg"
import DevtoIcon from "../../public/images/dev_to-icon.svg"
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast"

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
      body: JSON.stringify({
        name: formData.name,
        message: formData.message
      })
    })

    setState('ready');

    if (response.status === 200) {
      toast.success(`Hey ${formData.name}, your message was sent successfully!`)
      setState('');
    } else {
      console.log(response.status)
      toast.error("Uh-Oh, an extremely rare error occurred while sending your message!")
    };
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/27Saumya">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://twitter.com/27saums">
            <Image src={TwitterIcon} alt="Twitter Icon" />
          </Link>
          <Link href="https://discord.com/channels/@me/917693263480229918">
            <Image src={DiscordIcon} alt="Discord Icon" />
          </Link>
          <Link href="https://dev.to/27saumya">
            <Image
              src={DevtoIcon}
              alt="Dev.to Icon"
              height={46}
              width={46}
            />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your name
            </label>
            <input
              name="name"
              type="text"
              id="name"
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
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={state === 'loading'}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;