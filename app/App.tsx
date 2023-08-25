import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native";
import { LoginScreen, OTPVerificationScreen, SignupScreen, ViewRatings } from "./modules";
import { styles } from "./utils";
import { AppContainer, AuthTopTabs, DrawerRoutes } from "./navigation";
import SignupScreen2 from "./modules/auth/signup/SignupScreen2";
import { Provider } from "react-redux";
import { store } from "./redux";

const App = () => {
  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container} >
        {/* <AuthTopTabs /> */}
        <AppContainer />
        {/* <LoginScreen /> */}
        {/* <SignupScreen2 /> */}
        {/* <SignupScreen /> */}
        {/* <OTPVerificationScreen /> */}
        {/* <DrawerRoutes /> */}
        {/* <ViewRatings /> */}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
