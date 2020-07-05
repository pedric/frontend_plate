import React from "react";
import ReactDOM, { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <h1>Hej world</h1>;
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
