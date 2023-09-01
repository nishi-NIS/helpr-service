import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    mainContainer: {
        marginHorizontal: horizontalScale(20)
    },
    headerView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: verticalScale(30),
        // marginHorizontal: horizontalScale(20)
    },
    subscriptionText: {
        fontSize: moderateScale(22),
        fontWeight: '700',
        color: Colors.theme,
        alignSelf: "center"
    },
    imgOuterView: {
        // marginHorizontal: horizontalScale(15),
        marginVertical: verticalScale(10),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    imgInnerView: {
        padding: moderateScale(1),
        borderRadius: moderateScale(100),
        borderColor: Colors.theme,
        borderWidth: moderateScale(1.5),
    },
    image: {
        height: moderateScale(55),
        width: moderateScale(55),
        borderRadius: moderateScale(100),
    },
    textView: {
        // width: horizontalScale(90),
        marginHorizontal: horizontalScale(10),
        // justifyContent: "center",
    },
    text: {
        fontSize: moderateScale(20),
        fontWeight: '700',
        color: Colors.black,
        // textAlign: "center",
        // marginTop: verticalScale(10)
    },
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: "space-between",
        flexDirection: 'row',
        // padding: 20,
        // top: -6
    },
    stars: {
        // display: 'flex',
        flexDirection: 'row',
        // marginLeft: horizontalScale(40),
        // borderWidth: 1
    },
    ratingNumber: {
        color: Colors.black,
        fontSize: moderateScale(14),
        fontWeight: '600',
        marginHorizontal: horizontalScale(5),
    },
    ratingText: {
        color: Colors.black,
        // marginRight: horizontalScale(55),
        fontSize: moderateScale(14),
        fontWeight: '600',
        // paddingRight: horizontalScale(5)
    },
    allRatings: {
        color: Colors.theme,
        fontWeight: '700',
        fontSize: moderateScale(20),
        marginTop: verticalScale(10)
    },
    barView: {
        flexDirection: "row",
        marginTop: verticalScale(5)
    },
    ratingStar: {
        color: Colors.black,
        fontWeight: '500'
    },
    ratingDigit: {
        color: Colors.black,
        fontWeight: '500',
        left: horizontalScale(-55)
    },
    allReviews: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: moderateScale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10)
    },
    flatListView: {
        marginBottom: verticalScale(10)
    },
    imageStyle: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(100)
    },
    headerText: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    firstName: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: moderateScale(16)
    },
    dateText: {
        color: Colors.gray,
        fontWeight: '400',
        fontSize: moderateScale(10)
    },
    nameTextView: {
        // marginHorizontal: horizontalScale(10),
        justifyContent: "center",
        right: horizontalScale(60)
    },
    ratingsView: {
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        // marginRight: horizontalScale(10)
    },
    digit: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: moderateScale(10)
    },
    titleText: {
        color: Colors.black,
        marginTop: verticalScale(8),
        fontWeight: '500',
        fontSize: moderateScale(10)
    },
});
