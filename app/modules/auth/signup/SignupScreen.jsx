import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import Images from '../../../assests';
import {styles} from './SignupStyles';
import {NavigationRoutes, Strings} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {CustomTextInput} from '../../../components';
import useSignup from './useSignup';
import {FilePlus} from 'phosphor-react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import ImagePicker from 'react-native-image-picker';

const SignupScreen = () => {
  const {
    formik,
    navigateToSignIn,
    navigateGoBack,
    navigateToSignup2,
    focused,
    ErrorMessage,
    setErrorMessage,
    requestCameraPermission,
  } = useSignup();
  const {handleSubmit, errors, touched, values, handleChange, handleBlur} =
    formik;

  const [selectedImage, setSelectedImage] = React.useState(null);
  const [showImageModal, setShowImageModal] = React.useState(false);

  // request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
  //     console.log("Result", request)
  // })

  const openImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  };

  const openCameraFunc = async () => {
    const response = await launchCamera({
      mediaType: 'photo',
      maxHeight: 200,
      height: 200,
      includeExtra: true,
    });
    console.log('Response', response);
    // setSelectedImage([...selectedImage, ...response.assets])
  };

  // ImagePicker.showImagePicker(options, (response) => {
  //     if (response.)
  // })

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
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>{Strings.createAccount}</Text>
        <Text style={styles.subWelcomeText}>{Strings.welcomeText}</Text>
      </View>
      <View style={styles.tabTextView}>
        <Pressable onPress={navigateGoBack}>
          <Text
            style={
              focused == false ? styles.focusedText : styles.unFocusedText
            }>
            {Strings.signIn}
          </Text>
        </Pressable>
        <Text style={styles.pipeLine}>{Strings.verticalPipe}</Text>
        <Text
          style={focused == true ? styles.focusedText : styles.unFocusedText}>
          {Strings.signUp}
        </Text>
      </View>
      <View style={styles.uploadOuterView}>
        <Pressable
          style={{
            // borderWidth: 1,
            borderRadius: moderateScale(100),
          }}
          onPress={() => setShowImageModal(true)}>
          <View style={styles.uploadInnerView}>
            <FilePlus
              size={moderateScale(28)}
              color={Colors.gray}
              //  weight="bold"
            />
            <Text style={styles.uploadText}>{Strings.uploadPic}</Text>
          </View>
          <View style={styles.photoError}>
            {touched.profilePic && errors.profilePic && (
              <Text style={styles.photoErrorText}>{errors.profilePic}</Text>
            )}
          </View>
        </Pressable>
        <Modal
          transparent={true}
          visible={showImageModal}
          onRequestClose={() => {}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: 300,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Text
                style={{
                  padding: 10,
                  color: '#000',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                Select One
              </Text>
              <TouchableOpacity
                style={{padding: 10, backgroundColor: '#FBF7FB'}}
                // onPress={async () => {
                //     const pickerResult = await ImagePicker.launchCamera({
                //         mediaType: 'photo',
                //         maxHeight: 200,
                //         height: 200,
                //         includeExtra: true,
                //     });
                //     console.log(pickerResult);
                //     if (pickerResult?.assets) {
                //         setSelectedImage({ profilePic: pickerResult?.assets[0] });
                //     }
                //     setSelectedImage({ isProfile: false });
                // }}
                // onPress={openCameraFunc}
                // onPress={requestCameraPermission}
              >
                <Text style={{color: Colors.black}}>Open Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#FBF7FB',
                  marginTop: 10,
                }}
                onPress={async () => {
                  const pickerResult = await ImagePicker.launchImageLibrary({
                    mediaType: 'photo',
                    maxHeight: 200,
                    height: 200,
                    includeExtra: true,
                  });
                  console.log(pickerResult);
                  if (pickerResult?.assets) {
                    setSelectedImage({profilePic: pickerResult?.assets[0]});
                  }
                  setSelectedImage({isProfile: false});
                }}>
                <Text style={{color: Colors.black}}>Open Gallery</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: '#FFFFFF',
                    marginTop: 10,
                  }}
                  onPress={() => setShowImageModal(false)}>
                  <Text style={{color: 'black'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.firstname}
            secureTextEntry={false}
            keyboardType="default"
            name="firstName"
            editable={false}
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
          <View style={styles.errorView}>
            {touched.firstName && errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.lastname}
            secureTextEntry={false}
            keyboardType="default"
            name="lastName"
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
          <View style={styles.errorView}>
            {touched.lastName && errors.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.email}
            secureTextEntry={false}
            keyboardType="email-address"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
          <View style={styles.errorView}>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.mobileNumber}
            secureTextEntry={false}
            keyboardType="number-pad"
            name="phone"
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
          <View style={styles.errorView}>
            {touched.phone && errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.password}
            secureTextEntry={false}
            keyboardType="default"
            name="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
          <View style={styles.errorView}>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.confirmPassword}
            secureTextEntry={false}
            keyboardType="default"
            name="confirmPassword"
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
          <View style={styles.errorView}>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={
          // navigateToSignup2
          handleSubmit
          // navigation.navigate(NavigationRoutes.signup2)
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{Strings.next}</Text>
        </View>
      </TouchableOpacity>
      <Pressable onPress={navigateToSignIn}>
        <Text style={styles.createAccount}>{Strings.haveAccount}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SignupScreen;
