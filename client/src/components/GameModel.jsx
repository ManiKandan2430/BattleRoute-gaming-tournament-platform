import React, { useRef } from "react";
import CharacterModel from "./model/CharacterModel";
import Squares from "./ui/Squares";
import PlayerCard from "./PlayerCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GameModel = () => {
  const modelRef = useRef();
  const lineRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.fromTo(
        ".model",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: modelRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      ),
        gsap.utils.toArray(".line-animate").forEach((line) => {
          const origin = line.classList.contains("right") ? "right" : "left";

          gsap.fromTo(
            line,
            {
              scaleX: 0,
              transformOrigin: origin,
            },
            {
              scaleX: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: line,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
    },
    { scope: modelRef }
  );
  return (
    <div ref={modelRef} className="w-full h-full overflow-hidden">
      <header className="model absolute top-85 md:relative md:top-0 w-full flex justify-center items-center text-2xl text-slate-400">
        Player Statistics
      </header>
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />
      <main className="player-model model">
        <div className="left-section mt-48 md:mt-15 md:w-[50%] h-[60%] md:flex justify-around items-center">
          <PlayerCard
            playerName="I AM ODIN"
            teamName="Team JOD • Entry Hellfire"
            matches="32"
            kills="500"
            kd="5.7"
            headShots="68.4%"
            longestShot="666m"
            Damage="4000"
            survival="23mins"
            Revives="42"
            Finishes="6x"
          />
        </div>
        <section className="absolute w-full md:w-[50%] h-[80%] right-0 md:top-18">
          <div className="">
            <div className="absolute border border-pink-600 px-4 py-1 md:right-20 top-20 right-3 md:top-10 rounded-full">
              Helmet
            </div>
            <span className="absolute bg-pink-500 md:w-[19%] w-[20%] md:right-41 right-24 top-24 md:top-14 h-0.5 line-animate right" />
          </div>
          <div className="">
            <div className="absolute border border-blue-600 px-4 py-1 left-3 md:left-10 top-55 md:top-34 rounded-full">
              Armor
            </div>
            <span className="absolute bg-blue-500 w-[10%] md:w-[18%] top-59 md:top-38 left-23 md:left-30 h-0.5 line-animate left" />
          </div>
          <div className="">
            <div className="absolute border border-purple-600 px-4 py-1 right-10 bottom-105 md:bottom-28 rounded-full">
              Gun
            </div>
            <span className="absolute bg-purple-500 md:w-[14%] w-[18%] md:bottom-31.5 bottom-113 max-md:rotate-90 rotate-0 md:right-26 right-18 h-0.5 line-animate right" />
          </div>
        </section>
        <div className="md:w-[50%] h-[450px] flex justify-center items-center">
          <span className="mt-20 w-full h-full">
            <CharacterModel />
          </span>
        </div>
      </main>
    </div>
  );
};

export default GameModel;
