import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DateHead from './DateHead';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SafeAreaInsets from './SafeAreaInsets';
import AddTodo from './AddTodo';
import Empty from './Empty';
import TodoList from './TodoList';
import todoStorage from './todoStorage';

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '작업환경 저장', done: false},
  ]);

  useEffect(() => {
    todoStorage.get().then(setTodos);
  }, []);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const index = todos.findIndex(todo => todo.id === id);
    const todo = todos[index];
    const newTodos = [...todos];
    newTodos.splice(index, 1, {...todo, done: !todo.done});

    setTodos(newTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.full}>
        <SafeAreaInsets />
        <KeyboardAvoidingView
          style={styles.avoid}
          behavior={Platform.select({ios: 'padding'})}>
          <DateHead date={today} />
          {todos.length > 0 ? (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          ) : (
            <Empty />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default App;
