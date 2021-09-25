import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native World Test.</Text>
      <TouchableNativeFeedback onPress={() => console.log('Image tapped')}>
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: 'dodgerblue',
          }}></View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
