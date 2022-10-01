import React from "react";
import { Text } from "react-native";

export default function FlatTextUnderLine({ text, font, color, size, textalign }) {
  let fonts = {
    medium: 'Raleway-Medium',
    bold: 'Raleway-Bold',
    black: 'Raleway-Black',
    extrabold: 'Raleway-ExtraBold',
    extralight: 'Raleway-ExtraLight',
    regular: 'Raleway-Regular',
    semibold: 'Raleway-SemiBold',
    q_bold: 'Quicksand-Bold',
    q_light: 'Quicksand-Light',
    q_medium: 'Quicksand-Medium',
    q_regular: 'Quicksand-Regular',
    q_semibold: 'Quicksand-SemiBold',
  };

    return (
      <Text
        style={{
          fontFamily: fonts[font],
          color: color,
          fontSize: size,
          textAlign: textalign,
          textDecorationLine: 'underline',
          
        }}
      >
        {text}
      </Text>
    );
  }

