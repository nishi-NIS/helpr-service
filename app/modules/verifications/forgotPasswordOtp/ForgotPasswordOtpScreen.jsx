// import * as React from 'react';
// import {
//   StatusBar,
//   StyleSheet,
//   Image,
//   View,
//   Dimensions,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {API_URL} from '../../config';
// import {useNavigation} from '@react-navigation/native';

// const ForgotPasswordOtpScreen = () => {
//   const navigation = useNavigation();
//   const [code, setCode] = React.useState('');
//   const [showResendButton, setShowResendButton] = React.useState(false);
//   const [ErrorMessage, setErrorMessage] = React.useState('');

//   // Calculate the header height based on the device's screen height (adjust this as needed)
//   const screenHeight = Dimensions.get('window').height;
//   const headerHeight = screenHeight * 0.3; // Adjust the multiplier as needed

//   React.useEffect(() => {
//     if (!showResendButton) {
//       setTimeout(() => {
//         setShowResendButton(true);
//       }, 30000);
//     }
//   }, [showResendButton]);

//   const onResend = async () => {
//     const value = await AsyncStorage.getItem('emailId');
//     console.log(value);

//     let myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     let raw = JSON.stringify({
//       email: value,
//     });

//     let requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };
//     setShowResendButton(false);

//     fetch(API_URL + 'api/user/resendOtp', requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result);
//       })
//       .catch(error => console.log('error', error));
//   };

//   const onOtpSubmit = async () => {
//     setErrorMessage('');
//     const value = await AsyncStorage.getItem('emailId');

//     let myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     let raw = JSON.stringify({
//       email: value,
//       otp: code,
//     });
//     console.log(raw);
//     let requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };

//     fetch(API_URL + 'api/user/checkForgotOtp', requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result);
//         if (result.message === 'OTP is correct. You can reset your password.') {
//           navigation.navigate('ResetPassword');
//         } else {
//           setErrorMessage(result.message);
//         }
//       })
//       .catch(error => console.log('error', error));
//   };

//   return (
//     <>
//       <StatusBar
//         animated={true}
//         backgroundColor="#5F1FA0"
//         networkActivityIndicatorVisible={true}
//         currentHeight={true}
//         translucent={true}
//       />
//       <View style={[styles.header, {height: headerHeight}]}>
//         <ImageBackground
//           source={require('../../../assets/images/header_image.jpg')}
//           resizeMode="cover"
//           style={styles.image}>
//           <Image
//             resizeMode="cover" // You can use 'cover' or 'contain' based on your preference
//             source={require('../../../assets/images/logo.png')}
//           />
//         </ImageBackground>
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.welcomeText}>Enter OTP</Text>
//         <Text style={styles.welcomeInfo}>
//           OTP has been sent on Mail & Phone No.
//         </Text>
//         {/* Input fields for email and password */}
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <OTPInputView
//             style={{width: '80%', height: 50}}
//             pinCount={4}
//             autoFocusOnLoad={false}
//             codeInputFieldStyle={styles.underlineStyleBase}
//             codeInputHighlightStyle={styles.underlineStyleHighLighted}
//             onCodeChanged={code => setCode(code)}
//             code={code}
//           />
//         </View>
//         <View style={styles.rememberMeView}>
//           {showResendButton && (
//             <View style={styles.forgotPassword}>
//               <Text
//                 style={{color: '#7F29D6', textDecorationLine: 'underline'}}
//                 onPress={onResend}>
//                 Resend?
//               </Text>
//             </View>
//           )}
//         </View>
//         <TouchableOpacity
//           style={styles.button}
//           disabled={code.length < 4}
//           onPress={onOtpSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//         {ErrorMessage && (
//           <Text
//             style={{
//               marginHorizontal: 20,
//               color: 'red',
//               fontSize: 12,
//               textAlign: 'center',
//             }}>
//             {ErrorMessage}
//           </Text>
//         )}
//         <Text
//           style={styles.createAccount}
//           onPress={() => navigation.navigate('Login')}>
//           Back to Login Page
//         </Text>
//       </View>
//     </>
//   );
// }

