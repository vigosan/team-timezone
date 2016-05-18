import React from "react";
import InputMember from "./InputMember";
import AppStore from "../../stores/AppStore";
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

const getMembers = () => {
  return { searchedMembers: AppStore.getSearchedMembers() };
};

const Input = (props) => {
  let searchedMembers = props.searchedMembers.map((member, index) => {
    return <InputMember key={index} member={member} />;
  });

  let handleChange = (event) => {
    let { onSearchQueryChanged } = props;
    onSearchQueryChanged(event.target.value);
  };

  return (
    <div className="form-autocomplete-input">
      {searchedMembers}
      <input
        className="form-input"
        type="text"
        placeholder="Search..."
        onChange={handleChange} />
    </div>
  );
};

export default StoreWatchMixin(Input, getMembers);
