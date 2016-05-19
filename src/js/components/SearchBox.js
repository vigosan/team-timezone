import React from "react";
import Input from "./SearchBox/Input";
import List from "./SearchBox/List";
import AppStore from "../stores/AppStore";

class SearchBox extends React.Component {
  _changeSearchQuery(searchQuery) {
    let isSearching = searchQuery.length > 0;
    this.setState({ searchQuery: searchQuery, searching: isSearching });
  }

  _handleInputOnBlur() {
    setTimeout(() => {
      this.setState({ searchQuery: '', searching: false });
    } , 150);
  }

  _onChange() {
    this.setState({ searchQuery: '', searching: false });
  }

  constructor(props) {
    super(props);
    this.state = { searchQuery: "", searching: false };
    this._onChange = this._onChange.bind(this);
    this._changeSearchQuery = this._changeSearchQuery.bind(this);
    this._handleInputOnBlur = this._handleInputOnBlur.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    return(
      <div className="form-autocomplete">
      <Input {...this.state}
      onSearchQueryChanged={this._changeSearchQuery}
      onInputBlur={this._handleInputOnBlur} />
      <List {...this.state} />
      </div>
    );
  }
}

export default SearchBox;
