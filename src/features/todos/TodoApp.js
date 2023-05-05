import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <AddTodo />
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20
  },
});
