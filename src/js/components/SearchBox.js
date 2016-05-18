import React from "react";
import Input from "./SearchBox/Input";
import List from "./SearchBox/List";

class SearchBox extends React.Component {
  _changeSearchQuery(searchQuery) {
    this.setState({ searchQuery: searchQuery });
  }

  _toogleSearching() {
    setTimeout(() => {
      this.setState({ searching: !this.state.searching });
    }, 125);
  }

  constructor(props) {
    super(props);
    this.state = { searchQuery: "", searching: false };
  }

  render() {
    let { searchQuery, searching } = this.state;

    return(
      <div className="form-autocomplete">
        <Input
          searchQuery={searchQuery}
          onSearchQueryChanged={this._changeSearchQuery.bind(this)} />
        <List searching={searching} />
      </div>
    );
  }
}

export default SearchBox;
