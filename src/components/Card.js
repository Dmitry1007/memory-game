import ReactCardFlip from "react-card-flip";

function Card({ card, onCardClick }) {
  const handleClick = (card) => {
    if (!card.disabled) {
      onCardClick(card);
    }
  };

  return (
    <ReactCardFlip
      isFlipped={card.isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack="0.5"
      flipSpeedBackToFront="0.5"
      containerClassName="hover:cursor-pointer"
    >
      <div
        className="aspect-square rounded-xl bg-slate-300 shadow-xl"
        onClick={() => handleClick(card)}
      ></div>
      <div
        className={`aspect-square rounded-xl ${card.color} shadow-xl`}
        onClick={() => handleClick(card)}
      ></div>
    </ReactCardFlip>
  );
}

export default Card;
