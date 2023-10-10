import React from "react";
import Link from "next/link";
import { LiaDiscord } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-between">
        <span>&copy; Saumya</span>
        <Link 
        href={"https://github.com/27Saumya"}>
          <BsGithub size={25} />
        </Link>
        <Link 
        href={"https://twitter.com/saums27"}>
          <FaXTwitter size={25} />
        </Link>
        <Link
        href={"https://discord.com/users/917693263480229918"}>
          <LiaDiscord size={25} />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;