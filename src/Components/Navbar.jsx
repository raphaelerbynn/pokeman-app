import { useContext, useState } from "react"
import { DataContext, UiContext } from "../Context"
import { SearchIcon } from "../assets/icons"
import { homePokemanImg } from "../assets/images"
import ThemeModal from "./Modals/ThemeModal"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const { themeColor } = useContext(UiContext)
    const { handleSearch, setSearchedPokemon } = useContext(DataContext)
    const [openTheme, setOpenTHeme] = useState(false)
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("")


    const handleOnSearch = async () => {
        if(searchText) {
            await handleSearch(searchText)
        } else {
            setSearchedPokemon([])
        }
    }

    const handleOnChange = (e) => {
        const val = e.target.value;
        setSearchText(val.toLowerCase());
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleOnSearch();
        }
    }

    return (
        <>
        <ThemeModal isOpen={openTheme} onClose={() => setOpenTHeme(false)} />
        <div className="flex items-center justify-between w-screen shadow-2xl px-10 py-4 z-[4] sticky top-0 backdrop-blur-lg">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/home")}>
                <div className="relative min-w-[100px] min-h-[25px]">
                    <img src={homePokemanImg} alt="logo" className="absolute" />
                </div>
                <span className="font-[ClashDisplay-Bold] text-[24px]">Poke<span style={{
                    color: themeColor
                }}>book</span></span>
            </div>
            <div className="flex items-center gap-4 border rounded-full px-5 py-3 min-w-[400px] shadow-md">
                <SearchIcon color="#DFDFDF" size="17" />
                <input type="text" className="" placeholder="Enter pokeman name" onChange={handleOnChange} onKeyDown={handleKeyDown} />
            </div>
            <div>
                <div className="border border-black p-1 w-11 h-11 rounded-full cursor-pointer" onClick={() => setOpenTHeme(true)}>
                    <div className="rounded-full w-full h-full" style={{
                        background: themeColor
                    }}></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar

