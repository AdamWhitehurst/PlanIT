// Navigation Imports
import React, { Component } from "react";
import { RootStack } from "./main_navigation";
import { SafeAreaView } from "react-native";
// AWS Imports
import Amplify, { Auth, Storage } from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
// Redux Imports
import { Provider } from "react-redux";
import { loadSavedTodos } from "./store/todo_reducer";
import store from "./store/create_store";

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    loadTodos();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <RootStack />
        </Provider>
      </SafeAreaView>
    );
  }
}

async function loadTodos() {
  Storage.get("todos.txt", { download: true, level: "protected" })
    .then(storedTodosData => {
      let storedTodos = JSON.parse(storedTodosData.Body.toString());
      store.dispatch(loadSavedTodos(storedTodos));
    })
    .catch(error => {
      if (!error.code == "NoSuchKey") {
        console.log("loadTodos() error: ", error);
      }
    });
}

async function saveTodos() {
  // Get the state from the data store
  // Because the listener only knows that the data store's
  // state has changed, but not what has changed.
  let newStoreData = store.getState();
  let newTodos = JSON.stringify(newStoreData.todo_reducer.todos);
  await Storage.put("todos.txt", newTodos, { level: "protected" }).catch(
    error => {
      if (!error.code == "NotImplemented")
        console.error("saveTodos() error: ", error);
    }
  );
}
// Subscribe to listen for any changes to the
// data store. The function returned can be
// invoked to unlisten.
const unsubscribe = store.subscribe(saveTodos);

export default withAuthenticator(App);
