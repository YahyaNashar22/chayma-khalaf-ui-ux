import stars from "../assets/videos/stars.webm";

import linkedin from "../assets/images/linkedin.webp";
import whatsapp from "../assets/images/whatsapp.webp";
import mail from "../assets/images/mail.webp";

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
        <h1 className="text-6xl md:text-8xl text-center text-white font-bold mt-auto ">
          Work With Me!
        </h1>
        <div className="text-white text-xl md:text-2xl font-bold mt-auto flex items-center justify-center md:justify-around w-full flex-wrap gap-y-6">
          <p className="border px-8 py-3 rounded-full">+961 76 187 092</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img src={linkedin} alt="linkedin" />
            <img src={mail} alt="mail" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
          <p className="border px-8 py-3 rounded-full">
            Chaimakhalaf9@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
