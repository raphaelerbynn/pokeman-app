import { Fragment, useContext, useEffect, useState } from "react";
import { ArrowIcon } from "../assets/icons";
import { ListCard, Navbar, Pagination, PreviewModal } from "../Components";
import { DataContext } from "../Context";
import { searchPokemonWithName } from "../services";

const ListView = () => {
    const [openPreview, setOpenPreview] = useState(false)
    const [curPageNum, setCurPageNum] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const { pokemons, setPokemons, setSelectedPokemon, searchedPokemon } = useContext(DataContext)
    const [pokemonsToShow, setPokemonsToShow] = useState([])
    const [totalPages, setTotalPages] = useState([])
    const [showPageSizeOptions, setShowPageSizeOptions] = useState(false)
    // tiems per page 
    const pageSizes = [8, 12, 16, 24]

    /**
     * calulating first index and last index to get them from the array pool of pokemans
     */
    const indexOfLastItem = curPageNum * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const getPokemonDetails = async () => {
        try {
            // filter all links in current pokemon shown that has no detailsAvailable true or not exist
            const pokemonsWithoutDetails = pokemonsToShow.map(_pok => {
                if (_pok?.url) {
                    return _pok?.name;
                }
                return null;
            }).filter(name => name !== null);

            // use promise all for parallel fetching... before we check if there are urls
            if (pokemonsWithoutDetails.length > 0) {
                const detailsFetch = pokemonsWithoutDetails.map(name => searchPokemonWithName(name));
                const detailsResults = await Promise.all(detailsFetch);
                // console.log(detailsResults)
                
                const updatedPokemons = pokemons.map(pokemon => {
                    if (pokemonsWithoutDetails.includes(pokemon.name)) {
                        return detailsResults.find(details => details.name === pokemon.name)
                    }
                    return pokemon;
                });
                setPokemons(updatedPokemons)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handlePreview = (data) => {
        setSelectedPokemon(data)
        setOpenPreview(true)
    }

    useEffect(() => {
        const _pokemonsToShow = pokemons?.slice(indexOfFirstItem, indexOfLastItem);
        const _totalPages = Math.ceil(pokemons.length / itemsPerPage);

        setPokemonsToShow(searchedPokemon.length > 0 ? searchedPokemon : _pokemonsToShow)
        setTotalPages(_totalPages)

      }, [pokemons, indexOfFirstItem, indexOfLastItem, itemsPerPage, searchedPokemon]);

    useEffect(() => {
        getPokemonDetails()
    }, [pokemonsToShow])

    return (
        <>
            <PreviewModal isOpen={openPreview} onClose={() => setOpenPreview(false)} />
            <div className="flex flex-col w-full min-h-screen">
                <Navbar />
                <div className="flex flex-col gap-14 border-black items-center w-full h-full px-4 md:px-[60px] pt-[60px] pb-[20px] overflow-auto">
                    <div className={`flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-16 h-full w-full`}>
                        {pokemonsToShow?.map((data, i) => (
                            <Fragment key={i}>
                            {searchedPokemon.length > 0 ?
                                (<>
                                    {
                                        typeof(data) === "string" ? 
                                            <p className="font-[ClashDisplay-Semibold] text-[40px]">{data}</p> : 
                                            <ListCard info={data} onPreview={() => handlePreview(data)} isSearched={searchedPokemon.length > 0} />
                                    }
                                </>) :
                                <ListCard info={data} onPreview={() => handlePreview(data)} isSearched={searchedPokemon.length > 0} />
                            }
                            </Fragment>
                        ))}
                    </div>
                    
                    {searchedPokemon.length < 1 && <div className="flex items-center justify-between w-full font-[ClashDisplay-Medium] pb-[100px]">
                        {/* pagination */}
                        <Pagination
                            currentPage={curPageNum}
                            totalPages={totalPages}
                            onPageChange={setCurPageNum}
                        />

                        {/* dropdown */}
                        <div className="relative">
                            <div className=" flex gap-3 items-center p-1 pr-3 rounded-[10px] bg-[#E1E1E1]" onClick={() => {setShowPageSizeOptions(!showPageSizeOptions)}}>
                                <span className="md:text-[20px] rounded-lg px-3 bg-white">8</span>
                                <img src={ArrowIcon} alt="" className="-rotate-90" />
                            </div>
                            {/* options */}
                            {showPageSizeOptions && <div className="bg-white flex flex-col p-1 absolute top-[110%] right-0 border md:text-[20px] rounded-[10px]">
                                {pageSizes.filter(val => val !== itemsPerPage).map((val, i) => (
                                    <button onClick={() => {
                                        setItemsPerPage(val);
                                        setShowPageSizeOptions(false)
                                    }} key={i} className={`px-6 md:px-10 rounded-lg hover:bg-[#F3F3F3]`}>{val}</button>
                                ))}
                            </div>}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default ListView