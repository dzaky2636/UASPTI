import { PlayModeCard } from "./PlayModeCard";

export function PlayModeSelect() {
    return (
        <div className="isolate px-6 pt-14 lg:px-8">
            <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                
                {/* <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900">Mode</h2>
                <p className="mb-4 text-l font-medium"><span className="font-extrabold text-sky-400">Classic</span> Penjelasan mode</p>
                <p className="mb-4 text-l font-medium"><span className="font-extrabold text-red-400">Endless</span> Penjelasan mode</p>

                <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900">Kategori</h2>
                <p className="mb-4 text-l font-medium"><span className="font-extrabold">Nama Kategori</span> Penjelasan Kategori</p>
                <p className="mb-4 text-l font-medium"><span className="font-extrabold">Nama Kategori</span> Penjelasan Kategori</p>
                <p className="mb-4 text-l font-medium"><span className="font-extrabold">Nama Kategori</span> Penjelasan Kategori</p> */}
                
                {/* <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800">
                    Main!
                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a> */}

                <h2 className="mb-7 font-extrabold tracking-tight leading-none text-rose-400 text-3xl md:text-5xl text-left md:text-center">Konfigurasi Kuis</h2>
                <div className="grid grid-rows-3 grid-cols-4 gap-4">
                    <PlayModeCard/>
                    <PlayModeCard/>
                    <PlayModeCard/>
                    <PlayModeCard/>
                </div>
            </div>            
        </div>

        
    );
  }
  