import { useContext } from "react";
import { DataContext } from "../../Context";

const About = () => {
    const { selectedPokemon } = useContext(DataContext)

    return (
        <>
        <div className="py-2 font-[ClashDisplay-Semibold] text-[20px] border-y text-center" style={{
            boxShadow: "0px 0px 20px -19px #000000",
            borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
        }}>
            About
        </div>
        <div className="flex justify-center w-full overflow-auto " style={{
            background: "linear-gradient(270deg, #FFFFFF 0%, rgba(217, 217, 217, 0.06) 51.04%, #FFFFFF 100%)",
        }}>
            <div className="flex flex-col divide-y divide-black/[.05] py-1 w-full overflow-auto">
                <p className=" py-2 flex items-center justify-center gap-8 text-lg" style={{
                    borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
                }}>
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Height</span>
                    <span className=" flex-1 font-[ClashDisplay-Semibold]">{selectedPokemon?.height}m</span>
                </p>
                <p className="py-2 flex items-center justify-center gap-8 text-lg w-full">
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Weight</span>
                    <span className=" flex-1 font-[ClashDisplay-Semibold]">{selectedPokemon?.weight}kg</span>
                </p>
                <div className="py-2 flex justify-center gap-8 text-lg w-full">
                    <span className=" flex-1 text-right font-[ClashDisplay-Regular]">Abilities</span>
                    <ul className="flex flex-col  flex-1 shrink-0 font-[ClashDisplay-Semibold]">
                        {selectedPokemon?.abilities?.map((val, i) => (
                            <li key={i}>{val?.ability?.name} {i < (selectedPokemon?.abilities?.length - 1) && ","}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;