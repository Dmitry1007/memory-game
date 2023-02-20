import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

const CARDS = [
  { id: 1, color: "bg-red-400", isFlipped: false, disabled: false },
  { id: 2, color: "bg-pink-300", isFlipped: false, disabled: false },
  { id: 3, color: "bg-purple-300", isFlipped: false, disabled: false },
  { id: 4, color: "bg-red-400", isFlipped: false, disabled: false },
  { id: 5, color: "bg-pink-300", isFlipped: false, disabled: false },
  { id: 6, color: "bg-purple-300", isFlipped: false, disabled: false },
];

function App() {
  const [cards, setCards] = useState(CARDS);
  const [flips, setFlips] = useState(0);
  const [matches, setMatches] = useState(0);
  const [flippedCard, setFlippedCard] = useState({
    color: "",
    isFlipped: false,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  const handleModalButtonClick = () => {
    if (gameCompleted) {
      console.log("Start Another Game");
    } else {
      console.log("Starting Game");
      setGameStarted(true);
      setModalOpen(false);
    }
  };

  useEffect(() => {
    console.log("useEffect Called");
    if (matches === 3) {
      setGameCompleted(true);
    }
  }, [matches, gameCompleted]);

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
        title: "Congratulations! You've completed the game!",
        text: "Start by pushing on any square to reveal its color. Continue to search for its match. Complete the game by finiding all the matches. The less flips to completion, the higher your score.",
      }
    : {
        title: "Welcome to Memory Game!",
        text: "Want to challenge yourself further? Choose a higher difficulty to increase the number of colors to match.",
      };

  console.log("flips: ", flips);
  console.log("matches: ", matches);
  console.log("Game Completed? inside component ", gameCompleted);

  return (
    <>
      <Modal
        title={modalData.title}
        text={modalData.text}
        open={modalOpen}
        setOpen={handleModalButtonClick}
      />
      <Cards cards={cards} onCardClick={handleCardClick} />
    </>
  );
}

export default App;
