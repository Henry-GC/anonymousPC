import React, { useState } from "react";
import FormLogin from "./FormLogin";
import { Box } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "./Assets/Image/Logo.png"
import FormRegister from "./FormRegister";

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexGrow="1"
        >
            <Box
                bg="#fff"
                padding="2rem"
                borderRadius="1rem"
            >
                <img
                    id="logo"
                    src={Logo}
                    alt="Logo AnonymousPC"
                    width="200vw"
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className="datos"
                >
                    <h1>
                        <Link
                            id="log-link"
                            to="#"
                            onClick={() => setIsRegistering(false)}
                        >
                            Ingresar
                        </Link>
                    </h1>
                    <h2>
                        <Link
                            id="log-link"
                            to="#"
                            onClick={() => setIsRegistering(true)}
                        >
                            Registrar
                        </Link>
                    </h2>
                    {isRegistering ? <FormRegister /> : <FormLogin />}
                </Box>
            </Box>
        </Box>
    );
}

export default Login;