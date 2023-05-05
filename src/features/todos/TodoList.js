import React, {useCallback, useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {toggleTodo} from './todosSlice';

export function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const completedTodo = useMemo(() => {
    return todos.filter(item => item.completed);
  });

  const pendingdTodo = useMemo(() => {
    return todos.filter(item => !item.completed);
  });

  const onValueChange = useCallback(
    todo => {
      dispatch(toggleTodo(todo.id));
    },
    [dispatch],
  );

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pendingdTodo.length > 0 ? 'Todo List' : 'No pending todo'}</Text>
      {pendingdTodo.map((todo, index) => (
        <View key={todo.id} style={styles.rowView}>
          <Text style={styles.todoText}>{`${index + 1}. ${todo.text}`}</Text>
          <CheckBox
            testID={'pendingCheck' + index}
            style={{width: 10, height: 20}}
            disabled={false}
            value={todo.completed}
            boxType="square"
            onValueChange={() => onValueChange(todo)}
          />
        </View>
      ))}
      <Text style={styles.titleCompleted}>
        {completedTodo.length == 0
          ? 'Please complete pending Todo'
          : 'Completed List'}
      </Text>
      {completedTodo.map((todo, index) => (
        <View key={todo.id} style={styles.rowView}>
          <Text style={styles.todoText}>{`${index + 1}. ${todo.text}`}</Text>
          <CheckBox
            testID={'completeCheck' + index}
            style={{width: 10, height: 20}}
            disabled={false}
            boxType="square"
            value={todo.completed}
            onValueChange={() => onValueChange(todo)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleCompleted: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  rowView: {
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoText: {
    margin: 4,
  },
});
