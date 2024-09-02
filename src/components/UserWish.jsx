import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import "./Assets/Styles/UserWish.css";
import pruv from "./Assets/Image/work.png";
import useCart from "./Hooks/useCart";
import FavoriteStar from "./FavoriteStar";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function UserWish({ user }) {
    const {theme} = useContext(ThemeContext)
    const wishlist = user.wishlist;
    const { addCart, handleButtonCart, loading } = useCart();

    if (!wishlist) return <Spinner size="xl" />;

    return (
        <Box className="user-wish-container">
            <h1 className="user-section-title" color={theme.color}>LISTA DE DESEOS</h1>
            <ul className="user-wish-items-container">
                {wishlist.map((producto) => (
                    <Box
                        key={producto.id}
                        className="relevant-product"
                        border={`solid 1px ${theme.backgroundColor}`}
                        sx={{_hover:{border:`solid 1px ${theme.highlightColor}`}}}
                    >
                        <FavoriteStar product={producto} className={`main-fav-star`}/>
                        <Box className="img-product-container">
                            <img src={producto.img_url||pruv} alt="IMAGEN DEL PRODUCTO" width="100%"/>
                        </Box>
                        <Box className="text-product-container">
                            <Box className="name-product-container">{producto.name}</Box>
                            <Box className="price-product-container">
                                <Text
                                    color='red'
                                    fontWeight='600'
                                    fontSize='1.3rem'
                                >
                                    ${parseFloat(producto.price).toFixed(2)}
                                </Text>
                                {addCart.some((arr)=>arr.id === producto.id)?(
                                    <Button
                                        bg={theme.backgroundColor}
                                        color={theme.highlightColor}
                                        isDisabled
                                    >
                                        Articulo añadido
                                    </Button>
                                ):(
                                    <Button
                                        bg={theme.backgroundColor}
                                        color={theme.color}
                                        isLoading={producto.id === loading ? true : null}
                                        onClick={()=>handleButtonCart(producto)}
                                        sx={{_hover:{bg:theme.highlightColor, color:theme.backgroundColor}}}
                                    >
                                        Añadir al carrito <i className="fa-solid fa-cart-shopping"></i>
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </ul>
        </Box>
    );
}

export default UserWish;
