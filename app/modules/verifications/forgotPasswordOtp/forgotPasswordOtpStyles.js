import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    topImage: {
        height: verticalScale(180),
        width: horizontalScale(375),
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        marginTop: verticalScale(38)
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
    otpText: {
        color: Colors.theme,
        fontWeight: '600',
        fontSize: moderateScale(17)
    },
    errorText: {
        marginHorizontal: horizontalScale(20),
        color: Colors.red,
        fontSize: moderateScale(12),
    },
    error: {
        marginHorizontal: horizontalScale(20),
        color: Colors.red,
        fontSize: moderateScale(12),
        textAlign: 'center',
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
        marginTop: verticalScale(20),
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
     rememberMeView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: moderateScale(15),
    },
    rememberMe: {
        flex: 1,
        marginLeft: horizontalScale(20),
    },
    forgotPassword: {
            flex: 1,
            alignItems: 'flex-end',
            marginRight: horizontalScale(20),
        },
});
