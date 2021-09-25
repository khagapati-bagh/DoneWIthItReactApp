import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function App() {
  console.log('a');
  let x = 1;

  const handlePress = () => console.log('Text Pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native World Test Today. this is very long line using the
        property
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
