import * as React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContent from './components/DrawerContent';
import TodosModal from './modals/Todos';

function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
const HumbergerButton = ({navigation}) => {
  const handleButtonPress = () => navigation.openDrawer();
  return <Button title="меню" onPress={handleButtonPress}></Button>;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  const navigationOptions = ({navigation, title}) => ({
    header: title,
    headerRight: () => <HumbergerButton navigation={navigation} />,
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={navigationOptions}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  renderDrawerContent = (props) => <DrawerContent {...props} />;
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={renderDrawerContent}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="DrawerStack">
        <Stack.Screen name="TodosModal" component={TodosModal}></Stack.Screen>
        <Stack.Screen name="DrawerStack" component={DrawerStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
