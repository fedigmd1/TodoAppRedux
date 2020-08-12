import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { console.log("clicked") }} >
          <Text>TodoApp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});