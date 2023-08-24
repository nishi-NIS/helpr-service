import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(10),
        height: verticalScale(605),
        shadowColor: Colors.black,
        shadowOffset: { height: verticalScale(4), width: horizontalScale(2) },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(3),
        elevation: moderateScale(2),
    },
    carouselView: {
        flex: 1,
        alignSelf: "center"
    },
    // main: {
    //     marginLeft: horizontalScale(20)
    // },
    // premiumText: {
    //     color: Colors.theme,
    //     fontSize: moderateScale(26),
    //     fontWeight: '600',
    //     marginTop: verticalScale(20)
    // },
    // priceView: {
    //     flexDirection: "row",
    //     alignItems: "flex-end",
    //     marginTop: verticalScale(10)
    // },
    // priceText: {
    //     color: Colors.black,
    //     fontSize: moderateScale(30),
    //     fontWeight: '700',
    // },
    // mText: {
    //     color: Colors.black,
    //     fontSize: moderateScale(20),
    //     fontWeight: '600',
    // },
    // planText: {
    //     color: Colors.black,
    //     fontSize: moderateScale(20),
    //     fontWeight: '600',
    //     marginTop: verticalScale(10)
    // },
    // textMainView: {
    //     marginLeft: horizontalScale(5)
    // },
    // textView: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     marginTop: verticalScale(10)
    // },
    // text: {
    //     color: Colors.black,
    //     fontSize: moderateScale(18),
    //     fontWeight: '400',
    //     // marginTop: verticalScale(10)
    //     marginLeft: horizontalScale(7)
    // },
    // input: {
    //     height: verticalScale(50),
    //     // marginTop: 10,
    //     padding: moderateScale(10),
    //     borderColor: Colors.theme,
    //     borderWidth: moderateScale(1),
    //     backgroundColor: Colors.offWhite,
    //     color: Colors.black,
    //     fontWeight: '500'
    // },
    // applyCodeView: {
    //     flex: 1,
    //     marginHorizontal: horizontalScale(10),
    //     marginTop: verticalScale(20)
    // },
    // applyCodeInnerView: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // applyCodeText: {
    //     borderWidth: moderateScale(1),
    //     borderColor: Colors.theme,
    //     backgroundColor: Colors.offWhite
    // },
    // btnView: {
    //     backgroundColor: Colors.theme,
    //     padding: moderateScale(10),
    //     marginTop: verticalScale(15),
    //     textAlign: 'center',
    //     borderRadius: moderateScale(5),
    // },
    // btnText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     fontWeight: '500'
    // },
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
    paginationDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: moderateScale(80),
      },
    paginationDot: {
        width: horizontalScale(35),
        height: verticalScale(5),
        borderRadius: moderateScale(4),
        backgroundColor: Colors.tabBackground,
        marginHorizontal: horizontalScale(5),
        shadowColor: Colors.black,
        shadowOffset: { height: verticalScale(2), width: horizontalScale(1) },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(1),
        elevation: moderateScale(1),
      },
      activeDot: {
        width: horizontalScale(35),
        height: verticalScale(5),
        backgroundColor: Colors.theme, // Active dot color
        shadowColor: Colors.black,
        shadowOffset: { height: verticalScale(2), width: horizontalScale(1) },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(1),
        elevation: moderateScale(1),
      },
});
