import { useContext } from "react";
import { homePokemanImg } from "../assets/images"
import { UiContext } from "../Context";
import { SearchIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom"
import { Navbar } from "../Components";

const ListView = () => {
    const { themeColor } = useContext(UiContext);
    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col w-full h-screen">
                <Navbar />
                <div className=" items-center w-full h-full">
                    
                </div>
            </div>
        </>
    )
}

export default ListView