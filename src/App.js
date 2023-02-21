import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

const Levels = {
  1: [
    { id: 1, color: "bg-red-300", isFlipped: false, disabled: false },
    { id: 2, color: "bg-pink-300", isFlipped: false, disabled: false },
    { id: 3, color: "bg-green-300", isFlipped: false, disabled: false },
    { id: 4, color: "bg-blue-300", isFlipped: false, disabled: false },
    { id: 5, color: "bg-purple-300", isFlipped: false, disabled: false },
    { id: 6, color: "bg-orange-300", isFlipped: false, disabled: false },
    { id: 7, color: "bg-lime-300", isFlipped: false, disabled: false },
    { id: 8, color: "bg-cyan-300", isFlipped: false, disabled: false },
    { id: 9, color: "bg-amber-300", isFlipped: false, disabled: false },
    { id: 10, color: "bg-red-300", isFlipped: false, disabled: false },
    { id: 11, color: "bg-pink-300", isFlipped: false, disabled: false },
    { id: 12, color: "bg-green-300", isFlipped: false, disabled: false },
    { id: 13, color: "bg-blue-300", isFlipped: false, disabled: false },
    { id: 14, color: "bg-purple-300", isFlipped: false, disabled: false },
    { id: 15, color: "bg-orange-300", isFlipped: false, disabled: false },
    { id: 16, color: "bg-lime-300", isFlipped: false, disabled: false },
    { id: 17, color: "bg-cyan-300", isFlipped: false, disabled: false },
    { id: 18, color: "bg-amber-300", isFlipped: false, disabled: false },
  ],
  2: [
    { id: 1, color: "bg-red-300", isFlipped: false, disabled: false },
    { id: 2, color: "bg-pink-300", isFlipped: false, disabled: false },
    { id: 3, color: "bg-green-300", isFlipped: false, disabled: false },
    { id: 4, color: "bg-blue-300", isFlipped: false, disabled: false },
    { id: 5, color: "bg-purple-300", isFlipped: false, disabled: false },
    { id: 6, color: "bg-orange-300", isFlipped: false, disabled: false },
    { id: 7, color: "bg-lime-300", isFlipped: false, disabled: false },
    { id: 8, color: "bg-cyan-300", isFlipped: false, disabled: false },
    { id: 9, color: "bg-amber-300", isFlipped: false, disabled: false },
    { id: 10, color: "bg-yellow-300", isFlipped: false, disabled: false },
    { id: 11, color: "bg-emerald-300", isFlipped: false, disabled: false },
    { id: 12, color: "bg-teal-300", isFlipped: false, disabled: false },
    { id: 13, color: "bg-red-300", isFlipped: false, disabled: false },
    { id: 14, color: "bg-pink-300", isFlipped: false, disabled: false },
    { id: 15, color: "bg-green-300", isFlipped: false, disabled: false },
    { id: 16, color: "bg-blue-300", isFlipped: false, disabled: false },
    { id: 17, color: "bg-purple-300", isFlipped: false, disabled: false },
    { id: 18, color: "bg-orange-300", isFlipped: false, disabled: false },
    { id: 19, color: "bg-lime-300", isFlipped: false, disabled: false },
    { id: 20, color: "bg-cyan-300", isFlipped: false, disabled: false },
    { id: 21, color: "bg-amber-300", isFlipped: false, disabled: false },
    { id: 22, color: "bg-yellow-300", isFlipped: false, disabled: false },
    { id: 23, color: "bg-emerald-300", isFlipped: false, disabled: false },
    { id: 24, color: "bg-teal-300", isFlipped: false, disabled: false },
  ],
};

function App() {
  const [cards, setCards] = useState(Levels[1]);
  const [level, setLevel] = useState();

  const [flips, setFlips] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [flippedCard, setFlippedCard] = useState({
    color: "",
    isFlipped: false,
  });

  useEffect(() => {
    if (matches === cards.length / 2 && cards.length !== 0) {
      setModalOpen(true);
      setGameCompleted(true);
    }
  }, [matches, cards.length]);

  const handleLevelChosen = (level) => {
    if (gameCompleted) {
      console.log("Start Another Game");
      setModalOpen(false);
      setLevel(level);
      resetGame(level);
    } else {
      setModalOpen(false);
      setLevel(level);
      setCards(Levels[level]);
    }
  };

  const resetGame = (level) => {
    setCards(Levels[level]);
    setFlips(0);
    setMatches(0);
    setGameCompleted(false);
    setFlippedCard({
      color: "",
      isFlipped: false,
    });
  };

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
      // Track matches
      setMatches(matches + 1);
      // disable both cards
      disableCard(clickedCard);
    }
  };

  const disableCard = (clickedCard) => {
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

  const modalData = gameCompleted
    ? {
        title: `Congratulations! You've completed the game with ${flips} flips`,
        text: "Want to challenge yourself further? Try completing the game with less flips or choose a higher difficulty to increase the number of colors to match.",
      }
    : {
        title: "Welcome to Memory Game!",
        text: "Start by pushing on any square to reveal its color. Continue to search for its match. Complete the game by finiding all the matches. The less flips to completion, the higher your score.",
      };

  const gridColumns = level === 2 ? "grid-cols-4" : "grid-cols-3";

  console.log("Flips: ", flips);
  console.log("Matches: ", matches);
  console.log("Level: ", level);
  console.log("Game Completed? ", gameCompleted);
  console.log("--------------------------------------------------");

  return (
    <div className="h-screen w-screen">
      <Modal
        title={modalData.title}
        text={modalData.text}
        open={modalOpen}
        setOpen={handleLevelChosen}
      />
      <div className={`mr-10 ml-10 mt-4 mb-2 grid ${gridColumns} gap-2`}>
        <Cards cards={cards} onCardClick={handleCardClick} />
      </div>
      <div className="ml-10 flex flex-row">
        <div className="basis-1/4 text-lg font-bold italic text-slate-500">
          Flips: {flips}
        </div>
      </div>
    </div>
  );
}

export default App;
