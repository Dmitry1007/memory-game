import Card from "./Card";

function Cards({ cards, onCardClick }) {
  const renderedCards = cards.map((card) => {
    return <Card key={card.id} card={card} onCardClick={onCardClick} />;
  });

  return renderedCards;
}

export default Cards;
