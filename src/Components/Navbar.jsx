import { useContext } from "react"
import { UiContext } from "../Context"
import { SearchIcon } from "../assets/icons"
import { homePokemanImg } from "../assets/images"

const Navbar = () => {
    const { themeColor } = useContext(UiContext)
    return (
        <div className="flex items-center justify-between w-screen shadow-2xl px-10 py-4">
            <div className="flex items-center gap-2">
                <div className="relative min-w-[100px] min-h-[25px]">
                    <img src={homePokemanImg} alt="logo" className="absolute" />
                </div>
                <span className="font-[ClashDisplay-Bold] text-[24px]">Poke<span style={{
                    color: themeColor
                }}>book</span></span>
            </div>
            <div className="flex items-center gap-4 border rounded-full px-5 py-3 min-w-[400px] shadow-md">
                <SearchIcon color="#DFDFDF" size="17" />
                <input type="text" className="" placeholder="Enter pokeman name" />
            </div>
            <div>
                <div className="border border-black p-1 w-11 h-11 rounded-full">
                    <div className="rounded-full w-full h-full" style={{
                        background: themeColor
                    }}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar