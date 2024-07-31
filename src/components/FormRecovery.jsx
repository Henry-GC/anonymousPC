// FormRegister.js
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import React from "react"
import Axios from "../utils/axiosConfig"

function FormRecovery() {

    const formik = useFormik({
        initialValues:{
            email:"",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Campo obligatorio"),
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
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                <Input
                    id="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormRecovery;