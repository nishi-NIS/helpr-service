import * as Yup from 'yup';
import Strings from './Strings';
import Regex from './Regex';

export const LoginValidationSchema = Yup.object().shape({
    email: Yup
    .string()
    .matches(Regex.email, Strings.invalidEmail)
    .required(Strings.emailRequired),

    password: Yup
    .string()
    .matches(Regex.password, Strings.invalidPassword)
    .required(Strings.passwordRequired)
    .min(8, Strings.minPassword)
    .max(12, Strings.maxPassword)
});

export const SignupValidationSchema = Yup.object().shape({
    firstname: Yup
    .string()
    .required(Strings.firstnameRequired)
    .min(3, Strings.minName)
    .max(10, Strings.maxName),

    lastname: Yup
    .string()
    .required(Strings.lastnameRequired)
    .min(3, Strings.minName)
    .max(10, Strings.maxName),
    
    email: Yup
    .string()
    .matches(Regex.email, Strings.invalidEmail)
    .required(Strings.emailRequired),
    
    mobileNumber: Yup
    .string()
    // .matches(Regex.phoneNumber, Strings.invalidNumber)
    .required(Strings.mobileRequired),
    
    password: Yup
    .string()
    .matches(Regex.password, Strings.invalidPassword)
    .required(Strings.passwordRequired)
    .min(8, Strings.minPassword)
    .max(12, Strings.maxPassword),
    
    confirmPassword: Yup
    .string()
    .required(Strings.confirmPasswordRequired)
    .oneOf([Yup.ref('password')], Strings.noMatchPassword)
});