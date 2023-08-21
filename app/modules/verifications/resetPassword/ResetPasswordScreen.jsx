import * as React from 'react';
import { Text, View, ScrollView, TextInput, StatusBar, Image, Dimensions, Pressable } from 'react-native';
import Images from '../../../assests';
import { Colors } from '../../../theme';
import { NavigationRoutes, Strings } from '../../../constants';
import { styles } from './ResetPasswordStyles';
import { API_URL } from '../../../config';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    const [ErrorMessage, setErrorMessage] = React.useState('');
    // Calculate the header height based on the device's screen height (adjust this as needed)
    const screenHeight = Dimensions.get('window').height;
    const headerHeight = screenHeight * 0.3; // Adjust the multiplier as needed

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object().shape({
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .trim()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Password does not match'),
        }),
        enableReinitialize: true,
        onSubmit: async values => {
            const value = await AsyncStorage.getItem('emailId');

            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let raw = JSON.stringify({
                email: value,
                password: values.password,
                confirmPassword: values.confirmPassword,
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            };

            fetch(API_URL + 'api/user/resetPassword', requestOptions)
                .then(response => response.json())
                .then(async result => {
                    console.log(result);
                    if (result.message === 'Password reset successfully!') {
                        navigation.navigate('Login');
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
                <Text style={styles.welcomeText}>{Strings.resetPassword}</Text>
                <Text style={styles.welcomeInfo}>
                    {Strings.welcomeText}
                </Text>
                {/* Input fields for email and password */}
                <TextInput
                    style={styles.textInput}
                    placeholder="New Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    defaultValue={formik.values.password}
                />
                {formik.errors.password && (
                    <Text style={styles.errorText}>
                        {formik.errors.password}
                    </Text>
                )}
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirm New Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry
                    onChangeText={formik.handleChange('confirmPassword')}
                    onBlur={formik.handleBlur('confirmPassword')}
                    defaultValue={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && (
                    <Text style={styles.errorText}>
                        {formik.errors.confirmPassword}
                    </Text>
                )}
            </View>
            <View style={styles.button}>
                    <Pressable
                        onPress={
                            () => navigation.navigate(NavigationRoutes.login)
                            // formik.handleSubmit
                        }>
                        <Text style={styles.buttonText}>{Strings.submit}</Text>
                    </Pressable>
                </View>
                <Text
                style={styles.createAccount}
                onPress={() => navigation.navigate(NavigationRoutes.login)}>
                {Strings.backToLogin}
            </Text>
        </ScrollView>
    );
};

export default ResetPasswordScreen;
