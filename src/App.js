import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import SetupGame from "./helpers/SetupGame";

// import ReactGA from "react-ga";
// const MEASUREMENT_ID = "G-QZNTLK46XB";
// ReactGA.initialize(MEASUREMENT_ID);

function App() {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState(SetupGame(level));
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

  function handleLevelChosen(level) {
    if (gameCompleted) {
      console.log("Start Another Game");
      setModalOpen(false);
      setLevel(level);
      resetGame(level);
    } else {
      setModalOpen(false);
      setLevel(level);
      const newGame = SetupGame(level);
      setCards(newGame);
    }
  }

  const resetGame = (level) => {
    const newGame = SetupGame(level);
    setCards(newGame);
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

  const modalData = gameCompleted
    ? {
        title: `Congratulations! You've completed the game with ${flips} flips`,
        text: "Want to challenge yourself further? Try completing the game with less flips or choose a higher difficulty to increase the number of colors to match.",
      }
    : {
        title: "Welcome to Memory Game!",
        text: "Start by pushing on any square to reveal its color. Continue to search for its match. Complete the game by finiding all the matches. The less flips to completion, the higher your score!",
      };

  console.log("Flips: ", flips);
  console.log("Matches: ", matches);
  console.log("Level: ", level);
  console.log("Game Completed? ", gameCompleted);
  console.log("--------------------------------------------------");

  return (
    <div className="md:grid md:justify-items-center">
      <Modal
        title={modalData.title}
        text={modalData.text}
        open={modalOpen}
        setOpen={handleLevelChosen}
      />
      <div className="m-6 mb-2 grid grid-cols-4 gap-2 md:w-1/2 lg:w-5/12">
        <Cards cards={cards} onCardClick={handleCardClick} />
        <div className="basis-1/4 text-lg font-bold italic text-slate-500">
          Flips: {flips}
        </div>
      </div>
    </div>
  );
}

export default App;
