// import { Dimensions, Platform } from "react-native";

// const { width, height } = Dimensions.get("window");

// if (width> height) {
//     [width, height]= [height, width];
// };

// const guideLineBaseWidth = 375;
// const guideLineBaseHeight = 812;

// const horizontalScale = (size) => (width / guideLineBaseWidth) * size;
// const verticalScale = (size) => (height / guideLineBaseHeight) * size;
// const moderateScale = (size, factor = 0.5) => (size + (horizontalScale(size) - size) + factor);

// const globalMetrics = {
//     isAndroid Platform.OS === 'android',
//     isIos Platform.OS === 'ios',
//     isPad Platform.OS === 'ios' && Platform.isPad,
//     isTV Platform.isTV
// };

// export { globalMetrics, horizontalScale, moderateScale, verticalScale };

import {Dimensions, Platform} from 'react-native';

let {width, height} = Dimensions.get('window');

if (width > height) {
  [width, height] = [height, width];
}

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTV: Platform.isTV,
};

export {
  globalMetrics,
  width,
  height,
  horizontalScale,
  verticalScale,
  moderateScale,
};
