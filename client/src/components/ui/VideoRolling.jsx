import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Default video sources (YouTube or MP4)
const VIDEOS = [
  "https://www.youtube.com/embed/LpNfSeEPrk4",
  "https://www.youtube.com/embed/zGvwyPNdVCU?si=DeHRg7HYAlntGj2J",
  "https://youtube.com/embed/xhhNhwDNkKg?si=ymwMa4vgWiR2tu6C",
  "https://youtube.com/embed/KvOx_vBePH8?si=S2pLFpZlGJYb0XkL",
  "https://youtube.com/embed/3ZpJczzcvU4?si=Qzh-RgzTN9I7nNYj",
  "https://youtube.com/embed/XldDBGCKirQ?si=vqgmb3vX-WW8B2rx",
];

const isYouTube = (url) =>
  url.includes("youtube.com") || url.includes("youtu.be");

const VideoRolling = ({
  autoplay = true,
  pauseOnHover = true,
  videos = [],
}) => {
  videos = videos.length > 0 ? videos : VIDEOS;

  const [isSm, setIsSm] = useState(window.innerWidth <= 640);
  const containerRef = useRef(null);
  const rotationRef = useRef(0);
  const tl = useRef(null);
  const videoRef = useRef()
  const videoRefs = useRef()

  const cylinderWidth = isSm ? 1100 : 2000;
  const faceCount = videos.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  useEffect(() => {
    const handleResize = () => setIsSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startRotation = (fromAngle = 0) => {
    if (tl.current) tl.current.kill();

    tl.current = gsap.to(rotationRef.current, {
      value: fromAngle - 360,
      duration: 25,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        const rotateY = rotationRef.current.value;
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateY(${rotateY}deg)`;
        }
      },
    });
  };

  const pauseRotation = () => {
    if (tl.current) tl.current.pause();
  };

  const resumeRotation = () => {
    if (tl.current) tl.current.resume();
  };

  useEffect(() => {
    rotationRef.current = { value: 0 };
    if (autoplay) startRotation();
    return () => tl.current?.kill();
  }, [autoplay]);

  const handleMouseEnter = (index, videoRef) => {
    // Stop the rotation when hovering over a card
    pauseRotation();

    // Play the corresponding video when hovering over the card
    if (videoRef) {
      videoRef.play();
    }

    // Optionally, you can also stop all other videos
    // videosRefs.forEach((ref, i) => {
    //   if (i !== index) ref.pause();
    // });
  };

  const handleMouseLeave = (videoRef) => {
    // Resume the rotation when the hover ends
    resumeRotation();

    // Pause the video when mouse leaves the card
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0; // Reset the video to the start
    }
  };

  return (
    <div className="relative md:h-[500px] h-[300px] w-full md:mt-5 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-[48px] z-10 bg-gradient-to-l from-transparent to-black" />
      <div className="absolute top-0 right-0 h-full w-[48px] z-10 bg-gradient-to-r from-transparent to-black" />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <div
          ref={containerRef}
          className="flex min-h-[200px] items-center justify-center [transform-style:preserve-3d]"
          style={{
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            transform: "rotateY(0deg)",
          }}
        >
          {videos.map((url, i) => (
            <div
              key={i}
              className="group absolute px-100 flex h-[200px] items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
              onMouseEnter={() => handleMouseEnter(i, videoRefs[i])}
              onMouseLeave={() => handleMouseLeave(videoRefs[i])}
            >
              {isYouTube(url) ? (
                <iframe
                  src={url}
                  title={`youtube-${i}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                  allowFullScreen
                  className="md:h-[300px] md:w-[300px] h-[120px] w-[200px] rounded-xl border-[3px] border-white"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs[i] = el)}
                  src={url}
                  className="md:h-[300px] md:w-[300px] h-[120px] w-[220px] rounded-xl border-[3px] border-white object-cover"
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoRolling;
