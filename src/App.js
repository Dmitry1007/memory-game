import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

const CARDS = [
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
];

function App() {
  const [cards, setCards] = useState(CARDS);
  const [flips, setFlips] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [flippedCard, setFlippedCard] = useState({
    color: "",
    isFlipped: false,
  });

  useEffect(() => {
    if (matches === cards.length / 2) {
      setModalOpen(true);
      setGameCompleted(true);
    }
  }, [matches, cards.length]);

  const handleModalButtonClick = () => {
    if (gameCompleted) {
      console.log("Start Another Game");
      setModalOpen(false);
      resetGame();
    } else {
      console.log("Starting Game");
      setModalOpen(false);
    }
  };

  const resetGame = () => {
    setCards(CARDS);
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

  console.log("flips: ", flips);
  console.log("matches: ", matches);
  console.log("Game Completed? ", gameCompleted);
  console.log("--------------------------------------------------");

  return (
    <div className="h-screen w-screen">
      <Modal
        title={modalData.title}
        text={modalData.text}
        open={modalOpen}
        setOpen={handleModalButtonClick}
      />
      <div className="m-8 mb-5 grid grid-cols-3 gap-2">
        <Cards cards={cards} onCardClick={handleCardClick} />
      </div>
      <div className="flex flex-row pl-6">
        <div className="basis-1/4 text-lg font-bold italic text-purple-400">
          Flips: {flips}
        </div>
      </div>
    </div>
  );
}

export default App;
