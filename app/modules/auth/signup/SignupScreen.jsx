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
        <Pressable onPress={navigateToSignIn}>
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
            borderRadius: moderateScale(100),
          }}
          onPress={() => setShowImageModal(true)}>
          <View style={styles.uploadInnerView}>
            <FilePlus
              size={moderateScale(28)}
              color={Colors.gray}
              //  weight="bold"
            />
            <Text style={styles.uploadText}>{Strings.uploadProfile}</Text>
            <Text style={styles.pictureText}>{Strings.picture}</Text>
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
          <View style={styles.modalOuterView}>
            <View style={styles.modalInnerView}>
              <Text style={styles.selectOneText}>Select One</Text>
              <View style={styles.labelView}>
                <TouchableOpacity
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
                  <Text style={styles.labelText}>Open Camera</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.labelView}>
                <TouchableOpacity
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
                  <Text style={styles.labelText}>Open Gallery</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cancelView}>
                <View style={styles.labelView}>
                  <TouchableOpacity onPress={() => setShowImageModal(false)}>
                    <Text style={styles.labelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
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
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.firstName && errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}
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
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.lastName && errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}
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
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.email && errors.email && (
          <Text style={styles.errorText}>{errors.email}</Text>
        )}
      </View>
      <View style={styles.outerTextInputView}>
        <View style={styles.textInputView}>
          <CustomTextInput
            placeholder={Strings.mobileNumber}
            secureTextEntry={false}
            maxLength={10}
            keyboardType="number-pad"
            name="phone"
            handleChange={handleChange}
            handleBlur={handleBlur}
            formik={formik}
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.phone && errors.phone && (
          <Text style={styles.errorText}>{errors.phone}</Text>
        )}
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
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.password && errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
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
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.confirmPassword && errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
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
