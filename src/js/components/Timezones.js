import React from "react";
import Members from "./Members";
import Search from "./Search";

export default class App extends React.Component {
  render() {
    return(
      <div className="members">
        <Members />
        <hr />
        <Search />
      </div>
    );
  }
}

