import { Navbar } from "../component/Navbar"
import { PlayHero } from "../component/PlayHero"
import { PlayModeSelect } from "../component/PlayModeSelect"

const play = {
    timer: 15,
    poin: 0
}

export function PlayQuiz(){
    return(
        <div className="bg-white">
            <Navbar />
            <PlayHero />
            <PlayModeSelect />
        </div>
    )
}