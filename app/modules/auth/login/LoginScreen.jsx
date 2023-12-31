import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '../../../assests';
import {CustomTextInput} from '../../../components';
import {Colors, moderateScale, verticalScale} from '../../../theme';
import {styles} from './LoginStyles';
import {useLogin} from './useLogin';
import {NavigationRoutes, Strings} from '../../../constants';
import {Eye, EyeClosed, EyeSlash, Heart} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const {
    formik,
    isSelected,
    secureTextEntry,
    focused,
    toggleSecureText,
    setSecureTextEntry,
    setIsSelected,
    navigateToSignup,
    navigateToForgotPassword,
  } = useLogin();
  const {handleSubmit, errors, touched, values, handleChange, handleBlur} =
    formik;
  const navigation = useNavigation();

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
        <Text style={styles.welcomeText}>{Strings.welcomeBack}</Text>
        <Text style={styles.subWelcomeText}>{Strings.welcomeText}</Text>
      </View>
      <View style={styles.tabTextView}>
        <Text
          style={focused == true ? styles.focusedText : styles.unFocusedText}>
          {Strings.signIn}
        </Text>
        <Text style={styles.pipeLine}>{Strings.verticalPipe}</Text>
        <Pressable onPress={navigateToSignup}>
          <Text
            style={
              focused == false ? styles.focusedText : styles.unFocusedText
            }>
            {Strings.signUp}
          </Text>
        </Pressable>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomTextInput
              placeholder={Strings.password}
              secureTextEntry={secureTextEntry}
              keyboardType="default"
              name="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              formik={formik}
              style={styles.textInput}
            />
            <View style={{alignSelf: 'center'}}>
              <Pressable onPress={toggleSecureText}>
                {secureTextEntry ? (
                  <Eye
                    color={Colors.gray}
                    weight="regular"
                    size={moderateScale(20)}
                  />
                ) : (
                  <EyeSlash
                    color={Colors.gray}
                    weight="regular"
                    size={moderateScale(20)}
                  />
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.errorView}>
        {touched.password && errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>
      <View style={styles.rememberMeView}>
        <View style={styles.rememberMe}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setIsSelected}
              style={styles.checkbox}
              tintColor={Colors.tintColor}
              boxType="square"
              tintColors={{false: Colors.tintColor}}
            />
            <Text style={styles.label}>{Strings.rememberMe}</Text>
          </View>
        </View>
        <View style={styles.forgotPassword}>
          <Pressable onPress={navigateToForgotPassword}>
            <Text style={styles.forgetPasswordText}>
              {Strings.forgetPassword}
            </Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity
        onPress={
          handleSubmit
          // navigation.replace(NavigationRoutes.drawerRoutes)
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{Strings.signIn}</Text>
        </View>
      </TouchableOpacity>
      <Pressable onPress={navigateToSignup}>
        <Text style={styles.createAccount}>{Strings.doNotHaveAccount}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default LoginScreen;
