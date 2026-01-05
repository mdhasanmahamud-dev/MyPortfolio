import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaGithub />, url: "https://github.com/mdhasanmahamud-dev" },
  { id: 2, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mdhasanmahamud" },
  { id: 3, icon: <FaTwitter />, url: "https://twitter.com/" },
  { id: 4, icon: <FaFacebook />, url: "https://www.facebook.com/MdHasanMahamudF1" },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start gap-4 py-5 text-slate-400 text-2xl">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
