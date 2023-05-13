import { Hero } from "../component/Hero"
import { Navbar } from "../component/Navbar"

export function Home(){
    return(
        <div className="bg-white">
            <Navbar />
            <Hero />
        </div>
    )
}