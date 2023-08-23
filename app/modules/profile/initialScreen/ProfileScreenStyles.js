import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.offWhite
    },
    headerView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: verticalScale(30),
        marginHorizontal: horizontalScale(20)
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
    textCardOuterView: {
        marginHorizontal: horizontalScale(15),
    },
    textCardView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.white,
        height: verticalScale(55),
        borderRadius: moderateScale(6),
        marginBottom: verticalScale(10),
        shadowColor: Colors.black,
        shadowOffset: { height: verticalScale(2), width: horizontalScale(1) },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(3),
        elevation: moderateScale(1),
    },
    icon: {
        margin: moderateScale(5),
        marginLeft: horizontalScale(15)
    },
    singleText: {
        color: Colors.black,
        fontSize: moderateScale(16),
        fontWeight: '600',
        left: horizontalScale(4),
        // borderWidth: 1,
        flex: 1
    },
    switch: {
        marginRight: horizontalScale(10)
    },
    doubleTextView: {
        left: horizontalScale(4),
        // borderWidth: 1,
        flex: 1
    },
    upperText: {
        color: Colors.gray,
        fontSize: moderateScale(14),
        fontWeight: '600',
        // left: horizontalScale(-70)
    },
    lowerTextView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    lowerText: {
        color: Colors.black,
        fontSize: moderateScale(16),
        fontWeight: '600',
        // left: horizontalScale(-70)
    },
    priceText: {
        color: Colors.black,
        fontSize: moderateScale(14),
        fontWeight: '600',
        marginRight: horizontalScale(15)
    },
    reviewText: {
        color: Colors.theme,
        fontSize: moderateScale(12),
        fontWeight: '600',
        marginRight: horizontalScale(15),
        textDecorationLine: "underline"
    },
    btnView: {
        backgroundColor: Colors.theme,
        borderRadius: moderateScale(6),
        marginBottom: verticalScale(20),
        marginTop: verticalScale(50),
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