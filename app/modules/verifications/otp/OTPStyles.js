import {StyleSheet} from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";


export const styles = StyleSheet.create({
    rememberMeView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: moderateScale(15),
        marginRight: horizontalScale(40),
    },
    forgotPassword: {
        flex: 1,
        alignItems: 'flex-end',
    },
    borderStyleBase: {
        width: horizontalScale(30),
        height: verticalScale(45),
    },

    borderStyleHighLighted: {
        borderColor: Colors.black,
    },

    underlineStyleBase: {
        width: horizontalScale(75),
        height: verticalScale(45),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        borderRadius: moderateScale(10),
        color: Colors.black,
    },

    underlineStyleHighLighted: {
        borderColor: Colors.theme,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: moderateScale(42),
        lineHeight: verticalScale(84),
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: Colors.lightBlack,
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 3,
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        color: Colors.theme,
        marginVertical: verticalScale(20),
    },
    welcomeInfo: {
        textAlign: 'center',
        marginBottom: verticalScale(20),
        marginHorizontal: 100,
        color: Colors.black,
    },
    signInView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: moderateScale(15),
        marginVertical: verticalScale(20),
    },
    textPadding: {
        paddingHorizontal: horizontalScale(10),
        color: Colors.black,
        fontWeight: '500',
    },
    signInText: {
        paddingHorizontal: horizontalScale(10),
        color: Colors.theme,
        fontWeight: '500',
    },
    textInput: {
        marginHorizontal: horizontalScale(20),
        borderWidth: moderateScale(1),
        height: verticalScale(40),
        marginTop: verticalScale(10),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        backgroundColor: Colors.offWhite,
        paddingLeft: horizontalScale(20),
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        backgroundColor: Colors.offWhite,
    },
    label: {
        marginVertical: verticalScale(8),
        color: Colors.theme,
    },
    createAccount: {
        textAlign: 'center',
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
        marginTop: (verticalScale),
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '600',
    },
    topImage: {
        height: verticalScale(180),
        width: horizontalScale(375),
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        marginTop: verticalScale(38)
    },
    otpText: {
        color: Colors.theme,
        fontWeight: '600',
        fontSize: moderateScale(17)
    },
    error: {
        marginHorizontal: horizontalScale(20),
        color: Colors.red,
        fontSize: moderateScale(12),
        textAlign: 'center',
    },
});