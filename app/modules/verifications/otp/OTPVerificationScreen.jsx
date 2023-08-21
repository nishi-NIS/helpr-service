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
    Pressable
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../../config';
import Images from '../../../assests';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../../theme';
import { NavigationRoutes, Strings } from '../../../constants';
import { styles } from './OTPStyles';

const OTPVerificationScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = React.useState('');
    const [showResendButton, setShowResendButton] = React.useState(false);
    const [ErrorMessage, setErrorMessage] = React.useState('');

    // Calculate the header height based on the device's screen height (adjust this as needed)
    const screenHeight = Dimensions.get('window').height;
    const headerHeight = screenHeight * 0.3; // Adjust the multiplier as needed

    React.useEffect(() => {
        if (!showResendButton) {
            setTimeout(() => {
                setShowResendButton(true);
            }, 30000);
        }
    }, [showResendButton]);

    const onResend = async () => {
        const value = await AsyncStorage.getItem('emailId');
        console.log(value);

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let raw = JSON.stringify({
            email: value,
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };
        setShowResendButton(false);

        fetch(API_URL + 'api/user/resendOtp', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log('error', error));
    };

    const onOtpSubmit = async () => {
        setErrorMessage('');
        const value = await AsyncStorage.getItem('emailId');

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let raw = JSON.stringify({
            email: value,
            otp: code,
        });
        console.log(raw);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch(API_URL + 'api/user/verifyEmail', requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.message === 'Email verified successfully.') {
                    navigation.navigate(NavigationRoutes.login);
                } else {
                    setErrorMessage(result.message);
                }
            })
            .catch(error => console.log('error', error));
    };

    return (
        <>
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
                <Text style={styles.welcomeText}>{Strings.verifyOTP}</Text>
                <Text style={styles.welcomeInfo}>
                    {Strings.otpHead}
                </Text>
                {/* Input fields for email and password */}
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.otpText} >{Strings.otp}</Text>
                    {/* <OTPInputView
                        style={{ width: '80%', height: 50 }}
                        pinCount={4}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeChanged={code => setCode(code)}
                        code={code}
                    /> */}
                </View>
                <View style={styles.rememberMeView}>
                    {showResendButton && (
                        <View style={styles.forgotPassword}>
                            <Text
                                style={{ color: Colors.theme, textDecorationLine: 'underline' }}
                                onPress={onResend}>
                                {Strings.resend}
                            </Text>
                        </View>
                    )}
                </View>
                <Pressable
                    style={styles.button}
                    disabled={code.length < 4}
                    onPress={onOtpSubmit}>
                    <Text style={styles.buttonText}>{Strings.verify}</Text>
                </Pressable>
                {ErrorMessage && (
                    <Text
                        style={styles.error}>
                        {ErrorMessage}
                    </Text>
                )}
            </View>
        </>
    );
}

export default OTPVerificationScreen;
