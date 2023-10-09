import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/images/github-icon.svg"
import TwitterIcon from "../../public/images/twitter.svg"
import DiscordIcon from "../../public/images/discord-icon.svg"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-between">
        <span>&copy; Saumya</span>
        <Link 
        href={"https://github.com/27Saumya"}>
          <Image
            src={GithubIcon}
            alt="Github Icon"
            height={35}
            width={35}
            />
        </Link>
        <Link 
        href={"https://twitter.com/saums27"}>
          <Image
            src={TwitterIcon}
            alt="Twitter Icon"
            height={30}
            width={30}
            />
        </Link>
        <Link
        href={"https://discord.com/channels/@me/917693263480229918"}>
          <Image
            src={DiscordIcon}
            alt="Github Icon"
            height={35}
            width={35}
            />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;