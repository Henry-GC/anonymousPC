import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import Axios from "../utils/axiosConfig";
import { ThemeContext } from "./Context/ThemeContext";

const FormLogin = () => {
  const {theme} = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user: "",
      pass: ""
    },
    validationSchema: Yup.object({
      user: Yup.string().required("Campo obligatorio"),
      pass: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: async (values) => {
      setServerError(""); // Limpiar cualquier error previo
      setIsLoading(true);
      try {
        const response = await Axios.post("/api/login/", values);
        localStorage.setItem("token", response.data.token);
        navigate("/usuario", { replace: true });
        console.log(response);
      } catch (error) {
        setIsLoading(false); // Detener el spinner
        if (error.response) {
          setServerError("Usuario o contraseña incorrectos"); // Mensaje de error personalizado
        } else {
          setServerError("Ocurrió un error. Por favor, inténtalo de nuevo más tarde.");
        }
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display='flex'
        flexDirection='column'
      >
        <FormControl isInvalid={formik.touched.user && formik.errors.user}>
          <FormLabel htmlFor="user">Usuario</FormLabel>
          <Input id="user" name="user" {...formik.getFieldProps("user")} />
          <FormErrorMessage>{formik.errors.user}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.pass && formik.errors.pass}>
          <FormLabel htmlFor="pass">Contraseña</FormLabel>
          <Input id="pass" name="pass" type="password" {...formik.getFieldProps("pass")} />
          <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
        </FormControl>
        {serverError && (
          <FormControl isInvalid={true}>
            <FormErrorMessage>{serverError}</FormErrorMessage>
          </FormControl>
        )}
        <Button
          type="submit"
          isLoading={isLoading}
          alignSelf='center'
          bg={theme.backgroundColor}
          color={theme.color}
          border={`solid 1px ${theme.color}`}
          sx={{ _hover: { bg: theme.highlightColor, color: theme.backgroundColor, borderColor:theme.highlightColor} }}
          marginTop='1rem'
        >
          Entrar
        </Button>
      </Box>
    </form>
  );
};

export default FormLogin;
