import React from "react";
import AppStore from "../stores/AppStore";
import SearchedMember from "./SearchedMember";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _getSearchedMembers() {
    return { members: AppStore.getSearchedMembers() };
  }

  componentWillMount() {
    this.setState(this._getSearchedMembers());
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this._getSearchedMembers);
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
