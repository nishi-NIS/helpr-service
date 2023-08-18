import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    topImage: {
        height: verticalScale(180),
        width: horizontalScale(375),
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        marginTop: verticalScale(38)
    },
    welcomeView: {
        alignItems: "center",
        padding: moderateScale(15)
    },
    welcomeText: {
        fontSize: moderateScale(24),
        fontWeight: '600',
        color: Colors.theme
    },
    subWelcomeText: {
        fontSize: moderateScale(16),
        color: Colors.black,
        textAlign: "center",
        marginTop: verticalScale(10)
    },
    tabTextView: {
        flexDirection: "row",
        justifyContent: "center",
    },
    tabText: {
        fontSize: moderateScale(18),
        color: Colors.theme,
        fontWeight: '500'
    },
    pipeLine: {
        color: Colors.black,
        fontSize: moderateScale(18),
        paddingHorizontal: horizontalScale(10)
    },
    textInputView: {
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        width: horizontalScale(325),
        alignSelf: "center",
        height: verticalScale(50),
        marginVertical: verticalScale(15),
        borderRadius: moderateScale(8)
    },
    textInput: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontWeight: '400',
        flex: 1
    },
    errorText: {
        marginHorizontal: horizontalScale(6),
        color: Colors.red,
        fontSize: moderateScale(12),
        margin: moderateScale(6)
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
    label: {
        marginVertical: verticalScale(8),
        color: Colors.theme,
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
        marginTop: verticalScale(2),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        transform: [{ scaleX: horizontalScale(0.8) }, { scaleY: verticalScale(0.8) }],
    },
    forgotPassword: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: horizontalScale(28),
    },
    forgetPasswordText: {
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '500'
    },
    button: {
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(120),
        marginTop: verticalScale(15),
        padding: moderateScale(15),
        marginBottom: verticalScale(15),
        borderRadius: moderateScale(10),
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '600',
    },
    createAccount: {
        textAlign: 'center',
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
});
