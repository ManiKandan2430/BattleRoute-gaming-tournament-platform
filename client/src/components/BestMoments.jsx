import VideoRolling from "./ui/VideoRolling";
import { GiAudioCassette } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const BestMoments = () => {
  const videoRef = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.fromTo(
      videoRef.current,
      {
        y: 180,
        opacity: 0,
      },
      {
        y:0,
        opacity:1,
        duration:2,
        scrollTrigger:{
          trigger:videoRef.current,
          start:'top bottom-=100'
        }
      }
    );
  }, []);
  return (
    <div ref={videoRef} className="w-full overflow-hidden">
      <div className="w-full flex gap-4 justify-center mt-15">
        <h1 className="md:text-3xl text-xl text-neutral-300">Best Moments</h1>
        <span className="md:text-4xl text-2xl mt-1">
          <GiAudioCassette />
        </span>
      </div>
      <div>
        <VideoRolling autoplay={true} pauseOnHover={false} />
      </div>
    </div>
  );
};

export default BestMoments;
