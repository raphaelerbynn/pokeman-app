import { useContext } from "react";
import { homePokemanImg } from "../assets/images"
import { UiContext } from "../Context";
import { SearchIcon } from "../assets/icons";

const Home = () => {
    const { themeColor } = useContext(UiContext);

    return (
        <>
            <div className="w-full h-screen">
                <div className="flex flex-col justify-center gap-16 items-center w-full h-full">
                    <div className="flex flex-col items-center">
                        <div>
                            <img src={homePokemanImg} alt="pokemna" />
                        </div>
                        <div>
                            <span className="text-[48px]">Poké</span>
                            <span className="text-[48px]" style={{
                                color: themeColor
                            }}> book</span>
                        </div>
                        <p className="font-sans text-[18px]">Largest Pokémon index with information <br />about every Pokemon you can think of. </p>
                    </div>

                    {/* search bar */}
                    <div className="min-w-[30%] flex items-center justify-between p-2 pl-4  border-8 rounded-full" style={{
                        borderColor: themeColor
                    }}>
                        <input className="text-[24px]" type="text" placeholder="Enter pokeman name" />
                        <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{
                            background: themeColor
                        }}>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home