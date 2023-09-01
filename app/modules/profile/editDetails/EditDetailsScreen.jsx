import {CaretLeft, Star} from 'phosphor-react-native';
import React, {useEffect} from 'react';
import {
  Text,
  ScrollView,
  Animated,
  Image,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import {EndPoints, Strings} from '../../../constants';
import {styles} from './EditDetailsStyles';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import Images from '../../../assests';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useProfileDetails} from '../useProfileDetails';
import * as Yup from 'yup';
import {useFormik} from 'formik';

const EditDetailsScreen = () => {
  const [starRating, setStarRating] = React.useState(0);
  const animatedButtonScale = new Animated.Value(1);
  const navigation = useNavigation();

  const {userProfile, setUserProfile, getProfile, getToken} =
    useProfileDetails();

  useEffect(() => {
    getToken();
    getProfile();
  }, []);

  console.log('|||||||||||', userProfile);

  const validationSchema = Yup.object().shape({
    // firstName: Yup.string(),
    // lastName: Yup.string(),
    name: Yup.string(),
    email: Yup.string(),
    phone: Yup.string(),
    location: Yup.string(),
    addService: Yup.string(),
    hourlyRate: Yup.string(),
    cancelationPolicy: Yup.string(),
  });

  const updateProfile = async formData => {
    const userData = {
    //   firstName: userProfile.firstName,
    //   lastName: userProfile.lastName,
      email: formik.values.email,
      phone: formik.values.phone,
      location: '',
      addService: '',
      hourlyRate: '',
      cancelationPolicy: '',
    };

    console.log("userData", userData)
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + (await getToken()),
    };

    let requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formData),
    };

    fetch(API_URL + EndPoints.updateProfile, requestOptions)
      .then(response => response.json())
      .then(data => console.log('updateProfile data', data))
      .catch(error =>
        console.log('Error while fetching Update User Profile', error),
      );
  };

  const formik = useFormik({
    initialValues: {
      name: `${userProfile.firstName} ${userProfile.lastName}`,
      email: userProfile.email,
      phone: userProfile.phone,
      location: '',
      addService: '',
      hourlyRate: '',
      cancelationPolicy: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
        console.log("values", values)
      updateProfile(values);
    },
  });

    const editProfile = async () => {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + (await getToken()),
      };

      let requestOptions = {
        method: 'POST',
        headers: headers,
      };

      fetch(API_URL + EndPoints.updateProfile, requestOptions)
        .then(response => response.json())
        .then(data => console.log('updateProfile data', data))
        .catch(error =>
          console.log('Error while fetching Update User Profile', error),
        );
    };

    useEffect(() => {
      editProfile();
    }, []);

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
    transform: [{scale: animatedButtonScale}],
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.headerView}>
        <Pressable onPress={() => navigation.goBack()}>
          <CaretLeft
            size={moderateScale(20)}
            weight="bold"
            color={Colors.black}
            style={styles.caretIcon}
          />
        </Pressable>
        <Text style={styles.subscriptionText}>{Strings.profile}</Text>
        <Text></Text>
      </View>
      <View style={styles.imgOuterView}>
        <View
        //  style={styles.imgInnerView}
        >
          <Image source={Images.loginBG} style={styles.image} />
        </View>
        <View style={styles.textView}>
          <Text
            style={
              styles.text
            }>{`${userProfile.firstName} ${userProfile.lastName}`}</Text>
        </View>
      </View>
      <View style={styles.container}>
        {/* <Text style={styles.heading}>{starRating ? `${starRating}*` : 'Tap to rate'}</Text> */}
        <View style={styles.stars}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(1)}>
            <Animated.View style={animatedScaleStyle}>
              <Star
                color={Colors.starColor}
                size={moderateScale(24)}
                weight={starRating >= 1 ? 'fill' : 'regular'}
                style={{marginHorizontal: horizontalScale(1)}}
              />
            </Animated.View>
          </Pressable>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(2)}>
            <Animated.View style={animatedScaleStyle}>
              <Star
                color={Colors.starColor}
                size={moderateScale(24)}
                weight={starRating >= 2 ? 'fill' : 'regular'}
                style={{marginHorizontal: horizontalScale(1)}}
              />
            </Animated.View>
          </Pressable>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(3)}>
            <Animated.View style={animatedScaleStyle}>
              <Star
                color={Colors.starColor}
                size={moderateScale(24)}
                weight={starRating >= 3 ? 'fill' : 'regular'}
                style={{marginHorizontal: horizontalScale(1)}}
              />
            </Animated.View>
          </Pressable>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(4)}>
            <Animated.View style={animatedScaleStyle}>
              <Star
                color={Colors.starColor}
                size={moderateScale(24)}
                weight={starRating >= 4 ? 'fill' : 'regular'}
                style={{marginHorizontal: horizontalScale(1)}}
              />
            </Animated.View>
          </Pressable>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(5)}>
            <Animated.View style={animatedScaleStyle}>
              <Star
                color={Colors.starColor}
                size={moderateScale(24)}
                weight={starRating >= 5 ? 'fill' : 'regular'}
                style={{marginHorizontal: horizontalScale(1)}}
              />
            </Animated.View>
          </Pressable>
        </View>
        <Text style={styles.ratingNumber}>{`(${starRating})`}</Text>
        <Text style={styles.ratingText}>{Strings.ratings}</Text>
      </View>
      <View style={styles.textInputOuterView}>
        <Text style={styles.textHeader}>Name</Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="John Methon"
            placeholderTextColor={Colors.gray}
            style={styles.textInput}
            defaultValue={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
          />
        </View>
      </View>
      <View style={styles.textInputOuterView}>
        <Text style={styles.textHeader}>Email</Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder={Strings.exampleMail}
            placeholderTextColor={Colors.gray}
            style={styles.textInput}
            defaultValue={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
        </View>
      </View>
      <View style={styles.textInputOuterView}>
        <Text style={styles.textHeader}>Mobile Number</Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder={Strings.examplePhn}
            placeholderTextColor={Colors.gray}
            style={styles.textInput}
            defaultValue={`+91 ${userProfile.phone}`}
          />
        </View>
      </View>
      <View style={styles.textInputOuterView}>
        <Text style={styles.textHeader}>Location</Text>
        <View
          style={[
            styles.textInputView,
            {
              height: verticalScale(110),
            },
          ]}>
          <TextInput
            placeholder="Ahmedabad, Gujarat, India"
            placeholderTextColor={Colors.gray}
            style={styles.textInput}
            defaultValue={userProfile.location}
          />
        </View>
      </View>
      <View style={styles.dualView}>
        <View style={styles.leftView}>
          <Text style={styles.textHeader}>Add Service</Text>
          <View
            style={[
              styles.textInputView,
              {
                width: horizontalScale(165),
              },
            ]}>
            <TextInput
              placeholder="Plumbing"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.textHeader}>Setup the hourly rate</Text>
          <View
            style={[
              styles.textInputView,
              {
                width: horizontalScale(165),
              },
            ]}>
            <TextInput
              placeholder="$10"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.dualView}>
        <View style={styles.leftView}>
          <Text style={styles.textHeader}>Add Service</Text>
          <View
            style={[
              styles.textInputView,
              {
                width: horizontalScale(165),
              },
            ]}>
            <TextInput
              placeholder="Select Service"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.textHeader}>Setup the hourly rate</Text>
          <View
            style={[
              styles.textInputView,
              {
                width: horizontalScale(165),
              },
            ]}>
            <TextInput
              placeholder="Hourly Rate"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.textInputOuterView}>
        <Text style={styles.addServices}>{Strings.addServices}</Text>
      </View>
      <View style={styles.textInputOuterView}>
        <Text style={styles.textHeader}>{Strings.cancelation}</Text>
        <View
          style={[
            styles.textInputView,
            {
              height: verticalScale(110),
            },
          ]}>
          <TextInput
            placeholder=""
            placeholderTextColor={Colors.gray}
            style={styles.textInput}
          />
        </View>
      </View>
      <Pressable onPress={formik.handleSubmit}>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>{Strings.updateProfile}</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default EditDetailsScreen;
