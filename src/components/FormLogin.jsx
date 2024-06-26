import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import React from "react"
import Axios from "../utils/axiosConfig"

export const FormLogin =()=>{

    const formik = useFormik({
        initialValues:{
            user: "",
            pass: ""
        },
        validationSchema: Yup.object({
            user: Yup.string().required("Campo obligatorio"),
            pass: Yup.string().required("Campo obligatorio")
        }),
        onSubmit: async values => {
            console.log("Form values:", values);
            // Aquí puedes añadir la lógica para manejar el envío del formulario, por ejemplo, hacer una solicitud a la API
            const response = await Axios.post('/api/login/',values)
            console.log(response);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    }


    return (
        <form onSubmit={handleSubmit}>
            <FormControl isInvalid={formik.touched.user && formik.errors.user}>
                <FormLabel htmlFor="user">Usuario</FormLabel>
                <Input
                    id="user"
                    name="user"
                    {...formik.getFieldProps("user")}
                />
                <FormErrorMessage>{formik.errors.user}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.pass && formik.errors.pass}>
                <FormLabel htmlFor="pass">Contraseña</FormLabel>
                <Input
                    id="pass"
                    name="pass"
                    type="password"
                    {...formik.getFieldProps("pass")}
                />
                <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
            </FormControl>
            <Box><Link id="reset">¿Olvidaste la contraseña?</Link></Box>
            <button type="submit">Entrar</button>
        </form>
    )
}