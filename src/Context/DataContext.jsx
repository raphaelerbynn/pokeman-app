import { createContext, useEffect, useState } from "react";
import { fetchPokemon, searchPokemonWithName } from "../services";

export const DataContext = createContext([])

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState([])
    const [searchedPokemon, setSearchedPokemon] = useState([])

    const handleSearch = async (name) => {
        try {
            const data = await searchPokemonWithName(name)
            setSearchedPokemon(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (pokemons.length < 1) {
            const _fetchPokemon = async () => {
                try {
                    const data = await fetchPokemon();
                    // console.log(data)
                    setPokemons(data.results);
                } catch (e) {
                    console.log(e)
                }
            }
            _fetchPokemon();
        }
    }, [])

    const contextVals = {
        pokemons, setPokemons,
        selectedPokemon, setSelectedPokemon,
        searchedPokemon, setSearchedPokemon,

        handleSearch,
    }

    return (
        <DataContext.Provider value={contextVals}>{children}</DataContext.Provider>
      );
};