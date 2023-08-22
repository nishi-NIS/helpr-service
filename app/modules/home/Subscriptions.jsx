import React from "react";
import { Text, Dimensions, View, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { Strings } from "../../constants";
import { styles } from "./SubscriptionsStyles";
import { CaretLeft } from "phosphor-react-native";
import { Colors, moderateScale } from "../../theme";

const Subscription = () => {
    const width = Dimensions.get('window').width - 30;
    const carouselItems = [...new Array(3).keys()];

    const renderItem = ({item, index}) => {
        return (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              height: 650,
              padding: 15,
              shadowColor: '#00000026',
              shadowOpacity: 1,
              shadowOffset: {width: -2, height: 4},
              shadowOpacity: 1,
              shadowRadius: 3,
            }}
            key={index}>
            <Text
              style={{
                fontSize: 26,
                lineHeight: 26,
                color: '#7F29D6',
                fontWeight: '700',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 600,
                lineHeight: 40,
                letterSpacing: 0,
                textAlign: 'left',
                marginTop: 20,
              }}>
              ${item.price}/<Text style={{fontSize: 25}}>m</Text>
            </Text>
    
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 21,
                letterSpacing: 0,
                textAlign: 'left',
                marginTop: 10,
              }}>
              This plan Includes:
            </Text>
            <View style={{marginTop: 5}}>
              {item.description ? (
                item.description.map((item1, index1) => (
                  <Text style={{padding: 5}} key={index1 + '' + index}>
                    <Ionicons
                      name="caret-forward-sharp"
                      color={'#7F29D6'}
                      size={15}
                    />
                    <Text
                      style={{fontWeight: '400', fontSize: 16, lineHeight: 20.96}}>
                      {item1}
                    </Text>
                  </Text>
                ))
              ) : (
                <></>
              )}
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholderTextColor={'black'}
                    style={[
                      styles.input,
                      {
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                      },
                    ]}
                    onChangeText={searchString => {
                      console.log('searchString', searchString);
                    }}
                    placeholder="Apply Promo Code"
                  />
                </View>
                <TouchableHighlight
                  style={[
                    styles.input,
                    {
                      flex: 0, // Set flex to 0 to prevent expanding
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#7F29D6',
                      width: 70,
                    },
                  ]}
                  onPress={() => {}}>
                  <View>
                    <Text style={{color: 'white'}}>Apply</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#7F29D6',
                  padding: 10,
                  marginTop: 15,
                  textAlign: 'center',
                  borderRadius: 5,
                }}
                onPress={this.navigateToProfile}>
                <View>
                  <Text style={{color: 'white', textAlign: 'center'}}>Pay Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      };

    return (
        <>
            <View style={styles.headerView} >
                <CaretLeft size={moderateScale(20)} weight="bold" color={Colors.black} style={styles.caretLeft} />
                <Text style={styles.subscriptionText} >{Strings.subscription}</Text>
                <Text></Text>
            </View>
            <View style={{ flex: 1, alignSelf: "center" }}>
                <Carousel
                    loop
                    width={width}
                    // height={width / 2}
                    // autoPlay={true}
                    data={carouselItems}
                    mode="parallax"
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    renderItem={renderItem}
                    // renderItem={({ index }) => (
                    //     <View
                    //         style={{
                    //             flex: 1,
                    //             borderWidth: 1,
                    //             justifyContent: 'center',
                    //         }}
                    //     >
                    //         <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    //             {index}
                    //         </Text>
                    //     </View>
                    // )}
                />
            </View>
        </>
    );
};

export default Subscription;
