import React from "react";
import { TextInput } from "react-native";
import { Colors } from "../../theme";

const CustomTextInput = ({placeholder, name, formik, autoComplete, keyboardType, secureTextEntry}) => {
    const {handleBlur, handleChange} = formik;

    return(
        <TextInput
        placeholder={placeholder}
        autoComplete={autoComplete}
        placeholderTextColor={Colors.gray}
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        style={{color: Colors.black}}
        />
    );
};

export default CustomTextInput;
