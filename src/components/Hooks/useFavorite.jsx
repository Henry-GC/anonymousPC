import { useContext, useEffect, useState } from "react";
import Axios from "../../utils/axiosConfig";
import { FavoriteContext } from "../Context/FavoriteContext";

function useFavorite(product) {
    const { favorite, setFavorite } = useContext(FavoriteContext);
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const res = favorite.some((arr) => arr.id === product.id)
        setIsFavorited(res);
    }, [favorite, product]);

    const addFavorite = async (product) => {
        const newFav = [...favorite, product];
        setFavorite(newFav);
        try {
            const res = await Axios.post('api/user/add-favorite', { "prod_id": product.id });
            console.log(res);
        } catch (error) {
            console.error("Error adding to favorites:", error);
        }
    };

    const delFavorite = async (product) => {
        const newFav = favorite.filter((arr) => product.id !== arr.id);
        setFavorite(newFav);
        try {
            const res = await Axios.post('/api/user/delete-favorite', { "prod_id": product.id });
            console.log(res);
        } catch (error) {
            console.error("Error removing from favorites:", error);
        }
    };

    const handleToggleFavorite = () => {
        if (isFavorited) {
            delFavorite(product);
        } else {
            addFavorite(product);
        }
    };

    useEffect(() => {
        localStorage.setItem('favCart', JSON.stringify(favorite));
    }, [favorite]);

    return { isFavorited, handleToggleFavorite };
}

export default useFavorite;
