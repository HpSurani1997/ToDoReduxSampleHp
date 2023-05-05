import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from './todosSlice';

export const AddTodo = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleSumbit = useCallback(() => {
    if (!text) {
      Alert.alert('please enter To-do');
      return;
    }
    dispatch(addTodo(text));
    setText('');
  }, [dispatch, text]);

  return (
    <View style={styles.container}>
      <TextInput
        testID="todoInput"
        placeholder="Todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <TouchableOpacity
        testID="addBtn"
        onPress={handleSumbit}
        style={styles.btnStyle}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
  },
  btnStyle: {
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  container: {
    margin: 2,
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 12,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
});
