import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationRoutes } from '../constants';
import { LoginScreen, SignupScreen } from '../modules';
import SignupScreen2 from '../modules/auth/signup/SignupScreen2';

const AuthStack =  createNativeStackNavigator();

const AuthTopTabs = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name={NavigationRoutes.login}
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name={NavigationRoutes.signup}
                    component={SignupScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name={NavigationRoutes.signup2}
                    component={SignupScreen2}
                    options={{
                        headerShown: false
                    }}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

export default AuthTopTabs;
