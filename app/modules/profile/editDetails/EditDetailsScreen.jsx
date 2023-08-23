import { CaretLeft, Star } from "phosphor-react-native";
import React from "react";
import { Text, ScrollView, Animated, Image, View, Pressable, TextInput } from "react-native";
import { Strings } from "../../../constants";
import { styles } from "./EditDetailsStyles";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";
import Images from "../../../assests";
import { useNavigation } from "@react-navigation/native";

const EditDetailsScreen = () => {
    const [starRating, setStarRating] = React.useState(0);
    const animatedButtonScale = new Animated.Value(1);
    const navigation = useNavigation();

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
                <Pressable onPress={() => navigation.goBack()} >
                    <CaretLeft
                        size={moderateScale(20)}
                        weight="bold"
                        color={Colors.black}
                        style={styles.caretIcon}
                    />
                </Pressable>
                <Text style={styles.subscriptionText} >{Strings.profile}</Text>
                <Text></Text>
            </View>
            <View style={styles.imgOuterView} >
                <View
                //  style={styles.imgInnerView} 
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
                <Text style={styles.ratingText} >{Strings.ratings}</Text>
            </View>
            <View style={styles.textInputOuterView} >
                <Text style={styles.textHeader} >Name</Text>
                <View style={styles.textInputView} >
                    <TextInput
                        placeholder="John Methon"
                        placeholderTextColor={Colors.black}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <View style={styles.textInputOuterView} >
                <Text style={styles.textHeader} >Email</Text>
                <View style={styles.textInputView} >
                    <TextInput
                        placeholder={Strings.exampleMail}
                        placeholderTextColor={Colors.black}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <View style={styles.textInputOuterView} >
                <Text style={styles.textHeader} >Mobile Number</Text>
                <View style={styles.textInputView} >
                    <TextInput
                        placeholder={Strings.phn}
                        placeholderTextColor={Colors.black}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <View style={styles.textInputOuterView} >
                <Text style={styles.textHeader} >Location</Text>
                <View style={[styles.textInputView, {
                    height: verticalScale(110)
                }]} >
                    <TextInput
                        placeholder="Ahmedabad, Gujarat, India"
                        placeholderTextColor={Colors.black}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <View style={styles.dualView} >
                <View style={styles.leftView} >
                    <Text style={styles.textHeader} >Add Service</Text>
                    <View style={[styles.textInputView, {
                        width: horizontalScale(165)
                    }]} >
                        <TextInput
                            placeholder="Plumbing"
                            placeholderTextColor={Colors.black}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.rightView} >
                    <Text style={styles.textHeader} >Setup the hourly rate</Text>
                    <View style={[styles.textInputView, {
                        width: horizontalScale(165)
                    }]} >
                        <TextInput
                            placeholder="$10"
                            placeholderTextColor={Colors.black}
                            style={styles.textInput}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.dualView} >
                <View style={styles.leftView} >
                    <Text style={styles.textHeader} >Add Service</Text>
                    <View style={[styles.textInputView, {
                        width: horizontalScale(165)
                    }]} >
                        <TextInput
                            placeholder="Select Service"
                            placeholderTextColor={Colors.gray}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.rightView} >
                    <Text style={styles.textHeader} >Setup the hourly rate</Text>
                    <View style={[styles.textInputView, {
                        width: horizontalScale(165)
                    }]} >
                        <TextInput
                            placeholder="Hourly Rate"
                            placeholderTextColor={Colors.gray}
                            style={styles.textInput}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.textInputOuterView} >
                <Text style={styles.addServices} >{Strings.addServices}</Text>
            </View>
            <View style={styles.textInputOuterView} >
                <Text style={styles.textHeader} >{Strings.cancelation}</Text>
                <View style={[styles.textInputView, {
                    height: verticalScale(110),
                }]} >
                    <TextInput
                        placeholder="It is a long established fact that a reader will be 
                        distracted by the readable content of a page when looking at its 
                        layout. The point of using Lorem Ipsum is that it has a mare-or-"
                        placeholderTextColor={Colors.black}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <Pressable>
                <View style={styles.btnView} >
                    <Text style={styles.btnText} >{Strings.updateProfile}</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
};

export default EditDetailsScreen;
