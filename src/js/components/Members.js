import React from "react";
import Member from "./Member";

class Members extends React.Component {
  render() {
    let members = this.props.members.map((member, index) => {
      return <Member key={index} member={member} />;
    });

    return(
      <div className="members">
        {members}
      </div>
    );
  }
}

export default Members;
