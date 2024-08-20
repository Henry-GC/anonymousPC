import "./Assets/Styles/UserProfile.css";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import useProfileForm from "./Hooks/useProfileForm";

function UserProfile({user}) {
    const [edit, setEdit] = useState(false);
    const {initialValues,formik} = useProfileForm(user)

    const handleSave = () => {
        setEdit(false);
        formik.handleSubmit();
    };

    if(!initialValues) return <div>Cargando ...</div>

    return (
        <Box className="user-profile-section">
            <h1 className="user-section-title">PERFIL
                {edit ? (
                    <Button
                        onClick={handleSave}
                        leftIcon={<i className="fa-solid fa-save"></i>}
                    >
                        Guardar
                    </Button>
                ) : (
                    <Button
                        onClick={() => setEdit(true)}
                        leftIcon={<i className="fa-solid fa-pen-to-square"></i>}
                    >
                        Editar
                    </Button>
                )}
            </h1>
            <form className="user-section-rows" onSubmit={handleSave}>
            <FormControl className="user-section-row" isInvalid={formik.touched.name && formik.errors.name}>
                    <FormLabel htmlFor="name" className="user-section-row-title">Nombres</FormLabel>
                    {edit ? (
                        <Input
                            id="name"
                            name="name"
                            {...formik.getFieldProps("name")}
                        />
                    ) : (
                        <Text className="user-section-row-value">{formik.values.name}</Text>
                    )}
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl className="user-section-row" isInvalid={formik.touched.lastname && formik.errors.lastname}>
                    <FormLabel htmlFor="lastname" className="user-section-row-title">Apellidos</FormLabel>
                    {edit ? (
                        <Input
                            id="lastname"
                            name="lastname"
                            {...formik.getFieldProps("lastname")}
                        />
                    ) : (
                        <Text className="user-section-row-value">{formik.values.lastname}</Text>
                    )}
                    <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
                </FormControl>

                <FormControl className="user-section-row" isInvalid={formik.touched.nickname && formik.errors.nickname}>
                    <FormLabel htmlFor="nickname" className="user-section-row-title">Apodo</FormLabel>
                    {edit ? (
                        <Input
                            id="nickname"
                            name="nickname"
                            {...formik.getFieldProps("nickname")}
                        />
                    ) : (
                        <Text className="user-section-row-value">{formik.values.nickname}</Text>
                    )}
                    <FormErrorMessage>{formik.errors.nickname}</FormErrorMessage>
                </FormControl>

                <FormControl className="user-section-row" isInvalid={formik.touched.birthdate && formik.errors.birthdate}>
                    <FormLabel htmlFor="birthdate" className="user-section-row-title">Fecha de nacimiento</FormLabel>
                    {edit ? (
                        <Input
                            id="birthdate"
                            name="birthdate"
                            type="date"
                            {...formik.getFieldProps("birthdate")}
                        />
                    ) : (
                        <Box className="user-section-date">
                            <Text>{formik.values.birthdate.split('T')[0]}</Text>
                        </Box>
                    )}
                    <FormErrorMessage>{formik.errors.birthdate}</FormErrorMessage>
                </FormControl>

                <FormControl className="user-section-row" isInvalid={formik.touched.phone && formik.errors.phone}>
                    <FormLabel htmlFor="phone" className="user-section-row-title">Teléfono</FormLabel>
                    {edit ? (
                        <Input
                            id="phone"
                            name="phone"
                            {...formik.getFieldProps("phone")}
                        />
                    ) : (
                        <Text className="user-section-row-value">{formik.values.phone}</Text>
                    )}
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>

                <Button className="reset-pass-button">
                    CAMBIAR CONTRASEÑA
                </Button>
            </form>
        </Box>
    );
}

export default UserProfile;
