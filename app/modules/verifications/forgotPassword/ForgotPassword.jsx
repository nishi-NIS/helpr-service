// import React from "react";
// import { View, Text, StatusBar, Image } from "react-native";
// import Images from "../../../assests";
// import { styles } from "./ForgotPasswordStyles";
// import { Colors } from "../../../theme";

// export const ForgotPasswordScreen = () => {
//     return(
//         <View>
//             <StatusBar
//                 animated={true}
//                 backgroundColor={Colors.statusBar}
//                 networkActivityIndicatorVisible={true}
//                 currentHeight={true}
//                 translucent={true}
//             />
//             <Image
//                 source={Images.loginBG}
//                 style={styles.topImage}
//             />
//         </View>
//     );
// };

// export default ForgotPasswordScreen;

import { useFormik } from 'formik';
import * as React from 'react';
import {
    StatusBar,
    StyleSheet,
    Image,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Pressable
} from 'react-native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Images from '../../../assests';
import { API_URL } from '../../../config';
import { Colors } from '../../../theme';
import { styles } from './ForgotPasswordStyles';
import { NavigationRoutes, Strings } from '../../../constants';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    // Calculate the header height based on the device's screen height (adjust this as needed)
    const screenHeight = Dimensions.get('window').height;
    const headerHeight = screenHeight * 0.3; // Adjust the multiplier as needed
    const [ErrorMessage, setErrorMessage] = React.useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .trim()
                .required('Email is required')
                .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, 'Email is not valid'),
        }),
        enableReinitialize: true,
        onSubmit: async values => {
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let raw = JSON.stringify({
                email: values.email,
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            };

            fetch(API_URL + 'api/user/forgotPassword', requestOptions)
                .then(response => response.json())
                .then(async result => {
                    console.log(result);
                    if (result.message === 'OTP sent on email.') {
                        await AsyncStorage.setItem('emailId', values.email);
                        navigation.navigate('ForgotOtp');
                    } else {
                        console.log('IN');
                        setErrorMessage(result.message);
                    }
                })
                .catch(error => console.log('error', error));
        },
    });

    return (
        <ScrollView style={styles.main} >
            <StatusBar
                animated={true}
                backgroundColor={Colors.statusBar}
                networkActivityIndicatorVisible={true}
                currentHeight={true}
                translucent={true}
            />
            <Image
                source={Images.loginBG}
                style={styles.topImage}
            />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>{Strings.forgotPassword}</Text>
                <Text style={styles.welcomeInfo}>
                    {Strings.welcomeText}
                </Text>
                {/* Input fields for email and password */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Entered your registered email"
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    defaultValue={formik.values.email}
                    placeholderTextColor={Colors.gray}
                />
                {formik.errors.email && (
                    <Text style={styles.errorText}>
                        {formik.errors.email}
                    </Text>
                )}
                <View style={styles.button}>
                    <Pressable
                        onPress={
                            () => navigation.navigate(NavigationRoutes.forgotOtpScreen)
                            // formik.handleSubmit
                        }>
                        <Text style={styles.buttonText}>{Strings.forgot}</Text>
                    </Pressable>
                </View>
                {ErrorMessage && (
                    <Text
                        style={styles.error}>
                        {ErrorMessage}
                    </Text>
                )}
                <Text
                    style={styles.createAccount}
                    onPress={() => navigation.navigate(NavigationRoutes.signup)}>
                    {Strings.doNotHaveAccount}
                </Text>
            </View>
        </ScrollView>
    );
}

export default ForgotPasswordScreen;
