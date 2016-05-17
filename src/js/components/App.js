import React from "react";
import Header from "./Header";
import Timezones from "./Timezones";

export default (props) => {
  return(
    <div className="container">
      <Header />
      <Timezones />
    </div>
  );
};
