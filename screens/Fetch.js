import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput
} from 'react-native';

import {
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';
import {db} from '../Firebase/config'

function Fetch() {

  const [todos, setTodos] = useState({});
  const [presentTodo, setPresentTodo] = useState('');
  const todosKeys = Object.keys(todos);

  useEffect(() => {
    return onValue(ref(db, '/todos'), querySnapShot => {
      let data = querySnapShot.val() || {};
      let todoItems = {...data};
      setTodos(todoItems);
    });
  }, []);

  return(
    <View>
    {todosKeys.length > 0 ? (
      todosKeys.map(key => (
        <ToDoItem
          key={key}
          id={key}
          todoItem={todos[key]}
        />
      ))
    ) : (
      <Text>No todo item</Text>
    )}
  </View>
  );

  // connect to firestore and get the data
}


export default Fetch;