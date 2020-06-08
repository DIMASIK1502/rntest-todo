import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

export default function HumbergerButton({navigation}) {
  const handleButtonPress = () => navigation.openDrawer();

  return (
    <View style={styles.buttonWrapper}>
      <Button title="меню" onPress={handleButtonPress} />
    </View>
  );
}
