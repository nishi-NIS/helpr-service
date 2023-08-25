import React from "react";
import { Text, View, Image, Pressable, Animated, Switch, ScrollView, Modal, TextInput, TouchableOpacity } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";
import { NavigationRoutes, Strings } from "../../../constants";
import { styles } from "./ProfileScreenStyles";
import { CaretLeft, Envelope, GraduationCap, LockKeyOpen, Phone, Shield, Star, User, X } from "phosphor-react-native";
import Images from "../../../assests";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const [starRating, setStarRating] = React.useState(0);
    const animatedButtonScale = new Animated.Value(1);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
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
                <Pressable
                    // style={{ borderWidth: 1 }}
                    onPress={() => setShowModal(true)}
                >
                    <View style={styles.textCardView} >
                        <LockKeyOpen
                            size={moderateScale(20)}
                            color={Colors.black}
                            weight="bold"
                            style={styles.icon}
                        />
                        <Text style={styles.singleText} >{Strings.changePassword}</Text>
                    </View>
                </Pressable>
                {/* <Modal
                    visible={showModal}
                    animationType="none"
                    transparent={true}
                    propagateSwipe={true}
                >
                    <View style={{
                        backgroundColor: Colors.white,
                    }} >
                        <X
                            size={moderateScale(20)}
                            color={Colors.gray}
                            weight="bold"
                            style={{
                                alignSelf: "flex-end"
                            }}
                        />
                        <Text style={{
                            color: Colors.theme,
                            fontSize: moderateScale(20),
                            fontWeight: '600',
                            alignSelf: "center"
                        }} >{Strings.changePassword}</Text>
                        <TextInput
                            style={{ borderWidth: moderateScale(1) }}
                        />
                    </View>
                    <Text style={{ color: Colors.black }}
                        onPress={() => setShowModal(false)}
                    >Modal</Text>
                </Modal> */}
                <Modal
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => { }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                        <View style={{
                            width: 300,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            padding: 10,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
                            <Text
                                style={{
                                    padding: 10,
                                    color: Colors.theme,
                                    fontSize: 20,
                                    fontWeight: '700',
                                    alignSelf: "center"
                                }}>
                                Change Password
                            </Text>
                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    backgroundColor: '#FBF7FB',
                                    borderColor: Colors.theme,
                                    borderWidth: 1,
                                    borderRadius: 5
                                }} >
                                <Text style={{ color: Colors.black }} >Current Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    backgroundColor: '#FBF7FB',
                                    marginTop: 10,
                                    borderColor: Colors.theme,
                                    borderWidth: 1,
                                    borderRadius: 5
                                }} >
                                <Text style={{ color: Colors.black }} >New Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    backgroundColor: '#FBF7FB',
                                    marginTop: 10,
                                    borderColor: Colors.theme,
                                    borderWidth: 1,
                                    borderRadius: 5
                                }} >
                                <Text style={{ color: Colors.black }} >Confirm New Password</Text>
                            </TouchableOpacity>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                {/* <TouchableOpacity
                                    style={{
                                        padding: 10,
                                        backgroundColor: '#FFFFFF',
                                        marginTop: 10,
                                    }}
                                    onPress={() => setShowModal(false)}> */}
                                <Pressable onPress={() => setShowModal(false)} >
                                    <View style={{
                                        backgroundColor: Colors.theme,
                                        borderRadius: moderateScale(6),
                                        marginBottom: verticalScale(20),
                                        marginTop: verticalScale(50),
                                        shadowColor: Colors.black,
                                        shadowOffset: { height: verticalScale(2), width: horizontalScale(1) },
                                        shadowOpacity: 0.25,
                                        shadowRadius: moderateScale(3),
                                        elevation: moderateScale(1),
                                    }} >
                                        <Text style={styles.btnText} >Update Password</Text>
                                    </View>
                                </Pressable>
                                {/* </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                </Modal>
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
