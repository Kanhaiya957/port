'use client';
import Image from "next/image";
import React from "react";
import "./hero.css";
import {
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    icon: <BsInstagram size={20}/>,
    url: "https://www.instagram.com/_kanhaiya_kumar_01_/",
  },
  { name: "Email", icon: <MdMailOutline size={25}/>, url: "mailto:jhak5271@gmail.com" },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={20}/>,
    url: "https://wa.me/+919572519718",
  },
];

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative w-40 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full transition-all duration-300"
        >
          <Image
            src="/images/hero/image.jpg"
            alt="Kanhaiya Kumar - profile photo"
            fill
            className="grayscale-0 hover:grayscale-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </motion.div>

        {/* Text and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl"
        >
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <span>Hi, I&apos;m</span>
            <h1 className="font-display tracking-wide text-5xl font-medium text-gray-50">
              Kanhaiya Kumar Jha
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SkillsSlider />
          </motion.div>

          <p className="text-base tracking-wider text-center md:text-left">
            I&apos;m Kanhaiya Kumar Jha, A dedicated Civil Engineering graduate with a solid foundation in technical knowledge and practical skills honed through formal education and hands-on projects. Possesses a strong aptitude for problem-solving, analytical thinking, and a commitment to delivering high-quality work in engineering environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;

// slider style come from hero.css file.
const SkillsSlider = () => {
  return (
    <div className="flex gap-2 justify-center items-baseline">
      {/* <div>I am</div> */}
      <div className="slider">
        <div className="slides ">
          <div className="decoration-blue-500">
            GATE '26 Aspirant
          </div>
          <div className="decoration-red-500">
            Civil Engineering Graduate
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-3 justify-center items-center">
        {socialLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="text-gray-500 hover:text-foreground border-red-500 hover:border-b-[0.5px] p-1"
            >
              <a
                title={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
