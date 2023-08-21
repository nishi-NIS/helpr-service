import React from "react";
import { ScrollView, StatusBar, Text, View, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../../theme";
import { styles } from "./SignupStyles";
import Images from "../../../assests";
import { NavigationRoutes, Strings } from "../../../constants";
import { useNavigation } from '@react-navigation/native';

const SignupScreen2 = () => {
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
                <Pressable onPress={() => navigation.goBack()} >
                    <Text style={styles.tabText} >{Strings.signup2}</Text>
                </Pressable>
            </View>
            <View style={styles.inputOuterView} >
                <View style={styles.inputInnerView} >
                    <Image
                        source={Images.loginBG}
                        style={styles.inputUploadImg}
                    />
                    <Text style={styles.inputUploadText} >
                        {Strings.uploadPic}
                    </Text>
                </View>
            </View>
            <View style={styles.inputOuterView} >
                <View style={styles.inputInnerView} >
                    <Image
                        source={Images.loginBG}
                        style={styles.inputUploadImg}
                    />
                    <Text style={styles.inputUploadText} >
                        {Strings.uploadPic}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => navigation.navigate(NavigationRoutes.otpScreen)} >
                <View style={styles.button} >
                    <Text style={styles.buttonText}>{Strings.signUp}</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
};

export default SignupScreen2;
