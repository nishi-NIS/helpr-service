import React from 'react';
import {useFormik} from 'formik';
import {LoginValidationSchema, NavigationRoutes} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLogin = () => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = React.useState(false);
  const [ErrorMessage, setErrorMessage] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const focused = true;

  const navigateToSignup = () => navigation.navigate(NavigationRoutes.signup);
  const navigateToForgotPassword = () =>
    navigation.navigate(NavigationRoutes.forgotScreen);

  const toggleSecureText = () => {
    setSecureTextEntry(prevState => !prevState);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = values => {
    setErrorMessage(false);
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      email: values.email,
      password: values.password,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(API_URL + 'login', requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(result);
        if (result.token) {
          console.log("token", token)
          await AsyncStorage.setItem('token', result.token);
          navigation.replace(NavigationRoutes.drawerRoutes);
        } else {
          setErrorMessage(result.message);
        }
      })
      .catch(error => console.log('error', error));
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidationSchema,
    onSubmit: onSubmit,
  });

  return {
    formik,
    navigation,
    isSelected,
    setIsSelected,
    navigateToSignup,
    navigateToForgotPassword,
    secureTextEntry,
    setSecureTextEntry,
    focused,
    toggleSecureText,
    ErrorMessage,
  };
};
