import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native";
import { LoginScreen, OTPVerificationScreen, SignupScreen } from "./modules";
import { styles } from "./utils";
import { AppContainer, AuthTopTabs } from "./navigation";
import SignupScreen2 from "./modules/auth/signup/SignupScreen2";

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      {/* <AuthTopTabs /> */}
      <AppContainer />
      {/* <LoginScreen /> */}
      {/* <SignupScreen2 /> */}
      {/* <SignupScreen /> */}
      {/* <OTPVerificationScreen /> */}
    </SafeAreaView>
  );
};

export default App;
