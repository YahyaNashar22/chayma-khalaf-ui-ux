import stars from "../assets/videos/stars.webm";

import linkedin from "../assets/images/linkedin.webp";
import whatsapp from "../assets/images/whatsapp.webp";
import mail from "../assets/images/mail.webp";

import nature from "../assets/images/nature.webp";

const Contact = () => {
  return (
    <section
      id="contact_me"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden z-0 px-24 py-12"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={stars}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="z-10 flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-6xl md:text-8xl text-center text-white font-bold mt-auto relative">
          Work With Me
          <span className="absolute right-8 sm:-right-7 md:-right-8">
            <img src={nature} className="scale-x-[-1] w-8 md:w-12" />
          </span>
        </h1>
        <div className="text-white font-bold mt-auto flex items-center justify-center md:justify-around w-full flex-wrap gap-y-6">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/chayma-khalaf-62b7661aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 md:w-10"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="mailto:Chaimakhalaf9@gmail.com" className="w-6 md:w-10">
              <img src={mail} alt="mail" />
            </a>
            <a
              href="https://wa.me/96176187092"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 md:w-10"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>

          <a
            href="https://wa.me/96176187092"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-5 md:px-8 py-3 rounded-full text-center text-lg md:text-2xl "
          >
            +961 76 187 092
          </a>

          <a
            href="mailto:Chaimakhalaf9@gmail.com"
            className="border px-8 py-3 rounded-full text-center text-xl md:text-2xl "
          >
            Chaimakhalaf9@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
