import { Box, Button, Spinner } from "@chakra-ui/react";
import "./Assets/Styles/UserWish.css";
import Pruv from "./Assets/Image/work.png";
import useCart from "./Hooks/useCart";
import FavoriteStar from "./FavoriteStar";

function UserWish({ user }) {
    const wishlist = user.wishlist;
    const { addCart, handleButtonCart, loading } = useCart();

    if (!wishlist) return <Spinner size="xl" />;

    return (
        <Box className="user-wish-container">
            <h1 className="user-section-title">LISTA DE DESEOS</h1>
            <ul className="user-wish-items-container">
                {wishlist.map((producto) => (
                    <Box key={producto.id} className="item-prod-main">
                        <Box display="flex" flexDirection="column">
                            <FavoriteStar product={producto} className="main-fav-star" />
                            <Box className="item-image-main">
                                <img src={Pruv} alt="IMAGEN PRODUCTO" width="100%" />
                            </Box>
                        </Box>
                        <Box className="item-text">
                            <Box className="item-name">{producto.name}</Box>
                            <Box className="item-box">
                                {addCart.some((arr) => arr.id === producto.id) ? (
                                    <div className="verify-cart">Artículo agregado</div>
                                ) : (
                                    <Button
                                        isLoading={producto.id === loading}
                                        onClick={() => handleButtonCart(producto)}
                                    >
                                        Comprar <i className="fa-solid fa-cart-shopping"></i>
                                    </Button>
                                )}
                                <p>${parseFloat(producto.price).toFixed(2)}</p>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </ul>
        </Box>
    );
}

export default UserWish;
