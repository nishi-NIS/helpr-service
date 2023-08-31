import React, {useRef} from 'react';
import {ActivityIndicator, PermissionsAndroid, StyleSheet} from 'react-native';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {
  EndPoints,
  NavigationRoutes,
  SignupValidationSchema,
  SignupValidationSchema2,
} from '../../../constants';
import {API_URL} from '../../../config';
import {useDispatch, useSelector} from 'react-redux';
import {SignUpUser} from '../../../redux/auth/AuthService';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Images from '../../../assests';

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
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [value, setValue] = React.useState({
    profilePic: Images.loginBG,
    firstName: 'Nishi',
    lastName: 'Vanani',
    email: 'nishivanani@gmail.com',
    phone: '7041902666',
    password: 'Nishi@123',
    confirmPassword: 'Nishi@123',
  });
  // console.log('value---', value)
  // const devices = useCameraDevices('wide-angle-camera');
  const devices = useCameraDevices();
  // const device = devices.back;
  const camera = useRef(null);

  const [serviceList, setServiceList] = React.useState('');
  const [serviceArray, setServiceArray] = React.useState('');
  const [serviceId, setServiceId] = React.useState('');
  // console.log('serviceId', serviceId)

  const fetchServiceOptions = () => {
    let requestOptions = {
      method: 'GET',
    };

    fetch(API_URL + EndPoints.services, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log('data', data?.services)
        setServiceArray(data?.services);
      })
      .catch(error => {
        console.log('Error fetching service options:', error);
      });
  };

  const takePicture = async () => {
    if (camera != null) {
      const photo = await camera.current.takePhoto();
      console.log('photo', photo.path);
      setImageSource(photo.path);
      setShowCamera(false);
    }
  };

  const initialValues = {
    profilePic: Images.loginBG,
    firstName: 'Nishi',
    lastName: 'Vanani',
    email: 'nishivanani6@gmail.com',
    phone: '7041902666',
    password: 'Nishi@123',
    confirmPassword: 'Nishi@123',
  };

  const initialValues2 = {
    businessLicense: Images.loginBG,
    passportOrLicense: Images.loginBG,
    services: '',
    signature: 'Nishi',
  };

  const onSubmit = values => {
    setErrorMessage(false);
    var firstScreenValues = {
      profilePic: values?.profilePic,
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email,
      phone: values?.phone,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    };
    setValue(firstScreenValues);
    navigation.navigate(NavigationRoutes.signup2);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupValidationSchema,
    // enableReinitialize: true,
    onSubmit: onSubmit,
  });

  let selectedServiceId = [
    {
      id: serviceId,
      value: '0',
    },
  ];

  // console.log("serviceId", serviceId)

  const handleOnSubmit = values => {
    setErrorMessage(false);
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');
    console.log('value', value);

    let raw = JSON.stringify({
      ...value,
      businessLicense: values.businessLicense,
      passportOrLicense: values.passportOrLicense,
      services: values.services,
      signature: values.signature,
      selectedServiceId,
    });
    console.log('raw', raw);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(API_URL + 'signup', requestOptions)
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(async result => {
        console.log('result', result);
      })
      .catch(error => {
        // Handle error here (e.g., show error message)
        console.log('error--', error);
      })

      //   if (!result.status) {
      //     setErrorMessage(result.message);
      //   } else {
      //     navigation.navigate(NavigationRoutes.otpScreen, {
      //       headersLable: 'Verify Email',
      //       headersSub: 'OTP has been sent on Emai',
      //     //   resend: this.OTPResend,
      //     //   verify: this.OTPVerify,
      //     //   backToLogin: false,
      //     });
      //   }
      //   // Handle API response here (e.g., show success message)
      //   console.log(result);

      .catch(error => {
        console.log('error--', error);
      });
  };

  const formik2 = useFormik({
    initialValues: initialValues2,
    validationSchema: SignupValidationSchema2,
    // enableReinitialize: true,
    onSubmit: handleOnSubmit,
    // onSubmit: () => console.log("Pressed")
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
    serviceList,
    setServiceList,
    serviceArray,
    setServiceArray,
    fetchServiceOptions,
    serviceId,
    setServiceId,
    // requestCameraPermission
  };
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

// useEffect(() => {
//     checkPermissions();
// }, []);

// useEffect(() => {
//     if (newUser != undefined) {
//         navigation.navigate(NavigationRoutes.signup2)
//     }
//     // dispatch(SignUpUser());
//     // console.log('newUser', newUser);
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
//         console.log('response--', response)

//         // if (response.error) {
//         //     console.log('----error----', response.error. message)
//         // }
//         // else {
//         //     navigation.navigate(NavigationRoutes.signup2)
//         // }
//     })
//     // console.log('newUser', newUser);
// };

// const checkPermissions = async () => {
//     const cameraPermission = await Camera.getCameraPermissionStatus();
//     console.log('cameraPermission', cameraPermission)
// };
