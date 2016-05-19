import React from "react";
import Timezone from "./Timezone";
import AppStore from "../stores/AppStore";

class Timezones extends React.Component {
  _getMembersGroupedByTz() {
    return { membersByTz: AppStore.getMembersGroupedByTz() };
  }

  _onChange() {
    this.setState(this._getMembersGroupedByTz);
  }

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    this.setState(this._getMembersGroupedByTz);
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let { membersByTz } = this.state;

    let timezones = Object.keys(membersByTz).map((tz, index) => {
      return <Timezone
      key={index}
      name={tz}
      members={membersByTz[tz]} />;
    });

    return(
      <div className="columns">
      {timezones}
      </div>
    );
  }
}

export default Timezones;
