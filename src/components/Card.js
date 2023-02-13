import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedFrontToBack="1"
        flipSpeedBackToFront="1"
        containerClassName="hover:cursor-pointer"
      >
        <div
          className="h-96 w-96 rounded-xl bg-slate-200 shadow-xl"
          onClick={handleClick}
        >
          FRONT
        </div>

        <div
          className="h-96 w-96 rounded-xl bg-blue-300 shadow-xl"
          onClick={handleClick}
        >
          BACK
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;
