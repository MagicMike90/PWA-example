import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import ChatContainer from "./ChatContainer";
import "./App.css";

class App extends Component {
  state = { user: null };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.props.history.push("/login");
      }
    });
  }
  render() {
    return (
      <div id="container">
        <Route path="/login" component={LoginContainer} />
        <Route exact path="/" component={ChatContainer} />
      </div>
    );
  }
}
export default App;
