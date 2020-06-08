import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
