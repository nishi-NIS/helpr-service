import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    // main: {
    //     flex: 1,
    //     backgroundColor: Colors.white
    // },
    topImage: {
        height: verticalScale(180),
        width: horizontalScale(375),
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        marginTop: verticalScale(16)
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    // text: {
    //     color: Colors.white,
    //     fontSize: moderateScale(42),
    //     lineHeight: verticalScale(84),
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     backgroundColor: Colors.lightBlack,
    // },
    container: {
        flex: 3,
    },
    welcomeView: {
        alignItems: "center",
        padding: moderateScale(15)
    },
    welcomeText: {
        textAlign: 'center',
        color: Colors.theme,
        marginVertical: verticalScale(20),
        fontSize: moderateScale(24),
        fontWeight: '600',
        color: Colors.theme
    },
    subWelcomeText: {
        fontSize: moderateScale(16),
        color: Colors.black,
        textAlign: "center",
        marginTop: verticalScale(25)
    },
    welcomeInfo: {
        textAlign: 'center',
        marginBottom: moderateScale(20),
        marginHorizontal: moderateScale(20),
        color: Colors.black,
    },
    // signInView: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: moderateScale(15),
    //     marginVertical: verticalScale(20),
    // },
    // textPadding: {
    //     paddingHorizontal: horizontalScale(10),
    //     color: Colors.black,
    //     fontWeight: '500',
    // },
    // signInText: {
    //     paddingHorizontal: horizontalScale(10),
    //     color: Colors.theme,
    //     fontWeight: '500',
    // },
    textInput: {
        marginHorizontal: horizontalScale(10),
        borderWidth: moderateScale(1),
        height: verticalScale(50),
        marginTop: verticalScale(10),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        backgroundColor: Colors.offWhite,
        paddingLeft: horizontalScale(12),
        color: Colors.black,
        fontSize: moderateScale(12),
        fontWeight: '500',
    },
    // rememberMeView: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: moderateScale(15),
    // },
    // rememberMe: {
    //     flex: 1,
    //     marginLeft: horizontalScale(20),
    // },
    // forgotPassword: {
    //     flex: 1,
    //     alignItems: 'flex-end',
    //     marginRight: horizontalScale(20),
    // },
    // checkboxContainer: {
    //     flexDirection: 'row',
    // },
    // checkbox: {
    //     borderColor: Colors.theme,
    //     borderRadius: moderateScale(5),
    //     backgroundColor: Colors.offWhite,
    // },
    // label: {
    //     marginVertical: verticalScale(8),
    //     color: Colors.theme,
    // },
    errorText: {
        marginHorizontal: horizontalScale(20),
        color: Colors.red,
        fontSize: moderateScale(11),
        marginTop: verticalScale(2),
    },
    error: {
        marginHorizontal: horizontalScale(20),
        color: Colors.red,
        fontSize: moderateScale(12),
        textAlign: 'center',
    },
    createAccount: {
        textAlign: 'center',
        fontSize: moderateScale(12),
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
    button: {
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(120),
        padding: moderateScale(15),
        marginBottom: verticalScale(10),
        borderRadius: moderateScale(10),
        marginTop: verticalScale(20),
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: moderateScale(16),
    },
});
