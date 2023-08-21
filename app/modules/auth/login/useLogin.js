import React from 'react';
import { useFormik } from "formik";
import { LoginValidationSchema, NavigationRoutes } from "../../../constants";
import { useNavigation } from '@react-navigation/native';

export const useLogin = () => {
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = React.useState(false);

    const navigateToSignup = () => navigation.navigate(NavigationRoutes.signup);
    const navigateToForgotPassword = () => navigation.navigate(NavigationRoutes.forgotScreen)

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = () => {
        // console.log("Pressed");
        navigation.navigate(NavigationRoutes.drawerRoutes);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginValidationSchema,
        onSubmit: onSubmit
    });

    return{
        formik,
        navigation,
        isSelected,
        setIsSelected,
        navigateToSignup,
        navigateToForgotPassword
    };
};