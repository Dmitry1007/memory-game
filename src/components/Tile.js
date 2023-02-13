function Tile() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="group h-96 w-96 [perspective:1000px] hover:cursor-pointer">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <div className="shadox-xl h-full w-full rounded-xl bg-slate-200 object-cover shadow-black/40">
              Front
            </div>
          </div>
          <div className="absolute h-full w-full rounded-xl bg-red-700 px-12 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
