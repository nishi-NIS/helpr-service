import React from "react";
import { useFormik } from "formik";
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, SignupValidationSchema } from "../../../constants";

export default useSignup = () => {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = React.useState('');
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState(false);

    const options = ['Plumbing', 'Cleaning', 'Dusting',];

    const navigateBack = () => navigation.goBack();
    const navigateToOtpScreen = () => navigation.navigate(NavigationRoutes.otpScreen);

    const handleOptionSelect = (item) => {
        setSelectedValue(item);
        setShowDropdown(false);
    };

    return{
        selectedValue, 
        setSelectedValue,
        showDropdown, 
        setShowDropdown,
        isSelected, 
        setIsSelected,
        options,
        handleOptionSelect,
        navigateBack,
        navigateToOtpScreen
    };
};
