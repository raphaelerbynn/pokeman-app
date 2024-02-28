import { homePokemanImg } from "../assets/images"
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen">
            <div className="flex flex-col items-center">
                <p className="text-[30px] font-[ClashDisplay-Semibold]">Page Not Found</p>
                <img src={homePokemanImg} alt="" />
                <button className="text-blue-500 underline" onClick={() => navigate("/home")}>Go home</button>
            </div>
        </div>
    )
}

export default NotFoundPage