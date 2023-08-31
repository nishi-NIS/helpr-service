import { CaretRight } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Colors, horizontalScale, moderateScale } from '../../../theme';
import { styles } from './CauraselCardStyles';

const CarouselCard = ({
  header,
  price,
  mText,
  planIncludes,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  applyCode,
  apply,
  payNow,
}) => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.premiumText}>{header}</Text>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{price}</Text>
          <Text style={styles.mText}>{mText}</Text>
        </View>
        <Text style={styles.planText}>{planIncludes}</Text>
        <View style={styles.textMainView}>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text1}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text2}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text3}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text4}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text5}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text6}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text7}</Text>
          </View>
          <View style={styles.textView}>
            <CaretRight
              size={moderateScale(16)}
              color={Colors.theme}
              weight="fill"
            />
            <Text style={styles.text}>{text8}</Text>
          </View>
        </View>
      </View>
      <View style={styles.applyCodeView}>
        <View style={styles.applyCodeInnerView}>
          <View style={{flex: 1}}>
            <TextInput
              placeholderTextColor={Colors.gray}
              style={[
                styles.input,
                {
                  borderTopLeftRadius: moderateScale(5),
                  borderBottomLeftRadius: moderateScale(5),
                },
              ]}
              onChangeText={searchString => {
                console.log('searchString', searchString);
              }}
              placeholder={applyCode}
            />
          </View>
          <Pressable
            style={[
              styles.input,
              {
                flex: 0, // Set flex to 0 to prevent expanding
                borderTopRightRadius: moderateScale(5),
                borderBottomRightRadius: moderateScale(5),
                alignItems: 'center',
                backgroundColor: Colors.theme,
                width: horizontalScale(80),
              },
            ]}
            onPress={() => {}}>
            <View>
              <Text style={styles.btnText}>{apply}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>{payNow}</Text>
        </View>
      </View>
    </>
  );
};

export default CarouselCard;
