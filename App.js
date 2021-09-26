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
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          height: 200,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          height: 300,
          width: 100,
          alignSelf: 'flex-start',
        }}
      />
    </View>
  );
}
