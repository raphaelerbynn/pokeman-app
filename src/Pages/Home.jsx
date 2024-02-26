import { homePokemanImg } from "../assets/images"

const Home = () => {
    return (
        <>
            <div className="w-full h-screen">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="flex flex-col items-center">
                        <div>
                            <img src={homePokemanImg} alt="pokemna" />
                        </div>
                        <div>
                            <span className="text-[48px]">Poké</span>
                            <span className="text-[48px]"> book</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home