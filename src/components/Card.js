import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card({ color, clickedColor }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (color) => {
    setIsFlipped(!isFlipped);
    clickedColor(color);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack="0.7"
      flipSpeedBackToFront="0.7"
      containerClassName="hover:cursor-pointer"
    >
      <div
        className="aspect-square min-h-0 min-w-0 rounded-xl bg-slate-200 shadow-xl"
        onClick={() => handleClick(color)}
      >
        FRONT
      </div>
      <div
        className={`aspect-square min-h-0 min-w-0 rounded-xl ${color} shadow-xl`}
        onClick={() => handleClick(color)}
      >
        BACK
      </div>
    </ReactCardFlip>
  );
}

export default Card;
