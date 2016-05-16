import React from "react";
import Members from "./Members";

class Timezone extends React.Component {
  render() {
    let { name, members } = this.props;

    return(
      <div className="column">
        <h2>{name}</h2>
        <Members members={members} />
      </div>
    );
  }
}

export default Timezone;

