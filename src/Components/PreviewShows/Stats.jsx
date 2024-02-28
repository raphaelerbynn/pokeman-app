import { useContext } from "react";
import { DataContext, UiContext } from "../../Context";

const Stats = () => {
    const { themeColor } = useContext(UiContext)
    const { selectedPokemon } = useContext(DataContext)

    console.log(selectedPokemon?.stats?.find(val => val?.stat?.name === "hp")?.base_stat)
    
    return (
        <>
        <div className="py-2 font-[ClashDisplay-Semibold] text-[20px] border-y text-center" style={{
            boxShadow: "0px 0px 20px -19px #000000",
            borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
        }}>
            Stats
        </div>
        <div className="flex flex-col justify-center w-full overflow-auto " style={{
            background: "linear-gradient(270deg, #FFFFFF 0%, rgba(217, 217, 217, 0.06) 51.04%, #FFFFFF 100%)",
        }}>
            <div className="flex flex-col divide-y divide-black/[.05] py-1 w-full overflow-auto">
                <div className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">HP</span>
                    <div className="flex-1 flex items-center gap-3 font-[ClashDisplay-Semibold]">
                        <div className="flex-1 relative h-2 bg-[#CBCBCB]">
                            <div className="h-full" style={{
                                width: `${selectedPokemon?.stats?.find(val => val?.stat?.name === "hp")?.base_stat}%`,
                                background: themeColor
                            }}></div>
                        </div>
                        <span>{selectedPokemon?.stats?.find(val => val?.stat?.name === "hp")?.base_stat}</span>
                    </div>
                </div>
                <div className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Attack</span>
                    <div className="flex-1 flex items-center gap-3 font-[ClashDisplay-Semibold]">
                        <div className="flex-1 relative h-2 bg-[#CBCBCB]">
                            <div className="h-full" style={{
                                width: `${selectedPokemon?.stats?.find(val => val?.stat?.name === "attack")?.base_stat}%`,
                                background: themeColor
                            }}></div>
                        </div>
                        <span>{selectedPokemon?.stats?.find(val => val?.stat?.name === "attack")?.base_stat}</span>
                    </div>
                </div>
                <div className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Defense</span>
                    <div className="flex-1 flex items-center gap-3 font-[ClashDisplay-Semibold]">
                        <div className="flex-1 relative h-2 bg-[#CBCBCB]">
                            <div className="h-full" style={{
                                width: `${selectedPokemon?.stats?.find(val => val?.stat?.name === "defense")?.base_stat}%`,
                                background: themeColor
                            }}></div>
                        </div>
                        <span>{selectedPokemon?.stats?.find(val => val?.stat?.name === "defense")?.base_stat}</span>
                    </div>
                </div>
                <div className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Special Attack</span>
                    <div className="flex-1 flex items-center gap-3 font-[ClashDisplay-Semibold]">
                        <div className="flex-1 relative h-2 bg-[#CBCBCB]">
                            <div className="h-full" style={{
                                width: `${selectedPokemon?.stats?.find(val => val?.stat?.name === "special-attack")?.base_stat}%`,
                                background: themeColor
                            }}></div>
                        </div>
                        <span>{selectedPokemon?.stats?.find(val => val?.stat?.name === "special-attack")?.base_stat}</span>
                    </div>
                </div>
                <div className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Special Defense</span>
                    <div className="flex-1 flex items-center gap-3 font-[ClashDisplay-Semibold]">
                        <div className="flex-1 relative h-2 bg-[#CBCBCB]">
                            <div className="h-full" style={{
                                width: `${selectedPokemon?.stats?.find(val => val?.stat?.name === "special-defense")?.base_stat}%`,
                                background: themeColor
                            }}></div>
                        </div>
                        <span>{selectedPokemon?.stats?.find(val => val?.stat?.name === "special-defense")?.base_stat}</span>
                    </div>
                </div>
                <div className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Speed</span>
                    <div className="flex-1 flex items-center gap-3 font-[ClashDisplay-Semibold]">
                        <div className="flex-1 relative h-2 bg-[#CBCBCB]">
                            <div className="h-full" style={{
                                width: `${selectedPokemon?.stats?.find(val => val?.stat?.name === "speed")?.base_stat}%`,
                                background: themeColor
                            }}></div>
                        </div>
                        <span>{selectedPokemon?.stats?.find(val => val?.stat?.name === "speed")?.base_stat}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Stats;