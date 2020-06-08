import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import HomeStack from '../HomeStack';

const DrawerNav = createDrawerNavigator();

const renderDrawerContent = (props) => <DrawerContent {...props} />;

export default function Drawer() {
  return (
    <DrawerNav.Navigator
      initialRouteName="HomeStack"
      drawerContent={renderDrawerContent}>
      <DrawerNav.Screen name="HomeStack" component={HomeStack} />
    </DrawerNav.Navigator>
  );
}
