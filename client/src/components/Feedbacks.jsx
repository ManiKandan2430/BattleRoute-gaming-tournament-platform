import React from "react";
import { MovingCards } from "./ui/MovingCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { VscFeedback } from "react-icons/vsc";

const Feedbacks = () => {
  const feedRef = useRef()
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      feedRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: feedRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);
  return (
    <div id="feedbacks"
      ref={feedRef}
      className="rounded-md md:mt-8 mt-6 flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <div className="flex gap-3">
        <h1 className="md:text-4xl text-xl">FeedBacks </h1>
        <span className="text-2xl md:text-4xl mt-1">
          <VscFeedback />
        </span>
      </div>
      <MovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
};

export default Feedbacks;

const testimonials = [
  {
    quote:
      "Absolutely loved the tournament! The matches were intense, and the atmosphere was electric. Definitely coming back next season!",
    name: "Rohit Sharma",
    title: "BGMI Player",
    rating: 5.5,
  },
  {
    quote:
      "The coordination and gameplay in Valorant was next-level. Hats off to the organizers for a smooth experience.",
    name: "Sneha Patel",
    title: "Valorant Pro",
    rating: 4,
  },
  {
    quote:
      "COD battles were thrilling! Though the servers lagged slightly during finals, overall it was a blast.",
    name: "Arjun Mehta",
    title: "COD Gamer",
    rating: 4.2,
  },
  {
    quote:
      "Loved the prizes and community vibes! Would be great if there were more practice lobbies before main rounds.",
    name: "Priya Iyer",
    title: "eSports Enthusiast",
    rating: 3,
  },
  {
    quote:
      "This was my first time joining a tournament and I’m hooked! The support team was really helpful.",
    name: "Vikram Desai",
    title: "Amateur Gamer",
    rating: 7,
  },
];
  
