import { footerLogo } from "./assets/assets/images";
import { footerLinks, socialMedia } from "./constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start gap-20 flex-wrap max-lg:flex-row flex-col">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="" width={150} height={46} />
        </a>
        <p className="mt-6 text-base  font-montserrat leading-7 text-white-400 sm:max-w-sm ">
          Get shoes ready for the new term at your nearest nike store Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veniam
          ab mollitia maxime soluta dolorem.
        </p>

        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((social) => (
            <div className="text-white-400 flex justify-center items-center w-12 h-12 bg-white-400 rounded-full">
              <img src={social.src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <p className="text-white text-center w-full text-3xl">Made By Zaid</p>
      </div>
    </footer>
  );
};

export default Footer;
