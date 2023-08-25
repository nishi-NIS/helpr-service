import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, SignupValidationSchema } from "../../../constants";
import { API_URL } from "../../../config";
import { useDispatch } from 'react-redux';
import { SignUpUser } from "../../../redux/auth/AuthService";

export default useSignup = () => {
    const focused = true;
    const [ErrorMessage, setErrorMessage] = React.useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigateToSignIn = () => navigation.navigate(NavigationRoutes.login);
    const navigateGoBack = () => navigation.goBack();
    const navigateToSignup2 = () => navigation.navigate(NavigationRoutes.signup2);

    useEffect(() => {
        dispatch(SignUpUser());
    }, []);

    const initialValues = {
        photo: '',
        firstname: '',
        lastname: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    };

    const onSubmit = () => {
        // dispatch(SignUpUser());
        navigation.navigate(NavigationRoutes.signup2)
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignupValidationSchema,
        enableReinitialize: true,
        onSubmit: onSubmit
        // onSubmit: async values => {
        //     setErrorMessage(false);

        //     let myHeaders = new Headers();
        //     myHeaders.append('Content-Type', 'application/json');

        //     let raw = JSON.stringify({
        //         firstName: values.firstname,
        //         lastName: values.lastname,
        //         email: values.email,
        //         phone: values.mobileNumber,
        //         password: values.password,
        //         confirmPassword: values.confirmPassword,
        //     });

        //     // let requestOptions = {
        //     //     method: 'POST',
        //     //     headers: myHeaders,
        //     //     body: raw,
        //     //     redirect: 'follow',
        //     // };

        //     // fetch(API_URL + 'signup', requestOptions)
        //     //     .then(response => response.json())
        //     //     .then(async result => {
        //     //         console.log(result);
        //     //         if (
        //     //             result.message ===
        //     //             'User was registered successfully! Please check email to verify your account.'
        //     //         ) {
        //     //             await AsyncStorage.setItem('emailId', values.email);
        //     //             navigation.navigate(NavigationRoutes.otpScreen);
        //     //         } else {
        //     //             console.log('IN');
        //     //             setErrorMessage(result.message);
        //     //         }
        //     //     })
        //     //     .catch(error => console.log('error', error));

        //     // let myHeaders = new Headers();
        //     // myHeaders.append('Content-Type', 'multipart/form-data');

        //     let requestOptions = {
        //         method: 'POST',
        //         //   body: formdata,
        //         redirect: 'follow',
        //         headers: myHeaders,
        //     };

        //     fetch(baseURL + 'signup', requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             if (!result.status) {
        //                 errorToast(result.message);
        //             } else {
        //                 navigation.navigate(NavigationRoutes.otpScreen, {
        //                     headersLable: 'Verify Email',
        //                     headersSub: 'OTP has been sent on Emai',
        //                     resend: this.OTPResend,
        //                     verify: this.OTPVerify,
        //                     backToLogin: false,
        //                 });
        //             }
        //             // Handle API response here (e.g., show success message)
        //             console.log(result);
        //         })
        //         .catch(error => {
        //             // Handle error here (e.g., show error message)
        //             console.log('error', error);
        //         });
        // },
    });

    return {
        navigation,
        formik,
        navigateToSignIn,
        navigateGoBack,
        navigateToSignup2,
        focused,
        ErrorMessage,
        setErrorMessage
    };
};
