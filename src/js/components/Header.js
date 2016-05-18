import React from "react";
import Search from "./Search";

class Header extends React.Component {
  render() {
    let { members } = this.props;

    return (
      <header className="navbar">
        <section className="navbar-section">
        </section>

        <section className="navbar-section">
          <Search foo={members} members={members} />
        </section>
      </header>
    );
  }
}

export default Header;
