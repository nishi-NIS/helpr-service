import React from "react";
import { ScrollView, StatusBar, Text, View, Image, Pressable, Modal, TextInput, Linking } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";
import { styles } from "./SignupStyles";
import Images from "../../../assests";
import { NavigationRoutes, Strings } from "../../../constants";
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { CaretDown, FilePlus } from "phosphor-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CheckBox from "@react-native-community/checkbox";
import useSign2 from "./useSign2";

const SignupScreen2 = () => {
    const navigation = useNavigation();
    // const serviceOptions = [];
    // const [selectedValue, setSelectedValue] = React.useState('');
    // const [showDropdown, setShowDropdown] = React.useState(false);
    // const [isSelected, setIsSelected] = React.useState(false);

    // const options = ['Plumbing', 'Cleaning', 'Dusting',];

    // const handleOptionSelect = (option) => {
    //     setSelectedValue(option);
    //     setShowDropdown(false);
    // };

    const {
        selectedValue, 
        setSelectedValue,
        showDropdown, 
        setShowDropdown,
        isSelected, 
        setIsSelected,
        options,
        handleOptionSelect,
        navigateBack,
        navigateToOtpScreen
    } = useSign2();

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
                <Pressable onPress={navigateBack} >
                    <Text style={styles.tabText} >{Strings.signup2}</Text>
                </Pressable>
            </View>
            <View style={styles.inputOuterView} >
                <View style={styles.inputInnerView} >
                    <FilePlus
                        size={moderateScale(30)}
                    // style={styles.inputUploadImg}
                    />
                    <Text style={styles.inputUploadText} >
                        {Strings.uploadPic}
                    </Text>
                </View>
            </View>
            <View style={styles.inputOuterView} >
                <View style={styles.inputInnerView} >
                    <FilePlus size={moderateScale(30)} />
                    <Text style={styles.inputUploadText} >
                        {Strings.uploadPic}
                    </Text>
                </View>
            </View>
            <View style={styles.dropdownContainer}>
                <Pressable onPress={() => setShowDropdown(true)}>
                    <View style={styles.dropdownInnerView} >
                        {selectedValue ? (
                            <Text
                                style={styles.dropdownTextSelected} >
                                {selectedValue}
                            </Text>
                        ) : (
                            <Text
                                style={styles.dropdownText} >
                                {Strings.selectServices}
                            </Text>
                        )}
                        <CaretDown
                            size={moderateScale(18)}
                            color={Colors.black}
                            weight="bold"
                        />
                    </View>
                </Pressable>
                <Modal
                    visible={showDropdown}
                    animationType="none"
                    transparent={true}
                    propagateSwipe={true}
                >
                    {/* <ScrollView style={{flex: 1}} > */}
                    <View
                        // style={{ flex: 1, alignItems: "center" }}
                        style={styles.modalOuterView}
                    >
                        <View
                            style={styles.modalView}
                        >
                            {options.map((option) => (
                                <Pressable
                                    key={option}
                                    style={styles.option}
                                    onPress={() => handleOptionSelect(option)}>
                                    <Text style={{ color: Colors.black }} >{option}</Text>
                                </Pressable>
                            ))}
                            <Pressable onPress={() => setShowDropdown(false)}>
                                <Text style={{ color: Colors.black, }} >Close</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* </ScrollView> */}
                </Modal>
            </View>
            <View style={{ marginTop: verticalScale(12), }} >
                <View style={{
                    paddingHorizontal: horizontalScale(10),
                    marginHorizontal: horizontalScale(10),
                    borderWidth: moderateScale(1),
                    borderColor: Colors.theme,
                    height: verticalScale(45),
                    borderRadius: moderateScale(8),
                    backgroundColor: Colors.offWhite,
                }} >
                    <TextInput
                        placeholder={Strings.electronicSignature}
                        placeholderTextColor={Colors.gray}
                        style={{
                            color: Colors.black,
                            fontWeight: '500',
                            flex: 1,
                            textAlignVertical: "center",
                        }}
                    />
                </View>
            </View>
            {/* <View style={styles.outerTextInputView} >
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
            </View> */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    tintColor={Colors.tintColor}
                    boxType="square"
                    tintColors={{ false: Colors.tintColor }}
                />
                <View style={styles.contractView} >
                    <Text style={styles.label}>{Strings.iAgree}</Text>
                    <Text
                        style={styles.contractText}
                        onPress={() => Linking.openURL('http://google.com')}
                    >{Strings.contractText}</Text>
                </View>
            </View>
            <Text style={styles.confirmContract} >{Strings.confirmContract}</Text>
            <Pressable onPress={navigateToOtpScreen} >
                <View style={styles.button} >
                    <Text style={styles.buttonText}>{Strings.signUp}</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
};

export default SignupScreen2;
