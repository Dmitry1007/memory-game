function Tiles() {
  const renderedTiles = () => {
    const tiles = Array.from({ length: 32 }, (_, i) => (
      <div key={i} className="aspect-square min-h-0 min-w-0 bg-pink-300"></div>
    ));
    return tiles;
  };

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-4 gap-2 p-2">{renderedTiles()}</div>
    </div>
  );
}

export default Tiles;
