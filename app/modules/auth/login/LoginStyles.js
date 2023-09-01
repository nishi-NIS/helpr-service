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
        marginTop: verticalScale(16)
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
        borderWidth:moderateScale(1),
        backgroundColor: Colors.offWhite,
        justifyContent: "center"
    },
    textInput: {
        fontSize: moderateScale(12),
        color: Colors.black,
        fontWeight: '500',
        flex: 1,
    },
    errorView: {
        paddingHorizontal: horizontalScale(20),
        top: verticalScale(-5)
    },
    errorText: {
        color: Colors.red,
        fontSize: moderateScale(10),
        fontWeight: '500',
    },
    rememberMeView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rememberMe: {
        flex: 1,
        marginLeft: horizontalScale(14),
        marginTop: verticalScale(-8)
    },
    label: {
        // marginVertical: verticalScale(5),
        color: Colors.gray,
        fontSize: moderateScale(10),
        fontWeight: '500',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    checkbox: {
        // marginRight: horizontalScale(10),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        transform: [{ scaleX: moderateScale(0.8) }, { scaleY: moderateScale(0.8) }],
    },
    forgotPassword: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: horizontalScale(14),
    },
    forgetPasswordText: {
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '500',
        fontSize: moderateScale(11),
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
        fontSize: moderateScale(16),
    },
    createAccount: {
        textAlign: 'center',
        fontSize: moderateScale(12),
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
});
