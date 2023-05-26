export function LeaderboardItemTop(props) {
  return (
    <div className={`flex flex-col justify-center ${props.className}`}>
      <div className="">
        <div
          className={`w-12 h-12 p-2 mx-auto rounded-full scale-100 ${props.gradient}`}
        >
          <div className="flex justify-center text-white text-xl">
            {props.no}
          </div>
        </div>
      </div>
      <img
        src={`${props.icon}`}
        className={`-mt-8 flex w-32 h-32 bg-slate-10 rounded-full border-4 ${props.color}`}
      ></img>
      <div className="-mt-8">
        <div
          className={`w-12 h-12 px-10 mx-auto rounded-full scale-75 ${props.gradient}`}
        >
          <div className="flex justify-center text-white text-xl">
            <span className="mt-2">{props.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
