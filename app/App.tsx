import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native";
import { LoginScreen } from "./modules";
import { styles } from "./utils";
import { AuthTopTabs } from "./navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      {/* <LoginScreen /> */}
      <AuthTopTabs />
    </SafeAreaView>
  );
};

export default App;
