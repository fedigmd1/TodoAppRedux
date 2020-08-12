import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo(text) {
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
        }}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="eg. Create New Video"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }} />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={{ height: 50, backgroundColor: "#eaeaea" }}>
            <Ionicons name='md-add' size={20} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);
