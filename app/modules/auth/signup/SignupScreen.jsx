import React from "react";
import { Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";
import Images from "../../../assests";
import { styles } from "./SignupStyles";
import { NavigationRoutes, Strings } from "../../../constants";
import { useNavigation } from '@react-navigation/native';
import { CustomTextInput } from "../../../components";
import useSignup from "./useSignup";

const SignupScreen = () => {
    const { formik, navigateToSignIn, navigateGoBack } = useSignup();
    const { handleSubmit, errors, touched, values, handleChange, handleBlur } = formik;
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.main} >
            <StatusBar
                animated={true}
                backgroundColor={Colors.statusBar}
                networkActivityIndicatorVisible={true}
                currentHeight={true}
                translucent={true}
            />
            <Image
                source={Images.loginBG}
                style={styles.topImage}
            />
            <View style={styles.welcomeView} >
                <Text style={styles.welcomeText}>{Strings.createAccount}</Text>
                <Text style={styles.subWelcomeText} >{Strings.welcomeText}</Text>
            </View>
            <View style={styles.tabTextView} >
                <Pressable onPress={navigateGoBack} >
                    <Text style={styles.tabText} >{Strings.signIn}</Text>
                </Pressable>
                <Text style={styles.pipeLine} >{Strings.verticalPipe}</Text>
                <Text style={styles.tabText} >{Strings.signUp}</Text>
            </View>
            <View style={styles.uploadOuterView} >
                <View style={styles.uploadInnerView} >
                    <Image
                        source={Images.loginBG}
                        style={styles.uploadImg}
                    />
                    <Text style={styles.uploadText} >
                        {Strings.uploadPic}
                    </Text>
                </View>
            </View>
            <View style={styles.outerTextInputView} >
                <View style={styles.textInputView} >
                    <CustomTextInput
                        placeholder={Strings.firstname}
                        secureTextEntry={false}
                        keyboardType="default"
                        name="firstname"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        formik={formik}
                        style={styles.textInput}
                    />
                    <View style={styles.errorView} >
                        {touched.firstname && errors.firstname && (
                            <Text style={styles.errorText}>
                                {errors.firstname}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.outerTextInputView} >
                <View style={styles.textInputView} >
                    <CustomTextInput
                        placeholder={Strings.lastname}
                        secureTextEntry={false}
                        keyboardType="default"
                        name="lastname"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        formik={formik}
                        style={styles.textInput}
                    />
                    <View style={styles.errorView} >
                        {touched.lastname && errors.lastname && (
                            <Text style={styles.errorText}>
                                {errors.lastname}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.outerTextInputView} >
                <View style={styles.textInputView} >
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
                    <View style={styles.errorView} >
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>
                                {errors.email}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.outerTextInputView} >
                <View style={styles.textInputView} >
                    <CustomTextInput
                        placeholder={Strings.mobileNumber}
                        secureTextEntry={false}
                        keyboardType="default"
                        name="mobileNumber"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        formik={formik}
                        style={styles.textInput}
                    />
                    <View style={styles.errorView} >
                        {touched.mobileNumber && errors.mobileNumber && (
                            <Text style={styles.errorText}>
                                {errors.mobileNumber}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.outerTextInputView} >
                <View style={styles.textInputView} >
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
                    <View style={styles.errorView} >
                        {touched.password && errors.password && (
                            <Text style={styles.errorText}>
                                {errors.password}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.outerTextInputView} >
                <View style={styles.textInputView} >
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
                    <View style={styles.errorView} >
                        {touched.confirmPassword && errors.confirmPassword && (
                            <Text style={styles.errorText}>
                                {errors.confirmPassword}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationRoutes.signup2)
                // handleSubmit
                // navigation.navigate(NavigationRoutes.signup2)
            } >
                <View style={styles.button} >
                    <Text style={styles.buttonText}>{Strings.next}</Text>
                </View>
            </TouchableOpacity>
            <Pressable onPress={navigateToSignIn} >
                <Text style={styles.createAccount} >
                    {Strings.haveAccount}
                </Text>
            </Pressable>
        </ScrollView>
    );
};

export default SignupScreen;
