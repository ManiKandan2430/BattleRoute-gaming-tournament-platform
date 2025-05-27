import WinnerCard from "../components/ui/WinnerCard";
import { winners } from "../constants/constants";
import { BiBuildings } from "react-icons/bi";

const Winners = () => {
  return (
    <div id="winners" className="md:h-screen flex flex-col items-center justify-center overflow-hidden md:w-full">
      <h1 className="md:text-4xl text-xl mb-8 flex gap-4">Tournament Winners <span><BiBuildings/></span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {winners.map((win) => (
          <WinnerCard
            teamId={win.id}
            imageSrc={win.image}
            altText={win.caption}
            captionText={win.caption}
            // containerHeight="300px"
            // containerWidth="300px"
            // imageHeight="300px"
            // imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            color={win.bg}
            overlayContent={win.overlay}
            win={win}
          />
        ))}
      </div>
    </div>
  );
};
export default Winners;
