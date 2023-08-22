import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
    headerView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: verticalScale(50),
        marginHorizontal: horizontalScale(20)
    },
    caretLeft: {
        
    },
    subscriptionText: {
        fontSize: moderateScale(22),
        fontWeight: '700',
        color: Colors.theme,
        alignSelf: "center"
    },
});
