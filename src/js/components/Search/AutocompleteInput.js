import React from "react";
import SearchedMember from "./SearchedMember";

class AutocompleteInput extends React.Component {
  _handleOnChange(event) {
    let { onSearchQueryChanged } = this.props;
    onSearchQueryChanged(event.target.value);
  }

  _handleOnFocus() {
    let { handleOnFocus } = this.props;
    handleOnFocus();
  }

  _handleOnBlur() {
    let { handleOnBlur } = this.props;
    setTimeout(() => {
      handleOnBlur();
    }, 125);
  }

  render() {
    let { members } = this.props;
    let searchedMembers = members.map(member => {
      if(member.isBeingSearched) {
        return <SearchedMember key={member.id} member={member} />;
      }
    });

    return (
      <div className="form-autocomplete-input">
        {searchedMembers}
        <input
          className="form-input"
          type="text"
          placeholder="Search..."
          onChange={this._handleOnChange.bind(this)}
          onFocus={this._handleOnFocus.bind(this)}
          onBlur={this._handleOnBlur.bind(this)} />
      </div>
    );
  }
}

export default AutocompleteInput;
