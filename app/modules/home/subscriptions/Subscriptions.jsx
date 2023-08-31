import { CaretLeft } from 'phosphor-react-native';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Text,
  View
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { API_URL } from '../../../config';
import { EndPoints, Strings } from '../../../constants';
import {
  Colors,
  moderateScale
} from '../../../theme';
import { CarouselCard } from '../components';
import { styles } from './SubscriptionsStyles';

const Subscription = () => {
  const width = Dimensions.get('window').width;
  const carouselItems = [...new Array(3).keys()];
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [planList, setPlanList] = React.useState([]);

  const fetchPlanList = () => {
    let requestOptions = {
      method: 'GET',
    };

    fetch(API_URL + EndPoints.getPlanList, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPlanList(data?.plans);
      })
      .catch(error => console.log('Error while fetching PlanList', error));
  };

  useEffect(() => {
    fetchPlanList();
  }, []);

  const handleSlideChange = index => {
    setActiveSlide(index);
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        <View style={styles.container} key={index}>
          <CarouselCard
            header={item.name}
            price={item.price}
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
        </View>
      </>
    );
  };

  return (
    <>
      <View style={styles.headerView}>
        <CaretLeft
          size={moderateScale(20)}
          weight="bold"
          color={Colors.black}
        />
        <Text style={styles.subscriptionText}>{Strings.subscription}</Text>
        <Text></Text>
      </View>
      <View style={styles.carouselView}>
        <Carousel
          loop
          width={width}
          data={planList}
          mode="parallax"
          scrollAnimationDuration={1000}
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
