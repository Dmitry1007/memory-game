import Cards from "./components/Cards";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal
        title={"Welcome to Memory Game!"}
        text={
          "Start by pushing on any square to reveal its color. Continue to search for its match. Complete the game by finiding all the matches. The less flips to completion, the higher your score."
        }
      />
      <Cards />
    </>
  );
}

export default App;
