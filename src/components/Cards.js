import Card from "./Card";

const cards = [
  "bg-red-400",
  "bg-pink-300",
  "bg-purple-300",
  "bg-indigo-300",
  "bg-blue-400",
  "bg-cyan-300",
  "bg-teal-300",
  "bg-green-300",
  "bg-lime-300",
  "bg-yellow-200",
  "bg-amber-400",
  "bg-orange-300",
  "bg-violet-500",
  "bg-gray-400",
  "bg-sky-600",
  "bg-black",
  "bg-red-400",
  "bg-pink-300",
  "bg-purple-300",
  "bg-indigo-300",
  "bg-blue-400",
  "bg-cyan-300",
  "bg-teal-300",
  "bg-green-300",
  "bg-lime-300",
  "bg-yellow-200",
  "bg-amber-400",
  "bg-orange-300",
  "bg-violet-500",
  "bg-gray-400",
  "bg-sky-600",
  "bg-black",
];

function Cards() {
  const renderedCards = cards.map((color, index) => {
    return <Card key={index} color={color} />;
  });

  return (
    <div className="bg- h-screen w-screen">
      <div className="grid grid-cols-4 gap-2 p-2">{renderedCards}</div>
    </div>
  );
}

export default Cards;
