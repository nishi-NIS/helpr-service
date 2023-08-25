import { CaretLeft, Star } from "phosphor-react-native";
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, Image, Pressable, Animated, FlatList } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";
import { Strings } from "../../../constants";
import { styles } from "./ViewRatingsStyles";
import Images from "../../../assests";
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";

const Item = ({ image, firstname, date, ratings, title }) => (
    <View style={styles.flatListView} >
        <View style={styles.headerText} >
            <Image
                source={image}
                style={styles.imageStyle}
            />
            <View style={styles.nameTextView} >
                <Text style={styles.firstName} >{firstname}</Text>
                <Text style={styles.dateText} >{date}</Text>
            </View>
            <View style={styles.ratingsView} >
                <Star
                    size={moderateScale(10)}
                    color={Colors.starColor}
                    weight="bold"
                />
                <Star
                    size={moderateScale(10)}
                    color={Colors.starColor}
                    weight="bold"
                />
                <Star
                    size={moderateScale(10)}
                    color={Colors.starColor}
                    weight="bold"
                />
                <Star
                    size={moderateScale(10)}
                    color={Colors.starColor}
                    weight="bold"
                />
                <Star
                    size={moderateScale(10)}
                    color={Colors.starColor}
                    weight="bold"
                />
                <Text style={styles.digit} >{` (${ratings})`}</Text>
            </View>
        </View>
        <Text style={styles.titleText} >{title}</Text>
    </View>
);

