import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => {
        return <TodoItem item={item} onToggle={onToggle} onRemove={onRemove} />;
      }}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
