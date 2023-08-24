import React from "react";
import { Text, View, Image, Pressable, Animated, Switch, ScrollView } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";
import { NavigationRoutes, Strings } from "../../../constants";
import { styles } from "./ProfileScreenStyles";
import { CaretLeft, Envelope, GraduationCap, LockKeyOpen, Phone, Shield, Star, User } from "phosphor-react-native";
import Images from "../../../assests";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const [starRating, setStarRating] = React.useState(0);
    const animatedButtonScale = new Animated.Value(1);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const navigation = useNavigation();

    const toggleSwitch = () => {
        setIsEnabled(prevState => !prevState);
    };

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

    return (
        <ScrollView style={styles.main} >
            <View style={styles.headerView} >
                <CaretLeft
                    size={moderateScale(20)}
                    weight="bold"
                    color={Colors.black}
                    style={styles.caretLeft}
                />
                <Text style={styles.subscriptionText} >{Strings.profile}</Text>
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
                </View>
            </View>
            <View style={styles.container}>
                {/* <Text style={styles.heading}>{starRating ? `${starRating}*` : 'Tap to rate'}</Text> */}
                <View style={styles.stars}>
                    <Pressable
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={() => setStarRating(1)}
                    >
                        <Animated.View style={animatedScaleStyle}>
                            <Star
                                color={Colors.starColor}
                                size={moderateScale(24)}
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
                                size={moderateScale(24)}
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
                                size={moderateScale(24)}
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
                                size={moderateScale(24)}
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
                                size={moderateScale(24)}
                                weight={starRating >= 5 ? 'fill' : 'regular'}
                                style={{ marginHorizontal: horizontalScale(1) }}
                            />
                        </Animated.View>
                    </Pressable>
                </View>
                <Text style={styles.ratingNumber} >{`(${starRating})`}</Text>
                <Text
                    style={styles.ratingText}
                    onPress={() => navigation.navigate(NavigationRoutes.viewRatingsScreen)}
                >{Strings.ratings}</Text>
            </View>
            <View style={styles.textCardOuterView} >
                <View style={styles.textCardView} >
                    <User
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="bold"
                        style={styles.icon}
                    />
                    <Text style={styles.singleText}
                    >{Strings.availability}</Text>
                    <Switch
                        trackColor={{ false: Colors.tabBackground, true: Colors.theme }}
                        thumbColor={isEnabled ? Colors.tabBackground : Colors.theme}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.switch}
                    />
                </View>
                <View style={styles.textCardView} >
                    <Envelope
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="regular"
                        style={styles.icon}
                    />
                    <View style={styles.doubleTextView} >
                        <Text style={styles.upperText} >{Strings.emailAddress}</Text>
                        <Text style={styles.lowerText} >{Strings.exampleMail}</Text>
                    </View>
                </View>
                <View style={styles.textCardView} >
                    <Phone
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="bold"
                        style={styles.icon}
                    />
                    <View style={styles.doubleTextView} >
                        <Text style={styles.upperText} >{Strings.phNumber}</Text>
                        <Text style={styles.lowerText} >{Strings.phn}</Text>
                    </View>
                </View>
                <View style={styles.textCardView} >
                    <GraduationCap
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="bold"
                        style={styles.icon}
                    />
                    <View style={styles.doubleTextView} >
                        <Text style={styles.upperText} >{Strings.expertise}</Text>
                        <View style={styles.lowerTextView} >
                            <Text style={styles.lowerText} >{Strings.expertiseName}</Text>
                            <Text style={styles.priceText} >{Strings.exampleText}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textCardView} >
                    <GraduationCap
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="bold"
                        style={styles.icon}
                    />
                    <View style={styles.doubleTextView} >
                        <Text style={styles.upperText} >{Strings.expertise}</Text>
                        <View style={styles.lowerTextView} >
                            <Text style={styles.lowerText} >{Strings.expertiseName}</Text>
                            <Text style={styles.priceText} >{Strings.exampleText}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textCardView} >
                    <Shield
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="bold"
                        style={styles.icon}
                    />
                    <Text style={styles.singleText} >{Strings.cancelation}</Text>
                    <Text style={styles.reviewText} >{Strings.review}</Text>
                </View>
                <View style={styles.textCardView} >
                    <LockKeyOpen
                        size={moderateScale(20)}
                        color={Colors.black}
                        weight="bold"
                        style={styles.icon}
                    />
                    <Text style={styles.singleText} >{Strings.changePassword}</Text>
                </View>
                <Pressable onPress={() => navigation.navigate(NavigationRoutes.editDetailsScreen)} >
                    <View style={styles.btnView} >
                        <Text style={styles.btnText} >{Strings.editProfile}</Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;
