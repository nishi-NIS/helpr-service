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
    tabText: {
        fontSize: moderateScale(18),
        color: Colors.theme,
        fontWeight: '500',
        marginTop: verticalScale(13)
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
    uploadOuterView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: verticalScale(10)
    },
    uploadInnerView: {
        marginBottom: verticalScale(10),
        height: moderateScale(120),
        width: moderateScale(120),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        borderRadius: moderateScale(100),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.offWhite,
    },
    uploadText: {
        textAlign: "center",
        marginTop: verticalScale(10),
        color: Colors.gray,
        fontWeight: '400'
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
    photoError: {
        justifyContent: "center",
        alignItems: "center",
    },
    photoErrorText: {
        color: Colors.red,
        fontSize: moderateScale(10),
        top: verticalScale(-7)
    },
    button: {
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(120),
        marginTop: verticalScale(8),
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
        marginBottom: verticalScale(20)
    },
    inputOuterView: {
        marginTop: verticalScale(5),
    },
    inputInnerView: {
        marginBottom: verticalScale(10),
        height: verticalScale(100),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        marginHorizontal: horizontalScale(10),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.offWhite,
    },
    inputUploadText: {
        textAlign: "center",
        marginTop: verticalScale(10),
        color: Colors.black
    },
    dropdown: {
        height: 50,
        borderColor: Colors.theme,
        borderWidth: moderateScale(1),
        borderRadius: 8,
        // paddingHorizontal: 8,
        marginHorizontal: horizontalScale(10),
    },
    dropdownContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        marginHorizontal: horizontalScale(10),
        borderRadius: moderateScale(5),
        // borderTopLeftRadius: verticalScale(5),
        // borderTopRightRadius: verticalScale(5),
        backgroundColor: Colors.offWhite
    },
    dropdownInnerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: horizontalScale(10),
    },
    dropdownText: {
        color: Colors.gray,
        paddingVertical: verticalScale(10),
        fontWeight: '500'
    },
    dropdownTextSelected: {
        color: Colors.black,
        paddingVertical: verticalScale(10),
        fontWeight: '500'
    },
    option: {
        paddingTop: verticalScale(3),
        paddingHorizontal: horizontalScale(10),
        // borderBottomWidth: moderateScale(1),
        // borderColor: Colors.gray
        // top: verticalScale(500),
    },
    modalOuterView: {
        alignItems: "center",
        top: verticalScale(633),
        // flex: 1
    },
    modalView: {
        width: horizontalScale(355),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        borderBottomLeftRadius: verticalScale(5),
        borderBottomRightRadius: verticalScale(5),
        backgroundColor: Colors.offWhite
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
        marginTop: verticalScale(0),
        marginLeft: horizontalScale(5),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        transform: [{ scaleX: horizontalScale(0.8) }, { scaleY: verticalScale(0.8) }],
    },
    contractView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        marginVertical: verticalScale(6),
        color: Colors.gray,
    },
    contractText: {
        color: Colors.theme,
        textDecorationLine: "underline"
    },
    confirmContract: {
        color: Colors.gray,
        marginLeft: horizontalScale(15),
        top: verticalScale(-8)
    },
});

