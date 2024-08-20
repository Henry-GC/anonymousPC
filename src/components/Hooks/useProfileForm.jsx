import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../utils/axiosConfig";

function useProfileForm(user) {
    const [initialValues, setInitialValues] = useState({
        name: "",
        lastname: "",
        nickname: "",
        birthdate: "",
        phone: ""
    });

    useEffect(() => {
        if (user && user.userData) {
            setInitialValues({
                name: user.userData.first_name || "Sin registro",
                lastname: user.userData.last_name || "Sin registro",
                nickname: user.userData.nickname || "Sin registro",
                birthdate: user.userData.birth_date || "Sin registro",
                phone: user.userData.phone || "Sin registro"
            });
        }
    }, [user]);

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string().required("Campo obligatorio"),
            lastname: Yup.string().required("Campo obligatorio"),
            nickname: Yup.string().required("Campo obligatorio"),
            birthdate: Yup.date().nullable(),
            phone: Yup.string().required("Campo obligatorio") // Cambiado a string para permitir caracteres no numéricos
        }),
        onSubmit: async function updateProfile(values) {
            try {
                const response = await Axios.post('/api/user/profile/data', values);
                console.log(response.data.message);
            } catch (error) {
                console.error("Error al actualizar el perfil:", error.response?.data?.error || error.message);
            }
        }
    });

    return { initialValues, formik };
}

export default useProfileForm;
