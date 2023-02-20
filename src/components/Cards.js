import Card from "./Card";

function Cards({ cards, onCardClick }) {
  const renderedCards = cards.map((card) => {
    return <Card key={card.id} card={card} onCardClick={onCardClick} />;
  });

  return (
    <div className="bg- h-screen w-screen">
      <div className="grid grid-cols-3 gap-2 p-2">{renderedCards}</div>
    </div>
  );
}

export default Cards;
