import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../../theme";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    topImage: {
        height: verticalScale(180),
        width: horizontalScale(375),
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        marginTop: verticalScale(38)
    },
    welcomeView: {
        alignItems: "center",
        padding: moderateScale(15)
    },
    welcomeText: {
        fontSize: moderateScale(24),
        fontWeight: '600',
        color: Colors.theme
    },
    subWelcomeText: {
        fontSize: moderateScale(16),
        color: Colors.black,
        textAlign: "center",
        marginTop: verticalScale(25)
    },
    tabTextView: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: verticalScale(10)
    },
    tabText: {
        fontSize: moderateScale(18),
        color: Colors.theme,
        fontWeight: '500',
        marginTop: verticalScale(13)
    },
    focusedText: {
        fontSize: moderateScale(18),
        color: Colors.theme,
        fontWeight: '500',
        marginTop: verticalScale(13)
    },
    unFocusedText: {
        fontSize: moderateScale(18),
        color: Colors.black,
        fontWeight: '500',
        marginTop: verticalScale(13)
    },
    pipeLine: {
        color: Colors.black,
        fontSize: moderateScale(18),
        paddingHorizontal: horizontalScale(10),
        marginTop: verticalScale(13)
    },
    uploadOuterView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: verticalScale(10)
    },
    uploadInnerView: {
        marginBottom: verticalScale(10),
        height: moderateScale(120),
        width: moderateScale(120),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        borderRadius: moderateScale(100),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.offWhite,
    },
    uploadImg: {
        height: verticalScale(20),
        width: horizontalScale(20)
    },
    uploadText: {
        textAlign: "center",
        marginTop: verticalScale(10),
        color: Colors.black
    },
    // textInputView: {
    //     borderWidth: moderateScale(1),
    //     borderColor: Colors.theme,
    //     width: horizontalScale(325),
    //     alignSelf: "center",
    //     height: verticalScale(50),
    //     marginVertical: verticalScale(10),
    //     borderRadius: moderateScale(8),
    //     backgroundColor: Colors.offWhite,
    // },
    // textInput: {
    //     fontSize: moderateScale(16),
    //     color: Colors.black,
    //     fontWeight: '400',
    //     flex: 1
    // },
    // errorView: {
    //     marginHorizontal: horizontalScale(6),
    //     marginVertical: moderateScale(2)
    // },
    // errorText: {
    //     color: Colors.red,
    //     fontSize: moderateScale(12),
    // },
    outerTextInputView: {
        marginBottom: verticalScale(12),
    },
    textInputView: {
        paddingHorizontal: horizontalScale(10),
        marginHorizontal: horizontalScale(10),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        height: verticalScale(50),
        borderRadius: moderateScale(8),
        backgroundColor: Colors.offWhite,
    },
    textInput: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontWeight: '400',
        flex: 1,
    },
    errorView: {
        paddingHorizontal: horizontalScale(4)
    },
    errorText: {
        color: Colors.red,
        fontSize: moderateScale(10),
    },
    button: {
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(120),
        marginTop: verticalScale(15),
        padding: moderateScale(15),
        marginBottom: verticalScale(15),
        borderRadius: moderateScale(10),
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '600',
    },
    createAccount: {
        textAlign: 'center',
        color: Colors.theme,
        textDecorationLine: 'underline',
        fontWeight: '600',
        marginBottom: verticalScale(20)
    },
    inputOuterView: {
        marginTop: verticalScale(5),
    },
    inputInnerView: {
        marginBottom: verticalScale(10),
        height: verticalScale(100),
        borderWidth: moderateScale(1),
        borderColor: Colors.theme,
        borderRadius: moderateScale(5),
        marginHorizontal: horizontalScale(10),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.offWhite,
    },
    inputUploadImg: {
        height: verticalScale(20),
        width: horizontalScale(20)
    },
    inputUploadText: {
        textAlign: "center",
        marginTop: verticalScale(10),
        color: Colors.black
    },
    // dropdown: {
    //     height: 40,
    //     margin: 5,
    //     marginLeft: 12,
    //     marginRight: 12,
    //     padding: 10,
    //     borderRadius: 5,
    //     borderColor: '#7F29D6',
    //     borderWidth: 1,
    //     backgroundColor: '#FBF7FB',
    //   },
    //   label: {
    //     position: 'absolute',
    //     backgroundColor: 'white',
    //     left: 22,
    //     top: 8,
    //     zIndex: 999,
    //     paddingHorizontal: 8,
    //     fontSize: 14,
    //   },
    // placeholderStyle: {
    //     fontSize: 16,
    //   },
    //   selectedTextStyle: {
    //     fontSize: 16,
    //   },
    //   iconStyle: {
    //     width: 20,
    //     height: 20,
    //   },
    //   inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    //   },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

