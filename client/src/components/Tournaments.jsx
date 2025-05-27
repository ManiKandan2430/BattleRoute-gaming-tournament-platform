import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TournamentCard from "./TournamentCard";
import SpotlightCard from "./ui/SpotlightCard";
import { explore } from "../constants/constants";
import { useAuth } from "../context/AuthContext";

gsap.registerPlugin(ScrollTrigger);

const Tournaments = () => {
  const mainRef = useRef();
  const [index, setIndex] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [selectedMatches, setSelectedMatches] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? explore.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === explore.length - 1 ? 0 : prev + 1));

  const handleExplore = (id) => {
    if (!user) {
      console.log("login");
      return navigate("/login");
    }

    const selectedVideo = explore.find((item) => item.id === id);
    setSelectedMatches(selectedVideo?.matches || []);
    setCardVisible(true);
  };

  useGSAP(() => {
    gsap.fromTo(
      mainRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      id="tournaments"
      ref={mainRef}
      className="w-full overflow-hidden md:h-screen"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl text-teal-100">Tournaments</h2>

        <section
          className={`w-full ${
            cardVisible ? "" : "h-[300px] "
          }md:h-[500px] mt-20 md:mt-0 flex items-center justify-center relative overflow-hidden`}
        >
          {!cardVisible ? (
            <>
              {explore.map((video, i) => (
                <div key={video.id}>
                  <div
                    className={`absolute top-0 left-0 w-full md:h-screen flex items-center justify-center transition-opacity duration-500 ${
                      i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      loop
                      playing
                      muted
                    />
                  </div>
                  {i === index && (
                    <button
                      onClick={() => handleExplore(video.id)}
                      className="absolute left-[35%] md:left-[45%] bottom-[60%] md:bottom-30 z-[20] px-5 py-1 rounded-full text-sm md:text-xl text-slate-950 bg-white/50 cursor-pointer"
                    >
                      Explore
                    </button>
                  )}
                </div>
              ))}
              <button onClick={prevSlide} className="arrow-btn-back z-20">
                <IoIosArrowBack />
              </button>
              <button onClick={nextSlide} className="arrow-btn-move z-20">
                <IoIosArrowForward />
              </button>
              <div className="absolute z-10 bg-gradient-to-t from-black to-black/70 w-full h-[600px] pointer-events-none" />
            </>
          ) : (
            <section className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-10">
              {selectedMatches?.map((match, idx) => (
                <SpotlightCard
                  key={idx}
                  index={idx}
                  className="custom-spotlight-card md:w-[80%] md:h-[350px] h-full"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <TournamentCard
                    game={match}
                    index={idx}
                    joined={setCardVisible}
                  />
                </SpotlightCard>
              ))}
            </section>
          )}
        </section>
      </div>
    </div>
  );
};

export default Tournaments;
