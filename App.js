import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation/RootStack';

function App() {
  return (
    <NavigationContainer mode="modal">
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