// export default ForgotPasswordOtpScreen;

// const styles = StyleSheet.create({
//   rememberMeView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 15,
//     marginRight: 40,
//   },
//   forgotPassword: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   borderStyleBase: {
//     width: 30,
//     height: 45,
//   },

//   borderStyleHighLighted: {
//     borderColor: 'black',
//   },

//   underlineStyleBase: {
//     width: 75,
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#7F29D6',
//     borderRadius: 10,
//     color: 'black',
//   },

//   underlineStyleHighLighted: {
//     borderColor: '#7F29D6',
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
//   headerImage: {
//     width: '100%',
//     height: '100%',
//   },
//   container: {
//     flex: 3,
//   },
//   welcomeText: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#7F29D6',
//     marginVertical: 20,
//   },
//   welcomeInfo: {
//     textAlign: 'center',
//     marginBottom: 20,
//     marginHorizontal: 130,
//     color: '#000000',
//   },
//   signInView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 15,
//     marginVertical: 20,
//   },
//   textPadding: {
//     paddingHorizontal: 10,
//     color: '#000000',
//     fontWeight: '500',
//   },
//   signInText: {
//     paddingHorizontal: 10,
//     color: '#7F29D6',
//     fontWeight: '500',
//   },
//   textInput: {
//     marginHorizontal: 20,
//     borderWidth: 1,
//     height: 40,
//     marginTop: 10,
//     borderColor: '#7F29D6',
//     borderRadius: 5,
//     backgroundColor: '#FBF7FB',
//     paddingLeft: 20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//   },
//   checkbox: {
//     borderColor: '#7F29D6',
//     borderRadius: 5,
//     backgroundColor: '#FBF7FB',
//   },
//   label: {
//     marginVertical: 8,
//     color: '#7F29D6',
//   },
//   createAccount: {
//     textAlign: 'center',
//     color: '#7F29D6',
//     textDecorationLine: 'underline',
//     fontWeight: '600',
//   },
//   button: {
//     backgroundColor: '#7F29D6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 140,
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//   },
// });

import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {Colors, verticalScale} from '../../../theme';
import Images from '../../../assests';
import {styles} from './forgotPasswordOtpStyles';
import {NavigationRoutes, Strings} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../config';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgotPasswordOtpScreen = () => {
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

    fetch(API_URL + 'resendOtp', requestOptions)
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

    fetch(API_URL + 'checkForgotOtp', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === 'OTP is correct. You can reset your password.') {
          navigation.navigate(NavigationRoutes.resetPasswordScreen);
        } else {
          setErrorMessage(result.message);
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <ScrollView style={styles.main}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.statusBar}
        networkActivityIndicatorVisible={true}
        currentHeight={true}
        translucent={true}
      />
      <Image source={Images.loginBG} style={styles.topImage} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>{Strings.forgotPassword}</Text>
        <Text style={styles.welcomeInfo}>{Strings.otpHead}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.otpText}>{Strings.otp}</Text>
        <OTPInputView
          style={{width: '80%', height: verticalScale(50)}}
          pinCount={4}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeChanged={code => setCode(code)}
          code={code}
        />
      </View>
      <View style={styles.rememberMeView}>
        {/* {showResendButton && ( */}
        <View style={styles.forgotPassword}>
          <Text
            style={{color: Colors.theme, textDecorationLine: 'underline'}}
            onPress={onResend}>
            {Strings.resend}
          </Text>
        </View>
        {/* )} */}
      </View>
      <Pressable style={styles.button} onPress={onOtpSubmit}>
        <Text style={styles.buttonText}>{Strings.verify}</Text>
      </Pressable>
      {ErrorMessage && <Text style={styles.error}>{ErrorMessage}</Text>}

      <Text
        style={styles.createAccount}
        onPress={() => navigation.navigate(NavigationRoutes.login)}>
        {Strings.backToLogin}
      </Text>
    </ScrollView>
  );
};

export default ForgotPasswordOtpScreen;
