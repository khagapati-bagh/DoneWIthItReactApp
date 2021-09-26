import React from 'react';
import {StyleSheet, SafeAreaView, View, Dimensions} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  const orientation = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          height: orientation.landscape ? '100%' : '30%',
          width: '100%',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
