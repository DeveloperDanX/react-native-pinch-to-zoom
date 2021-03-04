import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PinchableBox from './PinchableBox';

const image =
  'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={{ fontSize: 50, marginBottom: 50 }}>Pinch to zoom</Text>
      <PinchableBox imageUri={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
