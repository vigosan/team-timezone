import React from "react";
import AppStore from "../stores/AppStore";
import Header from "./Header";
import Members from "./Members";

class App extends React.Component {
  _getMembers() {
    return { members: AppStore.getMembers() };
  }

  _onChange() {
    this.setState(this._getMembers);
  }

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    this.setState(this._getMembers());
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let { members } = this.state;

    return(
      <div className="container">
        <Header members={members} />
        <Members members={members} />
      </div>
    );
  }
};

export default App;
