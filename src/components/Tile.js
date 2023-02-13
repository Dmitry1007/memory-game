function Tile() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="shadox-xl h-full w-full rounded-xl object-cover shadow-black/40"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-red-700 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            Hey, I'm the back of the card
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
