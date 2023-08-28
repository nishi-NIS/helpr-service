import React, { useEffect, useRef } from "react";
import { ActivityIndicator, PermissionsAndroid, StyleSheet } from "react-native";
import { useFormik } from "formik";
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, SignupValidationSchema, SignupValidationSchema2 } from "../../../constants";
import { API_URL } from "../../../config";
import { useDispatch, useSelector } from 'react-redux';
import { SignUpUser } from "../../../redux/auth/AuthService";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import Images from "../../../assests";

export default useSignup = () => {
    const focused = true;
    const [ErrorMessage, setErrorMessage] = React.useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigateToSignIn = () => navigation.navigate(NavigationRoutes.login);
    const navigateGoBack = () => navigation.goBack();
    const navigateToSignup2 = () => navigation.navigate(NavigationRoutes.signup2);
    // const { newUser, loading, errorMessage } = useSelector(state => state.authReducer)

    const [imageSource, setImageSource] = React.useState('');
    const [showCamera, setShowCamera] = React.useState(false);
    // const devices = useCameraDevices('wide-angle-camera');
    const devices = useCameraDevices();
    // const device = devices.back;
    const camera = useRef(null);

    // useEffect(() => {
    //     checkPermissions();
    // }, []);

    // useEffect(() => {
    //     if (newUser != undefined) {
    //         navigation.navigate(NavigationRoutes.signup2)
    //     }
    //     // dispatch(SignUpUser());
    //     // console.log("newUser", newUser);
    // }, []);

    // const getNewUser = (values) => {
    //     const user = {
    //         profilePic: values.profilePic,
    //         firstName: values?.firstname,
    //         lastName: values?.lastname,
    //         email: values?.email,
    //         phone: values?.phone,
    //         password: values?.password,
    //         confirmPassword: values?.confirmPassword,
    //     }
    //     const validUser = dispatch(SignUpUser(user));
    //     validUser
    //     .then((response) => {
    //         console.log("response--", response)

    //         // if (response.error) {
    //         //     console.log("----error----", response.error. message)
    //         // }
    //         // else {
    //         //     navigation.navigate(NavigationRoutes.signup2)
    //         // }
    //     })
    //     // console.log("newUser", newUser);
    // };

    // const checkPermissions = async () => {
    //     const cameraPermission = await Camera.getCameraPermissionStatus();
    //     console.log("cameraPermission", cameraPermission)
    // };

    const takePicture = async () => {
        if (camera != null) {
            const photo = await camera.current.takePhoto();
            console.log("photo", photo.path);
            setImageSource(photo.path);
            setShowCamera(false);
        }
    };

    // const requestCameraPermission = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.CAMERA
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log('You can use the camera');
    //             if (device == null)
    //                 return (
    //                     <Camera
    //                         style={StyleSheet.absoluteFill}
    //                         device={device}
    //                         isActive={true}
    //                     />
    //                 )
    //         } else {
    //             console.log('Camera permission denied');
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };

    const initialValues = {
        profilePic: Images.loginBG,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    const initialValues2 = {
        businessLicense: Images.loginBG,
        passportOrLicense: Images.loginBG,
        services: '',
        signature: '',
        acceptTerms: false,
    };

    const onSubmit = () => {
        // dispatch(SignUpUser());
        navigation.navigate(NavigationRoutes.signup2)
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignupValidationSchema,
        // enableReinitialize: true,
        onSubmit: onSubmit
        // onSubmit: getNewUser
        // onSubmit: async values => {
        //     setErrorMessage(false);

        //     let myHeaders = new Headers();
        //     myHeaders.append('Content-Type', 'application/json');

        //     let raw = JSON.stringify({
        //         firstName: values.firstName,
        //         lastName: values.lastName,
        //         email: values.email,
        //         phone: values.phone,
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

        //     fetch(API_URL + 'signup', requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             // if (!result.status) {
        //             //     errorToast(result.message);
        //             // } 
        //             if (
        //                 result.message ===
        //                 'User was registered successfully! Please check email to verify your account.'
        //             ) {
        //                 // await AsyncStorage.setItem('emailId', values.email);
        //                 navigation.navigate(NavigationRoutes.otpScreen);
        //             }
        //             else {
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

    const handleOnSubmit = () => {
        console.log("prtessed")
        const user = {
            profilePic: values.profilePic,
            firstName: values?.firstname,
            lastName: values?.lastname,
            email: values?.email,
            phone: values?.phone,
            password: values?.password,
            confirmPassword: values?.confirmPassword,
            businessLicense: values?.businessLicense,
            passportOrLicense: values?.passportOrLicense,
            services: values?.services,
            signature: values?.signature,
            acceptTerms: values?.acceptTerms,
        };
        const validUser = dispatch(SignUpUser(user));
        validUser
            .then((response) => {
                console.log("response--", response)

                // if (response.error) {
                //     console.log("----error----", response.error. message)
                // }
                // else {
                //     navigation.navigate(NavigationRoutes.signup2)
                // }
            })
            .catch((error) => {
                console.log("catch error", error)
            })
        // console.log("newUser", newUser);
    };
    // };

    const formik2 = useFormik({
        initialValues: initialValues2,
        validationSchema: SignupValidationSchema2,
        // enableReinitialize: true,
        onSubmit: handleOnSubmit
    });

    return {
        navigation,
        formik,
        navigateToSignIn,
        navigateGoBack,
        navigateToSignup2,
        focused,
        ErrorMessage,
        setErrorMessage,
        formik2,
        // requestCameraPermission
    };
};
