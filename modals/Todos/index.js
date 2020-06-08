import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import TodoList from '../../components/TodoList';
import styles from './styles';

export default function TodosModal({navigation}) {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Button onPress={onPress} title="Закрыть" />
      </View>
      <TodoList />
    </SafeAreaView>
  );
}
