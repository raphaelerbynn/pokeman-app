import { useState } from "react";
import { ArrowWithTailIcon } from "../../assets/icons";
import { sampleImg } from "../../assets/images";
import ModalWrapper from "./ModalWrapper"
import About from "../PreviewShows/About";
import Stats from "../PreviewShows/Stats";

// eslint-disable-next-line react/prop-types
const PreviewModal = ({ isOpen, onClose }) => {
    const [detailView, setDetailView] = useState("About");

    return (
        <ModalWrapper isOpen={isOpen}>
            <div className="flex justify-end h-full w-full overflow-auto">
                <div className="flex flex-col gap-4 justify-between p-3 w-[45%] bg-white overflow-auto">
                    <div className="h-[25vh] w-full rounded-[18px] relative "
                    style={{
                        boxShadow: "inset 0 5px 10px rgba(0, 0, 0, 0.1)"
                    }}>
                        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-lg absolute top-2 left-2" onClick={onClose}>
                            <img src={ArrowWithTailIcon} alt="" width={20} />
                        </button>
                        <img src={sampleImg} alt="pokemon" className=" absolute -bottom-8 left-1/2 -translate-x-1/2 h-full" />
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-5 overflow-auto">
                        <div className="flex flex-col items-center">
                            <p className="font-[ClashDisplay-Semibold] text-[40px]">Ivysaur</p>
                            <div className="flex items-center gap-2">
                                <div className=" rounded-full py-1 px-4 bg-[#EEEEEE] ">
                                    Fire
                                </div>
                                <div className=" rounded-full py-1 px-4 bg-[#EEEEEE] ">
                                    Fire
                                </div>
                            </div>
                        </div>

                        <div className="h-full flex flex-col w-full px-10 overflow-auto">
                            {
                                detailView === "About" ? <About /> : detailView === "Stat" ? <Stats /> : <></>
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