const ViewRatings = () => {
    const [progress, setProgress] = useState(0);
    const [starRating, setStarRating] = useState(0);
    const animatedButtonScale = new Animated.Value(1);
    const navigation = useNavigation();

    const tempFlatlistData = [
        {
            id: 1,
            firstname: "Bezos",
            image: Images.loginBG,
            date: "December 2023",
            ratings: 2,
            title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 2,
            firstname: "Jose",
            image: Images.loginBG,
            date: "December 2023",
            ratings: 5,
            title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 3,
            firstname: "Martin",
            image: Images.loginBG,
            date: "December 2023",
            ratings: 2,
            title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 4,
            firstname: "Bezos",
            image: Images.loginBG,
            date: "December 2023",
            ratings: 3,
            title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 5,
            firstname: "Bezos",
            image: Images.loginBG,
            date: "December 2023",
            ratings: 2,
            title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 6,
            firstname: "Bezos",
            image: Images.loginBG,
            date: "December 2023",
            ratings: 4,
            title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
    ];

    const handlePressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const animatedScaleStyle = {
        transform: [{ scale: animatedButtonScale }],
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 1) {
                setProgress(progress + 0.1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [progress]);

    return (
        <ScrollView style={styles.main} >
            <View style={styles.mainContainer} >
                <View style={styles.headerView} >
                    <Pressable onPress={() => navigation.goBack()} >
                        <CaretLeft
                            size={moderateScale(20)}
                            weight="bold"
                            color={Colors.black}
                            style={styles.caretLeft}
                        />
                    </Pressable>
                    <Text style={styles.subscriptionText} >{Strings.viewRatings}</Text>
                    <Text></Text>
                </View>
                <View style={styles.imgOuterView} >
                    <View
                    // style={styles.imgInnerView} 
                    >
                        <Image
                            source={Images.loginBG}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.textView} >
                        <Text style={styles.text} >John Methon</Text>
                        <View style={styles.container}>
                            <View style={styles.stars}>
                                <Pressable
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                    onPress={() => setStarRating(1)}
                                >
                                    <Animated.View style={animatedScaleStyle}>
                                        <Star
                                            color={Colors.starColor}
                                            size={moderateScale(16)}
                                            weight={starRating >= 1 ? 'fill' : 'regular'}
                                            style={{ marginHorizontal: horizontalScale(1) }}
                                        />
                                    </Animated.View>
                                </Pressable>
                                <Pressable
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                    onPress={() => setStarRating(2)}
                                >
                                    <Animated.View style={animatedScaleStyle}>
                                        <Star
                                            color={Colors.starColor}
                                            size={moderateScale(16)}
                                            weight={starRating >= 2 ? 'fill' : 'regular'}
                                            style={{ marginHorizontal: horizontalScale(1) }}
                                        />
                                    </Animated.View>
                                </Pressable>
                                <Pressable
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                    onPress={() => setStarRating(3)}
                                >
                                    <Animated.View style={animatedScaleStyle}>
                                        <Star
                                            color={Colors.starColor}
                                            size={moderateScale(16)}
                                            weight={starRating >= 3 ? 'fill' : 'regular'}
                                            style={{ marginHorizontal: horizontalScale(1) }}
                                        />
                                    </Animated.View>
                                </Pressable>
                                <Pressable
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                    onPress={() => setStarRating(4)}
                                >
                                    <Animated.View style={animatedScaleStyle}>
                                        <Star
                                            color={Colors.starColor}
                                            size={moderateScale(16)}
                                            weight={starRating >= 4 ? 'fill' : 'regular'}
                                            style={{ marginHorizontal: horizontalScale(1) }}
                                        />
                                    </Animated.View>
                                </Pressable>
                                <Pressable
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                    onPress={() => setStarRating(5)}
                                >
                                    <Animated.View style={animatedScaleStyle}>
                                        <Star
                                            color={Colors.starColor}
                                            size={moderateScale(16)}
                                            weight={starRating >= 5 ? 'fill' : 'regular'}
                                            style={{ marginHorizontal: horizontalScale(1) }}
                                        />
                                    </Animated.View>
                                </Pressable>
                            </View>
                            <Text style={styles.ratingNumber} >{`(${starRating})`}</Text>
                            <Text
                                style={styles.ratingText}
                            // onPress={() => navigation.navigate(NavigationRoutes.viewRatingsScreen)}
                            >{Strings.review}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.allRatings} >{Strings.allRatings}</Text>
                <View style={styles.barView} >
                    <Text style={styles.ratingStar} >5 Star</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: horizontalScale(10)
                    }} >
                        <Progress.Bar
                            progress={progress}
                            width={200}
                            color={Colors.theme}
                            unfilledColor={Colors.tabBackground}
                            borderColor={Colors.tabBackground}
                        />
                    </View>
                    <Text style={styles.ratingDigit} >79</Text>
                </View>
                <View style={styles.barView} >
                    <Text style={styles.ratingStar} >4 Star</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: horizontalScale(10)
                    }} >
                        <Progress.Bar
                            progress={progress}
                            width={200}
                            color={Colors.theme}
                            unfilledColor={Colors.tabBackground}
                            borderColor={Colors.tabBackground}
                        />
                    </View>
                    <Text style={styles.ratingDigit} >63</Text>
                </View>
                <View style={styles.barView} >
                    <Text style={styles.ratingStar} >3 Star</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: horizontalScale(10)
                    }} >
                        <Progress.Bar
                            progress={progress}
                            width={200}
                            color={Colors.theme}
                            unfilledColor={Colors.tabBackground}
                            borderColor={Colors.tabBackground}
                        />
                    </View>
                    <Text style={styles.ratingDigit} >54</Text>
                </View>
                <View style={styles.barView} >
                    <Text style={styles.ratingStar} >2 Star</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: horizontalScale(10)
                    }} >
                        <Progress.Bar
                            progress={progress}
                            width={200}
                            color={Colors.theme}
                            unfilledColor={Colors.tabBackground}
                            borderColor={Colors.tabBackground}
                        />
                    </View>
                    <Text style={styles.ratingDigit} >20</Text>
                </View>
                <View style={styles.barView} >
                    <Text style={styles.ratingStar} >1 Star</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: horizontalScale(10)
                    }} >
                        <Progress.Bar
                            progress={progress}
                            width={200}
                            color={Colors.theme}
                            unfilledColor={Colors.tabBackground}
                            borderColor={Colors.tabBackground}
                        />
                    </View>
                    <Text style={styles.ratingDigit} >13</Text>
                </View>
                <Text style={styles.allReviews} >{Strings.allReview}</Text>
                {tempFlatlistData.map((item) => <Item
                    image={item.image}
                    firstname={item.firstname}
                    date={item.date}
                    ratings={item.ratings}
                    title={item.title} />)}
            </View>
        </ScrollView>
    );
};

export default ViewRatings;
