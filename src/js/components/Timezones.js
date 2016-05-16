import React from "react";
import Timezone from "./Timezone";

class Timezones extends React.Component {
  _groupMembersByTz() {
    return this.props.members.reduce((acc, member) => {
      let key = member.tz;
      acc[key] = acc[key] || [];
      acc[key].push(member);
      return acc;
    }, {});
  }

  render() {
    let membersByTz = this._groupMembersByTz();
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
