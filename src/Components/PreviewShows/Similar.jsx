
import { sampleImg } from "../../assets/images";

const Similar = () => {
    
    return (
        <>
        <div className="py-2 font-[ClashDisplay-Semibold] text-[20px] border-y text-center" style={{
            boxShadow: "0px 0px 20px -19px #000000",
            borderImage: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"
        }}>
            Similar
        </div>
        <div className="flex flex-col justify-center w-full overflow-auto" style={{
            background: "linear-gradient(270deg, #FFFFFF 0%, rgba(217, 217, 217, 0.06) 51.04%, #FFFFFF 100%)",
        }}>
            <div className="flex flex-col items-center divide-y py-4 w-full overflow-auto">
                <div className=" flex flex-col gap-4 rounded-[20px] bg-white p-2 shadow-2xl min-w-[150px]">
                    <div className="relative h-[90px] w-full bg-[#F1F1F1] rounded-2xl">
                        <img src={sampleImg} alt="pokemon" className=" absolute bottom-1 left-1/2 -translate-x-1/2 w-[100px]" />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[20px] text-center font-[ClashDisplay-Medium]">charizard</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Similar;