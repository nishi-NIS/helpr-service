import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { NavigationRoutes } from '../constants';
import AuthTopTabs from './AuthTopTabs';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './DrawerRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginScreen } from '../modules';

const RootStack = createStackNavigator();

const getIsSignedIn = async () => {
  const token = await AsyncStorage.getItem('token');
  return token ? true : false;
};

const AppContainer = () => {
  const [auth, setAuth] = useState();
  useEffect(async () => {
    const authGuard = await getIsSignedIn();
    setAuth(authGuard);
  }, []);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {!auth ? (
          <RootStack.Screen
            name={NavigationRoutes.authTopTabs}
            component={AuthTopTabs}
            options={{
              headerShown: false,
            }} />
        ) : (
          <RootStack.Screen
            name={NavigationRoutes.drawerRoutes}
            component={DrawerRoutes}
            options={{
              headerShown: false,
            }} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
