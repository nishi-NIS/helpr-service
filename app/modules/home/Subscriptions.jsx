import React from "react";
import { Text, Dimensions, View, TextInput, ScrollView, Pressable } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { Strings } from "../../constants";
import { styles } from "./SubscriptionsStyles";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { CarouselCard } from "./components";

const Subscription = () => {
  const width = Dimensions.get('window').width;
  const carouselItems = [...new Array(3).keys()];
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleSlideChange = index => {
    setActiveSlide(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={styles.container}
        key={index}
      >
        {index == 0 ? (
          <CarouselCard
            header={Strings.premium}
            price={Strings.price1}
            mText={Strings.m}
            planIncludes={Strings.planIncludes}
            text1={Strings.text1}
            text2={Strings.text2}
            text3={Strings.text3}
            text4={Strings.text4}
            text5={Strings.text5}
            text6={Strings.text6}
            text7={Strings.text7}
            text8={Strings.text8}
            applyCode={Strings.applyCode}
            apply={Strings.apply}
            payNow={Strings.payNow}
          />
        )
          : index == 1 ?
            (
              <CarouselCard
                header={Strings.standard}
                price={Strings.price2}
                mText={Strings.m}
                planIncludes={Strings.planIncludes}
                text1={Strings.text1}
                text2={Strings.text2}
                text3={Strings.text3}
                text4={Strings.text4}
                text5={Strings.text5}
                text6={Strings.text6}
                text7={Strings.text7}
                text8={Strings.text8}
                applyCode={Strings.applyCode}
                apply={Strings.apply}
                payNow={Strings.payNow}
              />
            )
            :
            (
              <CarouselCard
                header={Strings.basic}
                price={Strings.price3}
                mText={Strings.m}
                planIncludes={Strings.planIncludes}
                text1={Strings.text1}
                text2={Strings.text2}
                text3={Strings.text3}
                text4={Strings.text4}
                text5={Strings.text5}
                text6={Strings.text6}
                text7={Strings.text7}
                text8={Strings.text8}
                applyCode={Strings.applyCode}
                apply={Strings.apply}
                payNow={Strings.payNow}
              />
            )
        }
      </View>

    );
  };

  return (
    <>
      <View style={styles.headerView} >
        <CaretLeft size={moderateScale(20)} weight="bold" color={Colors.black} />
        <Text style={styles.subscriptionText} >{Strings.subscription}</Text>
        <Text></Text>
      </View>
      <View style={styles.carouselView}>
        <Carousel
          loop
          width={width}
          // autoPlay={true}
          data={carouselItems}
          mode="parallax"
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          onSnapToItem={handleSlideChange}
          // panGestureHandlerProps={{
          //   activeOffsetX: [-10, 10],
          // }}
          renderItem={renderItem}
        />
      </View>
        <View style={styles.paginationDots}>
        {carouselItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeSlide ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default Subscription;
