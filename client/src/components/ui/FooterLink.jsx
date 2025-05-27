import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const FooterLink = () => {
  return (
    <div className="w-full md:h-[150px] md:flex justify-between items-center px-10 py-8 bg-slate-500/12 mt-8">
      <section className="flex flex-col gap-6 mb-5 md:mb-0">
        <h1 className="text-xl">About us</h1>
        <Link to="#" className="text-slate-200/70 underline">
          Privacy Policy
        </Link>
        <Link to="#" className="text-slate-200/70 underline">
          Terms & Conditions
        </Link>
      </section>
      <section className="text-slate-200/70">
        CopyRight 7's Star IT © 2025 - All rights Reserved
      </section>
      <section className="flex gap-5 md:text-4xl text-xl mt-8 md:mt-0">
        <span className="relative group cursor-pointer text-neutral-400">
          <Link
            to="https://github.com/ManiKandan2430"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            GitHub
          </div>
        </span>

        <span className="relative group cursor-pointer text-neutral-400">
          <Link
            to="https://github.com/ManiKandan2430"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Linkedin
          </div>
        </span>

        <span className="relative group cursor-pointer text-neutral-400">
          <Link
            to="https://github.com/ManiKandan2430"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgProfile className="transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <div className="absolute w-[70px] bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-1 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            My website
          </div>
        </span>
      </section>
    </div>
  );
};

export default FooterLink;
