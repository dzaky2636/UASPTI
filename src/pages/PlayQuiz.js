import { Navbar } from "../component/Navbar";

export function PlayQuiz() {
  return (
    <div>
      <Navbar />
      <div className="mx-2 text-white">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/4 bg-cyan-600 rounded-lg mt-[5.5rem] p-20">
            <h1 className="text-8xl font-bold">Let's Play!</h1>
          </div>
          <div className="w-full lg:w-3/4 bg-cyan-600 rounded-lg lg:mt-[5.5rem] p-20">
            <h1 className="text-4xl font-bold">Lorem ipsum</h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/3 bg-cyan-600 rounded-lg mt-2 p-20">
            <h1 className="text-8xl font-bold">Let's Play!</h1>
          </div>
          <div className="w-full lg:w-4/6 bg-cyan-600 rounded-lg lg:mt-2 p-20">
            <h1 className="text-4xl font-bold">Lorem ipsum</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
