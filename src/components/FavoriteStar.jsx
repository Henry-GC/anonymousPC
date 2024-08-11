import { IconButton } from "@chakra-ui/react";
import useFavorite from "./Hooks/useFavorite";

function FavoriteStar({ product, className }) {
    const { isFavorited, handleToggleFavorite } = useFavorite(product);
    
    return (
        <div className={className}>
            <IconButton
                aria-label="Agregar a favoritos"
                icon={isFavorited ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                color={isFavorited ? 'yellow' : 'gray'}
                _hover={{ color: 'yellow' }}
                onClick={handleToggleFavorite}
                width='fit-content'
                textAlign='right'
                border='none'
                fontSize='1.5rem'
                background='transparent'
            />
        </div>
    );
}

export default FavoriteStar;
