import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export default function DrawerContent({navigation}) {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        onPress={() => navigation.navigate('TodosModal')}
        label="Todos"
      />
    </DrawerContentScrollView>
  );
}
