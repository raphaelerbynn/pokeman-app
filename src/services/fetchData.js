import api from "./api"

export const fetchPokemon = async () => {
        const response = await api.get("/pokemon?offset=0&limit=500");
        return response.data;
}

export const searchPokemonWithName = async (name) => {
    const response = await api.get(`/pokemon/${name}`)
    return response.data;
}