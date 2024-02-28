import { useContext, useState } from "react";
import { homePokemanImg } from "../assets/images"
import { UiContext } from "../Context";
import { ArrowIcon, SearchIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom"
import { ListCard, Navbar, PreviewModal } from "../Components";

const ListView = () => {
    const { themeColor } = useContext(UiContext);
    const navigate = useNavigate()
    const [openPreview, setOpenPreview] = useState(false)

    const data = Array(8).fill(null)

    return (
        <>
            <PreviewModal isOpen={openPreview} onClose={() => setOpenPreview(false)} />
            <div className="flex flex-col w-full h-screen overflow-auto">
                <Navbar />
                <div className="flex flex-col gap-5 border-black items-center w-full h-full px-[60px] pt-[60px] pb-[20px] overflow-auto">
                    <div className="flex-1 grid grid-cols-4 gap-x-5 gap-y-16 h-full w-full">
                        {data?.map((_, i) => (
                            <ListCard key={i} onPreview={() => setOpenPreview(true)} />
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-between w-full font-[ClashDisplay-Medium]">
                        {/* pagination */}
                        <div className="flex gap-2">
                            <button className="rounded-lg flex items-center justify-center w-10 h-10 bg-[#E1E1E1]">
                                <img src={ArrowIcon} alt="" />
                            </button>
                            <button className="text-[20px]  rounded-lg flex items-center justify-center w-10 h-10 bg-[#E1E1E1]">
                                1
                            </button>
                            <button className="rounded-lg flex items-center justify-center w-10 h-10 bg-[#E1E1E1]">
                                <img src={ArrowIcon} alt="" className="rotate-180" />
                            </button>
                        </div>

                        {/* dropdown */}
                        <div className="relative flex gap-3 items-center p-1 pr-3 rounded-[10px] bg-[#E1E1E1]">
                            <span className="text-[20px] rounded-lg px-3 bg-white">8</span>
                            <img src={ArrowIcon} alt="" className="-rotate-90" />

                            {/* options */}
                            {/* <div className="bg-white flex flex-col p-1 absolute top-[110%] right-0 border text-[20px] rounded-[10px]">
                                <button className={`px-10 rounded-lg bg-[#F3F3F3]`}>12</button>
                                <button className={`px-10 rounded-lg`}>16</button>
                                <button className={`px-10 rounded-lg`}>24</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListView