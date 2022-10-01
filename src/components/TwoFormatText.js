import React from 'react';
import {Text} from 'react-native';

export default function TwoFormatText({boldText, normalText}) {
  return (
    <Text
      style={{
        fontFamily: 'Quicksand-Bold',
        color: '#333',
        fontSize: 16,
      }}>
      {boldText}
      <Text
        style={{
          fontFamily: 'Quicksand-Regular',
          color: '#333',
          fontSize: 16,
        }}>
        {normalText}
      </Text>
    </Text>
  );
}
