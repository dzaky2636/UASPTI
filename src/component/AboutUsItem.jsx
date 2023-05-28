export function AboutUsItem(props) {
  return (
    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div class="flex flex-col">
        <a href="#" class="mx-auto">
          <img
            class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={props.foto}
          ></img>
        </a>

        <div class="text-center mt-6">
          <h1 class="text-black text-3xl lg:text-xl font-bold mb-1 min-h-[60px]">
            {props.nama}
          </h1>
          <div class="text-black font-normal mb-2 text-xl lg:text-md">
            ({props.nim})
          </div>
          <div className="flex justify-center">
            <div
              class="flex items-center justify-center opacity-85 hover:opacity-100
                                transition-opacity duration-300 bg-white rounded-full w-[60%]"
            >
              <a
                href={`${props.github}`}
                class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
              >
                <i class="mdi mdi-github text-indigo-500 mx-auto mt-2"></i>
              </a>

              <a
                href={`${props.discord}`}
                class="flex rounded-full bg-white h-10 w-10"
              >
                <i class="mdi mdi-discord text-[#0f1ba1] m-auto pl-[1px]"></i>
              </a>

              <a
                href={`${props.instagram}`}
                class="flex rounded-full bg-white h-10 w-10"
              >
                <i class="mdi mdi-instagram text-[#fd6caa] m-auto pl-[1px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
