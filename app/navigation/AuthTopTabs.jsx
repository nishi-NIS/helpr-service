import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../constants';
import {
  ForgotPasswordOtpScreen,
  ForgotPasswordScreen,
  LoginScreen,
  OTPVerificationScreen,
  ResetPasswordScreen,
  SignupScreen,
  SignupScreen2,
} from '../modules';
import DrawerRoutes from './DrawerRoutes';

const AuthStack = createNativeStackNavigator();

const AuthTopTabs = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationRoutes.login}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.signup}
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.signup2}
        component={SignupScreen2}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.otpScreen}
        component={OTPVerificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.forgotScreen}
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.forgotOtpScreen}
        component={ForgotPasswordOtpScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.resetPasswordScreen}
        component={ResetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={NavigationRoutes.drawerRoutes}
        component={DrawerRoutes}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthTopTabs;
