import ReactPlayer from "react-player";
import video from "../assets/videos/header.mp4";
import { Link } from "react-router-dom";
import { GiEnergyArrow } from "react-icons/gi";
import { PiDotDuotone } from "react-icons/pi";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [player, setPlayer] = useState(Math.floor(Math.random() * 100000));
  const [hasAnimated, setHasAnimated] = useState(false);
  const { user } = useAuth();
  const countUpRef = useRef(null);
  const previousValue = useRef(player);
  const descRef = useRef();
  const playerRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      const randomPlayer = Math.floor(Math.random() * 100000);

      if (!hasAnimated) {
        setHasAnimated(true);
      } else {
        previousValue.current = randomPlayer;
        setPlayer(randomPlayer);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hasAnimated]);
  // Animation for header text
  useGSAP(
    (context) => {
      const q = context.selector;
      gsap.fromTo(
        q(".child"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
        }
      );
    },
    { scope: descRef }
  );

  // Animation for "Players online" section
  useGSAP(
    (context) => {
      const q = context.selector;
      gsap.fromTo(
        q(".player-child"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    },
    { scope: playerRef }
  );
  return (
    <header id="hero" className="w-full overflow-hidden">
      <section className="video-header">
        <ReactPlayer
          url={video}
          playing
          loop
          muted
          controls={false}
          width="100%"
          height="100%"
        />
      </section>
      <div
        className="absolute top-0 w-full h-[50%] md:h-[150%] bg-gradient-to-b
         from-black/80 to-black"
      />
      <div className="header absolute md:flex justify-center w-full items-center top-20 px-5 h-[70%]">
        <section ref={descRef} className="desc">
          <h1 className="child">BattleRoute</h1>
          <p className="child">
            BattleRoute’s mission is to create the ultimate competitive gaming
            platform that unites players through thrilling tournaments,
            strategic battles, and a dynamic community-driven experience.
          </p>
          <button className="">
            {user ? (
              <a href="#tournaments">Join now</a>
            ) : (
              <Link to="/register">Register</Link>
            )}
            <span>
              <GiEnergyArrow className="arrow" />
            </span>
          </button>
        </section>
        <section className="player-on" ref={playerRef}>
          <div className="child md:flex justify-center items-center player-child">
            <h2>
              <PiDotDuotone className="dot md:text-[80px] text-[38px]" />
            </h2>
            <h3 className="md:text-3xl hidden md:flex text-teal-500/50">
              Players in online
            </h3>
          </div>
          <div className="child md:flex justify-center items-center player-child">
            <h3 className="text-slate-300">
              <CountUp
                className="md:text-[40px] text-[18px]"
                start={hasAnimated ? previousValue.current : player}
                end={player}
                duration={3}
                style={{ color: "teal" }}
                ref={countUpRef}
                onEnd={() => setHasAnimated(true)}
              />
            </h3>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
