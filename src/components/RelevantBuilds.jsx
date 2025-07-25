import { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { ThemeContext } from "./Context/ThemeContext";
import useCart from "./Hooks/useCart";
import useResources from "./Hooks/useResources";
import "./Assets/Styles/RelevantBuilds.css";
import pruv from "./Assets/Image/work.png";
import { useProducts } from "./Context/ProductContext";

const BuildComponent = ({ icon, label, value }) => (
  value ? (
    <Box className="build-component-container" display={'flex'} gap={'1rem'} alignItems={'center'}>
      <Box className="img-build-component">
        <img src={icon} alt={`${label} ICON`} width="100%" />
      </Box>
      <Box className="component-title">
        <p>{label}</p>
        <strong>{value}</strong>
      </Box>
    </Box>
  ) : null
);

function RelevantBuilds() {
  const { builds } = useProducts();
  const { sections } = useResources();
  const { theme } = useContext(ThemeContext);
  const { addCart, loading, handleButtonCart } = useCart();

  return (
    <Box className="gamer-container">
      <Box className="builds-title" color={theme.color}>
        Ensambles Destacados
      </Box>
      <ul className="builds-destacados">
        {builds.map((ensamble) => (
          <Box
            key={ensamble.id}
            className="build-destacado"
            border={`solid 1px ${theme.backgroundColor}`}
            sx={{ _hover: { border: `solid 1px ${theme.highlightColor}` }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            height={{ base: '420px', sm: '440px', md: 'auto' }} // Altura fija en mobile para forzar el botón abajo
          >
            <Box className="img-build-container">
              <img src={ensamble.img_url||pruv} alt="IMAGEN DEL ENSAMBLE" width="100%" />
            </Box>
            <Box className="text-build-container" flexGrow={1}>
              <h2>{ensamble.name}</h2>
              <p>A partir de:</p>
              <strong>$ {parseFloat(ensamble.price).toFixed(2)}</strong>
              <Box className="details-build-container">
                {ensamble.components.map((component, index) => (
                  <BuildComponent key={index} icon={sections[component.category_id].icon} label={sections[component.category_id].section} value={component.product_name} />
                ))}
              </Box>
            </Box>
            <Box mt={{ base: 'auto', md: 2 }} p={{ base: '1rem', md: '0'}} width="100%">
              {addCart.some((arr) => arr.id === ensamble.id) ? (
                  <Button
                      bg={theme.backgroundColor}
                      color={theme.highlightColor}
                      isDisabled
                      width="100%"
                  >
                      Articulo añadido
                  </Button>
              ) : (
                  <Button
                      bg={theme.backgroundColor}
                      color={theme.color}
                      isLoading={ensamble.id === loading}
                      onClick={() => handleButtonCart(ensamble)}
                      sx={{ _hover: { bg: theme.highlightColor, color: theme.backgroundColor } }}
                      width="100%"
                  >
                      Añadir al carrito <i className="fa-solid fa-cart-shopping"></i>
                  </Button>
              )}
            </Box>
          </Box>
        ))}
      </ul>
    </Box>
  );
}

export default RelevantBuilds;
