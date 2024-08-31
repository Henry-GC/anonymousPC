import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    MenuGroup,
    MenuDivider,
    MenuItemOption,
    Text,
    Link,
  } from "@chakra-ui/react";
  import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
  import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
  
  export default function NavBar2() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const {theme} = useContext(ThemeContext)
  
    const categories = [
      {
        label: "Componentes",
        subcategories: ["Procesadores", "Tarjetas Madre", "Memorias RAM", "Discos Duros"],
      },
      {
        label: "Equipos Ensamblados",
        subcategories: ["Gamer", "Oficina", "Workstations"],
      },
      {
        label: "Laptops",
        subcategories: ["Gamer", "Ultrabooks", "2 en 1"],
      },
    ];
  
    return (
      <Flex
        as="nav"
        bg={theme.backgroundColor}
        color="white"
        padding="1rem"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Categorías */}
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            aria-label="Categories"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="teal"
            _hover={{ bg: "teal.700" }}
          >
            Categorías
          </MenuButton>
          <MenuList>
            {categories.map((category, index) => (
              <Menu
                key={index}
                onOpen={() => setHoverIndex(index)}
                onClose={() => setHoverIndex(null)}
                isOpen={hoverIndex === index}
                placement="right-start"
              >
                <MenuButton
                  as={MenuItem}
                  rightIcon={<ChevronDownIcon />}
                  width="100%"
                  justifyContent="space-between"
                >
                  {category.label}
                </MenuButton>
                <MenuList>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <MenuItem key={subIndex}>
                      <Link href={`/${category.label.toLowerCase()}/${subcategory.toLowerCase()}`}>
                        {subcategory}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ))}
          </MenuList>
        </Menu>
  
        {/* Favoritos */}
        <Button colorScheme="teal" variant="ghost">
          Favoritos
        </Button>
  
        {/* Ofertas */}
        <Button colorScheme="teal" variant="ghost">
          Ofertas
        </Button>
      </Flex>
    );
  }
  