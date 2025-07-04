import { IconButton, useToast } from "@chakra-ui/react";
import useFavorite from "./Hooks/useFavorite";

function FavoriteStar({ product, className }) {
    const { isFavorited, handleToggleFavorite } = useFavorite(product);
    const toast = useToast();
    let token = localStorage.getItem('token')

    const handleClick = () => {
        if (token == null || token === '') {
            toast({
                title: "Debes registrarte o iniciar sesión",
                description: "No puedes agregar productos a favoritos hasta no registrarte.",
                status: "warning",
                duration: 4000,
                isClosable: true,
            });
            return;
        }
        handleToggleFavorite();
    };

    return (
        <div className={className}>
            <IconButton
                aria-label="Agregar a favoritos"
                icon={isFavorited ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                color={isFavorited ? 'yellow' : 'gray'}
                _hover={{ color: 'yellow' }}
                onClick={handleClick}
                width='fit-content'
                textAlign='right'
                border='none'
                fontSize='1.5rem'
                background='transparent'
                zIndex='auto'
                // isDisabled={!token}
            />
        </div>
    );
}

export default FavoriteStar;
