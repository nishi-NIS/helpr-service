import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    headerView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: verticalScale(30),
        marginHorizontal: horizontalScale(20)
    },
    caretIcon: {
        padding: moderateScale(5)
    },
    subscriptionText: {
        fontSize: moderateScale(22),
        fontWeight: '700',
        color: Colors.theme,
        alignSelf: "center"
    },
    imgOuterView: {
        // marginHorizontal: horizontalScale(5),
        marginVertical: verticalScale(10),
        // justifyContent: "center",
        alignItems: "center"
    },
    imgInnerView: {
        padding: moderateScale(1),
        borderRadius: moderateScale(100),
        borderColor: Colors.theme,
        borderWidth: moderateScale(1.5),
    },
    image: {
        height: moderateScale(130),
        width: moderateScale(130),
        borderRadius: moderateScale(100),
    },
    textView: {
        // width: horizontalScale(90),
    },
    text: {
        fontSize: moderateScale(20),
        fontWeight: '700',
        color: Colors.theme,
        textAlign: "center",
        marginTop: verticalScale(10)
    },
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
        // padding: 20,
        top: -6
    },
    stars: {
        // display: 'flex',
        flexDirection: 'row',
        marginLeft: horizontalScale(40),
        // borderWidth: 1
    },
    ratingNumber: {
        color: Colors.black,
        fontSize: moderateScale(17),
        fontWeight: '600',
    },
    ratingText: {
        color: Colors.theme,
        marginRight: horizontalScale(55),
        fontSize: moderateScale(17),
        fontWeight: '600',
    },
    textHeader: {
        color: Colors.black,
        fontSize: moderateScale(14),
        fontWeight: '600'
    },
    textInputOuterView: {
        marginHorizontal: horizontalScale(15)
    },
    leftView: {
        marginLeft: horizontalScale(15),
    },
    rightView: {
        marginRight: horizontalScale(15),
    },
    textInputView: {
        backgroundColor: Colors.offWhite,
        height: verticalScale(50),
        borderRadius: moderateScale(6),
        borderColor: Colors.theme,
        borderWidth: moderateScale(1),
        marginTop: verticalScale(4),
        marginBottom: verticalScale(10),
        shadowColor: Colors.black,
        shadowOffset: { height: verticalScale(2), width: horizontalScale(1) },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(3),
        elevation: moderateScale(1),
    },
    textInput: {
        fontSize: moderateScale(14),
        fontWeight: '500',
        paddingHorizontal: horizontalScale(12),
    },
    dualView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addServices: {
        color: Colors.theme,
        fontSize: moderateScale(12),
        fontWeight: '600',
        marginBottom: verticalScale(10),
        textDecorationLine: "underline"
    },
    btnView: {
        backgroundColor: Colors.theme,
        borderRadius: moderateScale(6),
        marginVertical: verticalScale(20),
        marginHorizontal: horizontalScale(15),
        shadowColor: Colors.black,
        shadowOffset: { height: verticalScale(2), width: horizontalScale(1) },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(3),
        elevation: moderateScale(1),
    },
    btnText: {
        color: Colors.white,
        fontSize: moderateScale(16),
        fontWeight: '600',
        textAlign: "center",
        padding: moderateScale(10),
    },
});
