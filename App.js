import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buycoffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)

    })
  }


  const submitHandler = (text) => {
   setTodos((prevTodos) => {
    return [
      { text: text, key: Math.random().toString()},
      ...prevTodos
    ]
   })
  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('dismissed Keyboard');
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list : {
    flex: 1,
    marginTop: 20,
  },
});

