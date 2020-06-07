import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import TodoList from '../../components/TodoList';

export default function TodosModal({navigation}) {
  onPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 8, alignItems: 'flex-end'}}>
        <Button
          onPress={onPress}
          title="Закрыть"
          style={{justifySelf: 'flex-end'}}></Button>
      </View>
      <TodoList />
    </SafeAreaView>
  );
}

//  <Button onPress={() => navigation.goBack()} title="Dismiss" />
