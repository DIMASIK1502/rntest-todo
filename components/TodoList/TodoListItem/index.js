import React, {useState} from 'react';
import {Text, View, Animated, ActivityIndicator} from 'react-native';
import Swipable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

function renderRightActions(progress, deleteTodo, id, loading, setLoading) {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 0],
  });
  const onPress = async () => {
    if (!loading) {
      setLoading(true);
      deleteTodo(id).catch((err) => {
        setLoading(false);
        console.log(err);
      });
    }
  };
  return (
    <View style={{width: 80, flexDirection: 'row'}}>
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton style={styles.rightAction} onPress={onPress}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.rightActionText}>Удалить</Text>
          )}
        </RectButton>
      </Animated.View>
    </View>
  );
}

function TodoListItem({title, id, deleteTodo}) {
  const [loading, setLoading] = useState(false);

  return (
    <Swipable
      renderRightActions={(progress) =>
        renderRightActions(progress, deleteTodo, id, loading, setLoading)
      }>
      <View style={styles.todoItemContainer}>
        <Text style={styles.todoItemId}>{id}</Text>
        <Text style={styles.todoItemTitle}>{title}</Text>
      </View>
    </Swipable>
  );
}

export default React.memo(TodoListItem);
