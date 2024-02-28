import { useContext, useEffect, useState } from "react";
import { ArrowWithTailIcon } from "../../assets/icons";
import ModalWrapper from "./ModalWrapper"
import About from "../PreviewShows/About";
import Stats from "../PreviewShows/Stats";
import Similar from "../PreviewShows/Similar";
import { getDominantColor } from "../../utils/colorPicker";
import { DataContext } from "../../Context";

// eslint-disable-next-line react/prop-types
const PreviewModal = ({ isOpen, onClose }) => {
    const [detailView, setDetailView] = useState("About");
    const [rgb, setRgb] = useState([])
    const { selectedPokemon } = useContext(DataContext)

    useEffect(() => {
        getDominantColor(selectedPokemon?.sprites?.other?.dream_world?.front_default, setRgb)
    }, [selectedPokemon])

    return (
        <ModalWrapper isOpen={isOpen}>
            <div className="flex justify-end h-full w-full overflow-auto">
                <div className="flex flex-col gap-4 justify-between p-3 md:w-[60%] lg:w-[45%] bg-white overflow-auto">
                    <div className="h-[25vh] w-full rounded-[18px] relative "
                    style={{
                        boxShadow: "inset 0 5px 10px rgba(0, 0, 0, 0.1)",
                        background: `linear-gradient(0deg, rgb(${rgb?.map((v) => v - 30)}) 0%, rgb(${rgb?.map((v) => v + 30)}) 100%)`
                    }}>
                        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-lg absolute top-2 left-2" onClick={onClose}>
                            <img src={ArrowWithTailIcon} alt="" width={20} />
                        </button>
                        <img src={selectedPokemon?.sprites?.other?.dream_world?.front_default || ""} alt="pokemon" className=" absolute -bottom-8 left-1/2 -translate-x-1/2 h-full" />
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-5 overflow-auto">
                        <div className="flex flex-col items-center">
                            <p className="font-[ClashDisplay-Semibold] text-[40px]">{selectedPokemon?.name}</p>
                            <div className="flex items-center gap-2">
                            {selectedPokemon?.types?.map((_type, i) => 
                                <div className=" rounded-full py-1 px-4 bg-[#EEEEEE] " key={i}>
                                    {_type?.type?.name}
                                </div>
                            )}
                            </div>
                        </div>

                        <div className="h-full flex flex-col w-full px-10 overflow-auto">
                            {
                                detailView === "About" ? <About /> : detailView === "Stat" ? <Stats /> : <Similar />
                            }
                        </div>

                        

                    </div>
                    <div className="flex justify-center">
                        <div className="flex gap-1 rounded-full p-1 bg-[#E9E9E9] font-medium">
                            <button className={`px-10 py-3 hover:bg-[#FFFFFF]/40 rounded-full ${detailView === "About" && "bg-white"}`} onClick={() => setDetailView("About")}>About</button>
                            <button className={`px-10 py-3 hover:bg-[#FFFFFF]/40 rounded-full ${detailView === "Stat" && "bg-white"}`} onClick={() => setDetailView("Stat")}>Stats</button>
                            <button className={`px-10 py-3 hover:bg-[#FFFFFF]/40 rounded-full ${detailView === "Similar" && "bg-white"}`} onClick={() => setDetailView("Similar")}>Similar</button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
}


export default PreviewModal;
