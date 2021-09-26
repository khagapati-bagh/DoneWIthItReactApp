import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', //horizontal
        justifyContent: 'center', //main axis
        alignItems: 'center', //secondary axis
        alignContent: 'center', //only work on wrapping
        flexWrap: 'wrap',
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          height: 100,
          flexBasis: 300, //work as height or width
          flexGrow: 1,
          flexShrink: 1,
          //width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}
