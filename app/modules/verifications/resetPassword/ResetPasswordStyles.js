import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    topImage: {
        height: verticalScale(180),
        width: horizontalScale(375),
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        marginTop: verticalScale(16)
    },
    // image: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flex: 1,
    // },
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
    subWelcomeText: {
        fontSize: moderateScale(16),
        color: Colors.black,
        textAlign: "center",
        marginTop: verticalScale(15),
        marginBottom: verticalScale(25)
    },
    welcomeInfo: {
        textAlign: 'center',
        marginBottom: moderateScale(20),
        marginHorizontal: moderateScale(20),
        color: Colors.black,
    },
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
        flex: 1,
    },
    errorText: {
        marginHorizontal: horizontalScale(20),
        color: Colors.red,
        fontSize: moderateScale(11),
        fontWeight: '500',
        top: verticalScale(3),
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
    createAccount: {
        textAlign: 'center',
        fontSize: moderateScale(12),
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
});
