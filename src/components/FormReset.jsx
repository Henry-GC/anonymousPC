import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"

export const FormReset = () => {

    const formik = useFormik({
        initialValues:{
            email: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().required("Campo obligatorio")
        }),

        onSubmit: (values)=>{}
    })

    return (
        <form>
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <button>Enviar</button>
        </form>
    )
}