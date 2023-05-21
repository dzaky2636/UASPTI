import { Navbar } from "../component/Navbar";

export function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="mx-2">
        <div className="flex gap-2 text-white">
          <div className="w-full lg:w-1/3 bg-cyan-600 rounded-lg mt-[5.5rem] p-20">
            <h1 className="text-8xl font-bold fUnbounded">Ranking</h1>
          </div>
          <div className="w-full lg:w-4/6 bg-cyan-600 rounded-lg mt-[5.5rem] p-20">
            <h1 className="text-4xl font-bold fUnbounded">Lorem ipsum</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
