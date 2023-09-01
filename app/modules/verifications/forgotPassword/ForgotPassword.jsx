import {useFormik} from 'formik';
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
  Pressable,
} from 'react-native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../assests';
import {API_URL} from '../../../config';
import {Colors} from '../../../theme';
import {styles} from './ForgotPasswordStyles';
import {EndPoints, NavigationRoutes, Strings} from '../../../constants';

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
      console.log('INSIDE');
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

      fetch(API_URL + EndPoints.forgotPassword, requestOptions)
        .then(response => response.json())
        .then(async result => {
          console.log(result);
          if (result.message === 'OTP sent on email.') {
            await AsyncStorage.setItem('emailId', values.email);
            navigation.navigate(NavigationRoutes.forgotOtpScreen);
          } else {
            console.log('IN');
            setErrorMessage(result.message);
          }
        })
        .catch(error => console.log('error', error));
    },
  });

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
        <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>{Strings.forgotPassword}</Text>
        <Text style={styles.subWelcomeText}>{Strings.welcomeText}</Text>
      </View>
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
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        )}
        <Pressable onPress={formik.handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{Strings.forgot}</Text>
          </View>
        </Pressable>
        {ErrorMessage && <Text style={styles.error}>{ErrorMessage}</Text>}
        <Text
          style={styles.createAccount}
          onPress={() => navigation.navigate(NavigationRoutes.signup)}>
          {Strings.doNotHaveAccount}
        </Text>
      </View>
    </>
  );
};

export default ForgotPasswordScreen;
