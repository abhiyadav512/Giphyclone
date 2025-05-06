
import { GiphyFetch } from '@giphy/js-fetch-api';
import { createContext, useContext, useEffect, useState } from 'react';

const GifContext = createContext();

const GifProvider = ({ children }) => {

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorite, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
        setFavorites(favorite);
    }, []);

    const addToFavorites = (id) => {
        console.log(id);
        if (favorite.includes(id)) {
            // If the item is already in favorites, remove it
            const updatedFavorites = favorite.filter((itemId) => itemId !== id);
            localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } else {
            // If the item is not in favorites, add it
            const updatedFavorites = [...favorite];
            updatedFavorites.push(id);
            localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        }
    };
    return (
        <GifContext.Provider
            value={{ gf, gifs, setGifs, filter, setFilter, addToFavorites, favorite, isLoading, setIsLoading }}>
            {children}
        </GifContext.Provider>
    );
};

const Gifstate = () => {
    return useContext(GifContext);
};


export { GifProvider, Gifstate };