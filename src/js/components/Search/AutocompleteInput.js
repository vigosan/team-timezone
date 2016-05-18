import React from "react";
import SearchedMember from "./SearchedMember";
import AppStore from "../../stores/AppStore";
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

const getMembers = () => {
  return { members: AppStore.getMembers() };
};

const AutocompleteInput = (props) => {
  let members = props.members;

  let searchedMembers = members.map(member => {
    if(member.isBeingSearched) {
      return <SearchedMember key={member.id} member={member} />;
    }
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

export default StoreWatchMixin(AutocompleteInput, getMembers);
