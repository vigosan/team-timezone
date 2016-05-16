import React from "react";
import AutocompleteInput from "./Search/AutocompleteInput";
import AutocompleteList from "./Search/AutocompleteList";

class Search extends React.Component {
  _changeSearchQuery(searchQuery) {
    this.setState({ searchQuery: searchQuery });
  }

  _toogleSearching() {
    this.setState({ searching: !this.state.searching });
  }

  constructor(props) {
    super(props);
    this.state = { searchQuery: "", searching: false };
  }

  render() {
    let { searchQuery, searching } = this.state;
    let { members } = this.props;

    return(
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
