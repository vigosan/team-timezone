import React from "react";
import Header from "./Header";
import Members from "./Members";

require("spectre.css/dist/spectre.css");

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />
        <Members />
      </div>
    );
  }
}
