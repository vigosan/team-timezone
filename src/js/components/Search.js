import React from "react";
import AppStore from "../stores/AppStore";
import SearchedMember from "./SearchedMember";

function getSearchedMembers() {
  return { members: AppStore.getSearchedMembers() };
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = getSearchedMembers();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getSearchedMembers);
  }

  render() {
    let searchedMembers = this.state.members.map(member => {
      return <SearchedMember key={member.id} member={member} />;
    });

    return(
      <div className="form-autocomplete">
        <div className="form-autocomplete-input">
          {searchedMembers}
          <input className="form-input" type="text" placeholder="Search..." />
        </div>
      </div>
    );
  }
}

export default Search;
