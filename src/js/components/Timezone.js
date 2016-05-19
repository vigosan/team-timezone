import React from "react";
import Members from "./Members";

export default (props) => {
  let { name, members } = props;

  return(
    <div className="column">
      <h2>{name}</h2>
      <Members members={members} />
    </div>
  );
};
