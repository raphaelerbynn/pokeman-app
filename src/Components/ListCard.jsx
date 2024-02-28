/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UiContext } from "../Context";
import { ViewIcon } from "../assets/icons";


const ListCard = ({ onPreview, info }) => {
    const { themeColor } = useContext(UiContext);
    // console.log(info)
    return (
        <div className="group relative">
            <div className=" group-hover:absolute group-hover:z-[1] flex flex-col gap-4 rounded-[20px] bg-white p-2 shadow-2xl w-full h-fit">
                <div className="relative h-[100px] w-full bg-[#F1F1F1] rounded-2xl object-cover">
                    <img src={info?.sprites?.other?.dream_world?.front_default || ""} alt="pokemon" className=" absolute bottom-1 left-1/2 -translate-x-1/2 h-[130px]" />
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[24px] text-center font-[ClashDisplay-Medium]">{info?.name}</p>
                    <div className="flex items-center gap-2">
                        {info?.types?.map((_type, i) => 
                            <div className=" rounded-full py-1 px-4 bg-[#EEEEEE] " key={i}>
                                {_type?.type?.name}
                            </div>
                        )}
                    </div>
                </div>
                <button className="hidden group-hover:flex items-center justify-between rounded-[20px] py-3 px-5 mt-3" onClick={onPreview} style={{
                    background: themeColor
                }}>
                    <span className="text-white">View Pokemon</span>
                    <img src={ViewIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ListCard;