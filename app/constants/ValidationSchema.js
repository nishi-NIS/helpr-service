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
    profilePic: Yup
    .string()
    .required(Strings.photoRequired),

    firstName: Yup
    .string()
    .required(Strings.firstnameRequired)
    .min(3, Strings.minName)
    .max(10, Strings.maxName),

    lastName: Yup
    .string()
    .required(Strings.lastnameRequired)
    .min(3, Strings.minName)
    .max(10, Strings.maxName),
    
    email: Yup
    .string()
    .matches(Regex.email, Strings.invalidEmail)
    .required(Strings.emailRequired),
    
    phone: Yup
    .string()
    .matches(Regex.phoneNumber, Strings.invalidNumber)
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

export const SignupValidationSchema2 = Yup.object().shape({
    businessLicense: Yup
    .string()
    .required(Strings.businessLicenseRequired),

    passportOrLicense: Yup
    .string()
    .required(Strings.passportOrLicenseRequired),

    services: Yup
    .string()
    .required(Strings.servicesRequired),

    signature: Yup
    .string()
    .required(Strings.signatureRequired),

    acceptTerms: Yup
    .string()
    .required(Strings.acceptTermsRequired)
});
