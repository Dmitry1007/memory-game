import Card from "./Card";

function Cards() {
  const renderedCards = () => {
    const cards = Array.from({ length: 32 }, (_, i) => <Card key={i} />);
    return cards;
  };

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-4 gap-2 p-2">{renderedCards()}</div>
    </div>
  );
}

export default Cards;
