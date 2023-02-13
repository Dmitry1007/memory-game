function Tiles() {
  const renderedTiles = () => {
    const tiles = Array.from({ length: 32 }, (_, i) => (
      <div key={i} className="aspect-square min-h-0 min-w-0 bg-gray-500"></div>
    ));
    return tiles;
  };

  return <div className="grid grid-cols-4 gap-2 p-2">{renderedTiles()}</div>;
}

export default Tiles;
