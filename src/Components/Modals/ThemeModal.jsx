import { useContext } from "react";
import ModalWrapper from "./ModalWrapper"
import { UiContext } from "../../Context";

// eslint-disable-next-line react/prop-types
const ThemeModal = ({ isOpen, onClose }) => {
    const { themeColor, setThemeColor } = useContext(UiContext)

    const handleThemeClick = (color) => {
        setThemeColor(color)
        onClose();
    }

    return (
        <ModalWrapper isOpen={isOpen}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="rounded-[24px] flex flex-col bg-[#EBEBEB] overflow-hidden">
                    <p className="text-center font-[ClashDisplay-Semibold] text-[22px] bg-white py-3">Choose Theme</p>
                    <div className="flex items-center gap-7 py-10 px-14">
                        <div className={` rounded-full cursor-pointer ${themeColor === "#E85382" && "border border-black p-1 "}`} onClick={() => handleThemeClick("#E85382")}>
                            <div className={`h-[74px] w-[74px] rounded-full bg-[#E85382]`}></div>
                        </div>
                        <div className={` rounded-full cursor-pointer ${themeColor === "#39BADF" && "border border-black p-1 "}`} onClick={() => handleThemeClick("#39BADF")}>
                            <div className={`h-[74px] w-[74px] rounded-full bg-[#39BADF]`}></div>
                        </div>
                        <div className={` rounded-full cursor-pointer ${themeColor === "#E1A725" && "border border-black p-1 "}`} onClick={() => handleThemeClick("#E1A725")}>
                            <div className={`h-[74px] w-[74px] rounded-full bg-[#E1A725]`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default ThemeModal