import React from "react";
import InputMember from "./InputMember";
import AppStore from "../../stores/AppStore";

class Input extends React.Component {
  _getSearchedMembers() {
    return { searchedMembers: AppStore.getSearchedMembers() };
  }

  _onChange() {
    this.setState(this._getSearchedMembers);
  }

  _handleChange(event) {
    let { onSearchQueryChanged } = this.props;
    onSearchQueryChanged(event.target.value);
  }

  _handleBlur() {
    this.props.onInputBlur();
  }

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  componentWillMount() {
    this.setState(this._getSearchedMembers);
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let searchedMembers = this.state.searchedMembers.map((member, index) => {
      return <InputMember key={index} member={member} />;
    });

    return (
      <div className="form-autocomplete-input">
        {searchedMembers}
        <input
          className="form-input"
          type="text"
          placeholder="Search..."
          onChange={this._handleChange}
          onBlur={this._handleBlur}
          value={this.props.searchQuery} />
      </div>
    );
  }
}

export default Input;
