import { useContext } from "react";
import { homePokemanImg } from "../assets/images"
import { UiContext } from "../Context";
import { SearchIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const { themeColor } = useContext(UiContext);
    const navigate = useNavigate()

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
                            <input className="text-[20px]" type="text" placeholder="Enter pokeman name" />
                            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{
                                background: themeColor
                            }}>
                                <SearchIcon />
                            </button>
                        </div>
                        <button className="underline text-lg font-medium" onClick={() => navigate("/list-view")}>View all</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home