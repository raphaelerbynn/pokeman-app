import { useContext, useState } from "react";
import { homePokemanImg } from "../assets/images"
import { DataContext, UiContext } from "../Context";
import { SearchIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom"


const Home = () => {
    const { themeColor } = useContext(UiContext);
    const { handleSearch, setSearchedPokemon } = useContext(DataContext);
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("")

    const handleOnSearch = async () => {
        if(searchText) {
            await handleSearch(searchText)
            navigate("/list-view")
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
            <div className="w-full h-screen">
                <div className="flex flex-col justify-center gap-14 items-center w-full h-full">
                    <div className="flex flex-col items-center">
                        <div>
                            <img src={homePokemanImg} alt="pokemna" />
                        </div>
                        <div className="text-[44px] font-semibold font-[ClashDisplay-Semibold]">
                            <span className="">Poké</span>
                            <span className="" style={{
                                color: themeColor
                            }}> book</span>
                        </div>
                        <p className="font-sans text-[16px]">Largest Pokémon index with information <br />about every Pokemon you can think of. </p>
                    </div>

                    
                    <div className="min-w-[30%] flex flex-col gap-4">
                        {/* search bar */}
                        <div className="flex items-center justify-between p-2 pl-4  border-[7px] rounded-full" style={{
                            borderColor: themeColor
                        }}>
                            <input className="text-[20px]" type="text" placeholder="Enter pokeman name" onChange={handleOnChange} onKeyDown={handleKeyDown} />
                            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{
                                background: themeColor
                            }}
                            onClick={handleOnSearch}>
                                <SearchIcon />
                            </button>
                        </div>
                        <button className="underline text-lg font-medium" onClick={() => {
                            setSearchedPokemon([])
                            navigate("/list-view")
                        }}>View all</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home