import React from "react";
import Members from "./Members";

class Timezone extends React.Component {
  render() {
    let { name, members } = this.props;

    return(
      <div className="timezone">
        <h1>{name}</h1>
        <Members members={members} />
      </div>
    );
  }
}

export default Timezone;

