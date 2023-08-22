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
        marginTop: verticalScale(25)
    },
    tabTextView: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: verticalScale(10)
    },
    focusedText: {
        fontSize: moderateScale(18),
        color: Colors.theme,
        fontWeight: '500',
        marginTop: verticalScale(13)
    },
    unFocusedText: {
        fontSize: moderateScale(18),
        color: Colors.black,
        fontWeight: '500',
        marginTop: verticalScale(13)
    },
    pipeLine: {
        color: Colors.black,
        fontSize: moderateScale(18),
        paddingHorizontal: horizontalScale(10),
        marginTop: verticalScale(13)
    },
    outerTextInputView: {
        marginBottom: verticalScale(12),
    },
    textInputView: {
        paddingHorizontal: horizontalScale(10),
        marginHorizontal: horizontalScale(10),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        height: verticalScale(50),
        borderRadius: moderateScale(8),
        backgroundColor: Colors.offWhite,
    },
    textInput: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontWeight: '400',
        flex: 1,
    },
    errorView: {
        paddingHorizontal: horizontalScale(4)
    },
    errorText: {
        color: Colors.red,
        fontSize: moderateScale(10),
    },
    rememberMeView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: moderateScale(15),
    },
    rememberMe: {
        flex: 1,
        marginLeft: horizontalScale(4),
        marginTop: verticalScale(-8)
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
        marginRight: horizontalScale(14),
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
