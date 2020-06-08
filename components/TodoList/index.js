import React, {Component} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import TodoListItem from './TodoListItem';
import styles from './styles';
import axios from 'axios';

const LIMIT = 25;
const Threshold = 0.5;
const NumToRender = 9;

const Separator = () => <View style={styles.itemSeparator} />;

const keyExtractor = (item) => {
  return `${item.id}-item`;
};

export default class TodoList extends Component {
  state = {
    refreshing: true,
    loading: false,
    data: [],
    page: 1,
  };

  componentDidMount() {
    this.getTodoList()
      .then((res) => {
        this.setState({refreshing: false, data: res.data});
      })
      .catch(() => {
        this.setState({refreshing: false});
      });
  }
  handleOnRefresh = () => {
    this.setState({refreshing: true, page: 1});
    this.getTodoList().then((res) => {
      this.setState({data: res.data, refreshing: false});
    });
  };

  deleteTodo = (id) =>
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {})
      .then((res) => {
        this.setState((prevState) => ({
          data: prevState.data.filter((a) => a.id !== id),
        }));
      });

  handleLoadMore = async () => {
    const {page, loading} = this.state;
    const newPage = page + 1;

    if (!loading) {
      this.setState({loading: true});
      this.getTodoList(newPage).then((res) => {
        this.setState((prevState) => ({
          page: newPage,
          loading: false,
          data: [...prevState.data, ...res.data],
        }));
      });
    }
  };

  getTodoList = (page = 1) =>
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _page: page,
        _limit: LIMIT,
      },
    });

  renderItem = ({item}) => (
    <TodoListItem {...item} deleteTodo={this.deleteTodo} />
  );

  renderFooter = () => (
    <View style={styles.listFooter}>
      <ActivityIndicator animating size="large" />
    </View>
  );

  render() {
    const {data, refreshing, loading} = this.state;

    return (
      <FlatList
        refreshing={refreshing}
        onRefresh={this.handleOnRefresh}
        ListFooterComponent={loading ? this.renderFooter : null}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={Threshold}
        contentContainerStyle={styles.todoListContentContainer}
        initialNumToRender={NumToRender}
        keyExtractor={keyExtractor}
        data={data}
        ItemSeparatorComponent={Separator}
        renderItem={this.renderItem}
      />
    );
  }
}
