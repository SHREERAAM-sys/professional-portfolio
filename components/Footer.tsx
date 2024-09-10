
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { LinkPreview } from "./ui/LinkPreview";

const Footer = () => {
  return (
    <footer className="w-full pt-10 mb-[100px]" id="contact">
    

      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50 "/>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ramachandran.shr@northeastern.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col justify-between items-center gap-2">

        <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info, index) => {
   
            return (
            
                <div className="w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                    <img src={info.img} alt="icons" width={30} height={30} />
                </div>
            
            );
        })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
