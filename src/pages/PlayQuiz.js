import { Navbar } from "../component/Navbar"
import { HeroPlay } from "../component/HeroPlay"
import { SelectPlayMode } from "../component/SelectPlayMode"

const play = {
    timer: 15,
    poin: 0
}

export function PlayQuiz(){
    return(
        <div className="bg-white">
            <Navbar />
            <HeroPlay />
            <SelectPlayMode />
        </div>
    )
}