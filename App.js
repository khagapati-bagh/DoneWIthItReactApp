import React from 'react';
import {StyleSheet, SafeAreaView, View, Dimensions} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));
  console.log(Dimensions.get('window'));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          height: '30%',
          width: '100%',
        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
