import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack="1"
      flipSpeedBackToFront="1"
      containerClassName="hover:cursor-pointer"
    >
      <div
        className="aspect-square min-h-0 min-w-0 rounded-xl bg-slate-200 shadow-xl"
        onClick={handleClick}
      >
        FRONT
      </div>

      <div
        className="aspect-square min-h-0 min-w-0 rounded-xl bg-blue-300 shadow-xl"
        onClick={handleClick}
      >
        BACK
      </div>
    </ReactCardFlip>
  );
}

export default Card;
