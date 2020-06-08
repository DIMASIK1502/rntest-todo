import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export default function DrawerContent({navigation}) {
  const onPress = () => navigation.navigate('TodosModal');
  return (
    <DrawerContentScrollView>
      <DrawerItem onPress={onPress} label="Todos" />
    </DrawerContentScrollView>
  );
}
