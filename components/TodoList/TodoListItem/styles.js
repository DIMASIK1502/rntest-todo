import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  todoItemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  todoItemTitle: {
    fontSize: 18,
  },
  deleteOpacity: {
    justifyContent: 'center',
  },
  deleteText: {
    paddingHorizontal: 16,
    textAlignVertical: 'center',
    flex: 1,
    backgroundColor: 'red',
    color: 'white',
  },
  todoItemId: {
    color: 'red',
    marginRight: 8,
  },
  buttonWrapper: {
    flex: 1,
  },
  rightActionContinaer: {width: 80, flexDirection: 'row'},
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rightActionText: {color: 'white', fontSize: 16},
});
