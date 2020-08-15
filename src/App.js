import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchLists } from "store/actions";

import { Sidebar, Tasks } from "components";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.onFetchLists();
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Tasks />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLists: () => dispatch(fetchLists()),
  };
};

export default connect(null, mapDispatchToProps)(App);
