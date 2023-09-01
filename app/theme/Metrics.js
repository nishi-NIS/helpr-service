import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const guideLineBaseWidth = 375;
const guideLineBaseHeight = 812;

const horizontalScale = (size) => (width / guideLineBaseWidth) * size;
const verticalScale = (size) => (height / guideLineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => (size + (horizontalScale(size) - size) + factor);

const globalMetrics = {
    isAndroid: Platform.OS === 'android',
    isIos: Platform.OS === 'ios',
    isPad: Platform.OS === 'ios' && Platform.isPad,
    isTV: Platform.isTV
};

export { globalMetrics, horizontalScale, moderateScale, verticalScale };

