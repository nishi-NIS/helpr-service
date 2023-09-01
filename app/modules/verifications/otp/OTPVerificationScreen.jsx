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
  Pressable,
  Button,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../config';
import Images from '../../../assests';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import {EndPoints, NavigationRoutes, Strings} from '../../../constants';
import {styles} from './OTPStyles';
import CountDown from 'react-native-countdown-component';

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
      }, 10000);
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

    fetch(API_URL + EndPoints.userResendOtp, requestOptions)
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

    fetch(API_URL + EndPoints.verifyEmail, requestOptions)
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
      <Image source={Images.loginBG} style={styles.topImage} />
      <View style={styles.container}>
        <View style={styles.welcomeView}></View>
        <Text style={styles.welcomeText}>{Strings.verifyOTP}</Text>
        <Text style={styles.subWelcomeText}>{Strings.otpHead}</Text>
        {/* Input fields for email and password */}
        <View style={styles.otpView}>
          <Text style={styles.otpText}>{Strings.otp}</Text>
          <OTPInputView
            style={{width: horizontalScale(300), height: verticalScale(50)}}
            pinCount={4}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={code => setCode(code)}
            code={code}
          />
        </View>
        <View style={styles.rememberMeView}>
          <View style={styles.timerView}>
            <Text style={styles.timerText}>{Strings.resendOtpIn}</Text>
            <CountDown
              size={moderateScale(8)}
              until={10}
              digitStyle={{
                backgroundColor: Colors.offWhite,
                borderWidth: moderateScale(1),
                borderColor: Colors.theme,
              }}
              // digitTxtStyle={{color: Colors.gray}}
              // timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
              separatorStyle={{color: Colors.theme}}
              timeToShow={['M', 'S']}
              timeLabels={{m: null, s: null}}
              showSeparator
            />
          </View>
          {showResendButton && (
            <Text style={styles.resendText} onPress={onResend}>
              {Strings.resend}
            </Text>
          )}
        </View>
        <Pressable disabled={code.length < 4} onPress={onOtpSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{Strings.verify}</Text>
          </View>
        </Pressable>
        {ErrorMessage && <Text style={styles.error}>{ErrorMessage}</Text>}
      </View>
    </>
  );
};

export default OTPVerificationScreen;
