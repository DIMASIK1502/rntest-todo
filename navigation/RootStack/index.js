import React from 'react';
import TodosModal from '../../modals/Todos';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from '../Drawer';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Drawer">
      <Stack.Screen name="TodosModal" component={TodosModal}></Stack.Screen>
      <Stack.Screen name="Drawer" component={Drawer}></Stack.Screen>
    </Stack.Navigator>
  );
}
