import React from "react";
import AppStore from "../stores/AppStore";
import AutocompleteInput from "./Search/AutocompleteInput";
import AutocompleteList from "./Search/AutocompleteList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = { searchQuery: "", searching: false };
  }

  _onChange() {
    this.setState(this._getMembers);
  }

  _changeSearchQuery(searchQuery) {
    this.setState({ searchQuery: searchQuery });
  }

  _toogleSearching() {
    this.setState({ searching: !this.state.searching });
  }

  _getMembers() {
    return { members: AppStore.getMembers() };
  }

  componentWillMount() {
    this.setState(this._getMembers());
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let { searchQuery, searching, members } = this.state;

    return (
      <div className="form-autocomplete">
        <AutocompleteInput
          searchQuery={searchQuery}
          onSearchQueryChanged={this._changeSearchQuery.bind(this)}
          handleOnFocus={this._toogleSearching.bind(this)}
          handleOnBlur={this._toogleSearching.bind(this)}
          members={members} />
        <AutocompleteList members={members} searching={searching} />
      </div>
    );
  }
}

export default Search;
