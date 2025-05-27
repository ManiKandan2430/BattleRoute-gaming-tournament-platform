import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function WinnerCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  width = "md:w-[300px] w-[250px]",
  height = "h-[200px] md:h-[300px]",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  color = "bg-blue-500",
  teamId,
  win,
  imgWidth = "md:w-[300px] w-[300px]",
  imgHeight = "h-[200px] md:h-[300px]",
  enableScrollTrigger
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const [lastY, setLastY] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!enableScrollTrigger) return;

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          delay: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100",
          },
        }
      );
    }
  }, []);
  

  function handleMouse(e) {
    if (!containerRef.current || !imageRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    gsap.to(imageRef.current, {
      rotateX: rotationX,
      rotateY: rotationY,
      transformPerspective: 800,
      transformOrigin: "center",
      ease: "power2.out",
      duration: 0.3,
    });

    if (captionRef.current && showTooltip) {
      const velocityY = offsetY - lastY;
      const tooltipX = offsetX + rect.width / 2 + 10;
      const tooltipY = offsetY + rect.height / 2 + 10;

      gsap.to(captionRef.current, {
        x: tooltipX,
        y: tooltipY,
        opacity: 1,
        rotate: -velocityY * 0.6,
        duration: 0.2,
        ease: "power2.out",
      });

      setLastY(offsetY);
    }
  }

  function handleMouseEnter() {
    gsap.to(imageRef.current, {
      scale: scaleOnHover,
      duration: 0.3,
    });
  }

  function handleMouseLeave() {
    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    if (captionRef.current && showTooltip) {
      gsap.to(captionRef.current, {
        opacity: 0,
        rotate: 0,
        duration: 0.3,
      });
    }
  }

  return (
    <figure
      ref={containerRef}
      className={`relative mx-3 ${width} ${height} [perspective:800px] flex flex-col items-center justify-center ml-15 md:ml-14`}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <div
        ref={imageRef}
        className={`relative ${width} ${height} [transform-style:preserve-3d] bg-gray-900/70 text-white rounded-lg overflow-hidden`}
      >
        <img
          src={imageSrc}
          alt={altText}
          className={`absolute ${imgWidth} ${imgHeight} top-0 left-0 object-cover rounded-[15px] will-change-transform`}
        />

        {win && (
          <div className="absolute top-10 w-full left-0 text-sm md:text-[15px] rounded-[15px] flex flex-col justify-center items-center md:py-4 md:px-4 will-change-transform">
            <div className="flex gap-2 my-1 text-center">
              <h1>
                Team: <span>{win?.name}</span>
              </h1>
              <h2 className="bg-gradient-to-tr from-amber-900 to-purple-500 rounded-lg px-3 py-1">
                {win.game}
              </h2>
            </div>
            <div className="flex gap-4 my-2">
              <h1>
                Team kills: <span>{win.totalKills}</span>
              </h1>
              <h2>
                MVP: <span>{win.mvp}</span>
              </h2>
            </div>
            <div className="md:my-2">
              <h1 className="text-center">Players</h1>
              <span className="flex gap-3">
                {win.lineup.map((ply, i) => (
                  <p key={i}>{ply}</p>
                ))}
              </span>
            </div>
            <h1 className="md:mt-5 mt-2 bg-cyan-400/30 px-4 py-1 rounded-sm">
              Prize: {win.prize}
            </h1>
          </div>
        )}

        {displayOverlayContent && overlayContent && (
          <div
            className={`absolute top-0 left-0 z-[2] ${color} text-white p-1 rounded-[10px]`}
            style={{ transform: "translateZ(30px)" }}
          >
            {overlayContent}
          </div>
        )}
      </div>

      {showTooltip && (
        <div
          ref={captionRef}
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[5] hidden sm:block"
        >
          {captionText}
        </div>
      )}
    </figure>
  );
}
