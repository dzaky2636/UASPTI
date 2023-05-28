import clippaper from "../assets/clippaper.png";

export function ClipPaperTitle(props) {
  return (
    <div className="relative py-10 scale-90 lg:scale-100 transition ease-in-out rotate-[4deg] hover:rotate-0 pointer-events-none">
      <div className="flex justify-center">
        <img
          src={clippaper}
          className="h-[45vw] md:h-[25vw] pointer-events-auto"
        ></img>
      </div>
      <h1 className="absolute text-[7vw] md:text-[6vh] overlay-text text-black">
        {props.title}
      </h1>
    </div>
  );
}
