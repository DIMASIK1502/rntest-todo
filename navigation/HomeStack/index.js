import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HumbergerButton from '../../components/HamburgerButton';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();

const navigationOptions = ({navigation, title}) => ({
  header: title,
  headerRight: () => <HumbergerButton navigation={navigation} />,
});

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={navigationOptions}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
