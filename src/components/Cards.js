import { useState } from "react";
import Card from "./Card";

const CARDS = [
  { id: 1, color: "bg-red-400", isFlipped: false, disabled: false },
  { id: 2, color: "bg-pink-300", isFlipped: false, disabled: false },
  { id: 3, color: "bg-purple-300", isFlipped: false, disabled: false },
  { id: 4, color: "bg-indigo-300", isFlipped: false, disabled: false },
  { id: 5, color: "bg-blue-400", isFlipped: false, disabled: false },
  { id: 6, color: "bg-cyan-300", isFlipped: false, disabled: false },
  { id: 7, color: "bg-red-400", isFlipped: false, disabled: false },
  { id: 8, color: "bg-pink-300", isFlipped: false, disabled: false },
  { id: 9, color: "bg-purple-300", isFlipped: false, disabled: false },
  { id: 10, color: "bg-indigo-300", isFlipped: false, disabled: false },
  { id: 11, color: "bg-blue-400", isFlipped: false, disabled: false },
  { id: 12, color: "bg-cyan-300", isFlipped: false, disabled: false },
];

function Cards() {
  const [cards, setCards] = useState(CARDS);
  const [flips, setFlips] = useState(0);
  const [flippedCard, setFlippedCard] = useState({
    color: "",
    isFlipped: false,
  });

  const handleCardClick = async (clickedCard) => {
    setFlips(flips + 1);
    if (flippedCard.color === "") {
      // flip the first card over
      console.log("First Flip Card");
      flipCard(clickedCard);
    } else if (flippedCard.color !== clickedCard.color) {
      // flip the second card over
      flipCard(clickedCard);
      console.log("No Match");
      // wait 1 second and then unflip both cards
      unFlipCards();
    } else if (flippedCard.color === clickedCard.color) {
      console.log("Match");
      flipCard(clickedCard);
      // disable both cards
      disableCards(clickedCard);
    }
  };

  const disableCards = (clickedCard) => {
    const updatedCards = cards.map((card) => {
      if (card.isFlipped || card === clickedCard) {
        return { ...card, isFlipped: true, disabled: true };
      } else {
        return card;
      }
    });
    setFlippedCard({ color: "", isFlipped: false });
    setCards(updatedCards);
  };

  const flipCard = (clickedCard) => {
    const updatedCards = cards.map((card) => {
      if (card === clickedCard) {
        return { ...card, isFlipped: true };
      } else {
        return card;
      }
    });
    setCards(updatedCards);
    setFlippedCard({ ...clickedCard, isFlipped: true });
  };

  const unFlipCards = () => {
    setTimeout(() => {
      const unFlippedCards = cards.map((card) => {
        if (card.isFlipped && !card.disabled) {
          return { ...card, isFlipped: false };
        } else {
          return card;
        }
      });
      setCards(unFlippedCards);
      setFlippedCard({ color: "", isFlipped: false });
    }, 1000);
  };

  const renderedCards = cards.map((card) => {
    return <Card key={card.id} card={card} onCardClick={handleCardClick} />;
  });
  console.log("flips: ", flips);
  return (
    <div className="bg- h-screen w-screen">
      <div className="grid grid-cols-3 gap-2 p-2">{renderedCards}</div>
    </div>
  );
}

export default Cards;
