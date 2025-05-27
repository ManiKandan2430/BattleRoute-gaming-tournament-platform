import React, { useEffect } from "react";
import WinnerCard from "./ui/WinnerCard";
import { trophy } from "../constants/constants";
import ScrollTrigger from "gsap/ScrollTrigger";

const PlayerTropy = () => {
  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
  }, [trophy]);
  return (
    <main className="w-full md:h-screen md:w-[80%] md:ml-[20%] mt-20 md:bg-gradient-to-t from-purple-800/30 to-pink-800/20 ring ring-slate-400">
      <div className="ring ring-pink-100/30 md:absolute md:w-[75%] right-8 top-[18%] rounded-lg shadow-2xl shadow-pink-500/20">
        <section className="py-5">
          <h1 className="text-center">Battle Ground Mobile India</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-14 md:mt-4 gap-12 w-[80%]">
            {trophy[0]?.bgmi.map((trop) => (
              <WinnerCard
                key={`bgmi-${trop.id}`}
                imageSrc={trop.imgSrc}
                width="w-[100px]"
                height="h-[100px]"
                imgWidth="w-[200px]"
                imgHeight="h-[150px]"
                altText="Winner"
                captionText={trop.title}
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                color="bg-blue-500"
                enableScrollTrigger={false}
              />
            ))}
          </div>
        </section>

        <section className="py-5">
          <h1 className="text-center">Fortnite Battle Royal</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-14 md:mt-4 gap-12 w-[80%]">
            {trophy[0]?.fortnite.map((trop) => (
              <WinnerCard
                key={`fortnite-${trop.id}`}
                imageSrc={trop.imgSrc}
                width="w-[100px]"
                height="h-[100px]"
                imgWidth="w-[200px]"
                imgHeight="h-[150px]"
                altText="Winner"
                captionText={trop.title}
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                color="bg-blue-500"
                enableScrollTrigger={false}
              />
            ))}
          </div>
        </section>
        <section className="py-5">
          <h1 className="text-center">Apex Legends</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-14 md:mt-4 gap-12 w-[80%]">
            {trophy[0]?.apex.map((apx) => (
              <WinnerCard
                key={`apex-${apx.id}`}
                imageSrc={apx.imgSrc}
                width="w-[100px]"
                height="h-[100px]"
                imgWidth="w-[200px]"
                imgHeight="h-[150px]"
                altText="Winner"
                captionText={apx.title}
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                color="bg-blue-500"
                enableScrollTrigger={false}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PlayerTropy;
