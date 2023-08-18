import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Colors } from "../../../theme";

const SignupScreen2 = () => {
    return(
        <ScrollView style={styles.main} >
             <StatusBar
                    animated={true}
                    backgroundColor={Colors.statusBar}
                    networkActivityIndicatorVisible={true}
                    currentHeight={true}
                    translucent={true}
                />
        </ScrollView>
    );
};

export default SignupScreen2;
