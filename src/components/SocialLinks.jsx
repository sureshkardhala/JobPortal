import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
         <FaLinkedin size={25} /> <p>Join LinkedIn </p>
        </div>
      ),
      href: "https://www.linkedin.com/in/suresh-kardhala",
      style: "rounded-br-md",
    },
    {
      id: 2,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
         <FaLinkedin size={25} /> <p>Join LinkedIn </p>
        </div>
      ),
      href: "https://github.com/sureshkardhala",
      style: "rounded-br-md",
    },
    {
      id: 3,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
        <FaLinkedin size={25} /> <p>Join LinkedIn </p>
       </div>
      ),
      href: "mailto:sureshkardhala2k22@gmail.com",
    },
    {
      id: 4,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
        <FaLinkedin size={25} /> <p>Join LinkedIn </p>
       </div>
      ),
      href: "./resume.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, download}) => (
          <li
            key={id}
            className=
              "flex items-center w-52 h-14 px-4 mr-[-160px] hover:ml-[-130px] hover:rounded-md duration-300 bg-gray-500"
            
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
              {download}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
