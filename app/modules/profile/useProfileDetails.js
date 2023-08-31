import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../config';
import { EndPoints } from '../../constants';

export const useProfileDetails = () => {
  const [userProfile, setUserProfile] = React.useState('');

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.error('Error getting token from AsyncStorage', error);
      return null;
    }
  };

  useEffect(() => {
    // Example: Access and use the token
    getToken().then(token => {
      if (token) {
        console.log('Token:', token);
        // Now you can use the token for API requests or other purposes
      } else {
        console.log('No token found');
      }
    });
  }, []);

  const getProfile = async () => {
    const headers = {
      Authorization: 'Bearer ' + (await getToken()),
    };

    let requestOptions = {
      method: 'GET',
      headers: headers,
    };

    fetch(API_URL + EndPoints.getProfile, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('data', data?.provider);
        setUserProfile(data?.provider);
      })
      .catch(error => console.log('Error while fetching User Prolile', error));
  };

//   console.log('userProfile----', userProfile.profilePic);

  return{
    userProfile,
    setUserProfile,
    getProfile,
    getToken
  }
};
