import {StyleSheet} from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    main: {
        marginLeft: horizontalScale(20)
    },
    premiumText: {
        color: Colors.theme,
        fontSize: moderateScale(26),
        fontWeight: '600',
        marginTop: verticalScale(20)
    },
    priceView: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: verticalScale(10)
    },
    priceText: {
        color: Colors.black,
        fontSize: moderateScale(30),
        fontWeight: '700',
    },
    mText: {
        color: Colors.black,
        fontSize: moderateScale(20),
        fontWeight: '600',
    },
    planText: {
        color: Colors.black,
        fontSize: moderateScale(20),
        fontWeight: '600',
        marginTop: verticalScale(10)
    },
    textMainView: {
        marginLeft: horizontalScale(5)
    },
    textView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(10)
    },
    text: {
        color: Colors.black,
        fontSize: moderateScale(18),
        fontWeight: '400',
        // marginTop: verticalScale(10)
        marginLeft: horizontalScale(7)
    },
    input: {
        height: verticalScale(50),
        // marginTop: 10,
        padding: moderateScale(10),
        borderColor: Colors.theme,
        borderWidth: moderateScale(1),
        backgroundColor: Colors.offWhite,
        color: Colors.black,
        fontWeight: '500',
        fontSize: moderateScale(16),
    },
    applyCodeView: {
        flex: 1,
        marginHorizontal: horizontalScale(10),
        marginTop: verticalScale(20)
    },
    applyCodeInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    applyCodeText: {
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        backgroundColor: Colors.offWhite
    },
    btnView: {
        backgroundColor: Colors.theme,
        padding: moderateScale(10),
        marginTop: verticalScale(25),
        textAlign: 'center',
        borderRadius: moderateScale(5),
        // borderWidth: moderateScale(1),
    },
    btnText: {
        color: Colors.white,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: moderateScale(16),
    },
});
