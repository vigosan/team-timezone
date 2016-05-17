import React from "react";
import AutocompleteMember from "./AutocompleteMember";
import AppStore from "../../stores/AppStore";
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

const getMembers = () => {
  return { members: AppStore.getMembers() };
}

const AutocompleteList = (props) => {
  let { members, searching } = props;
  let autocompleteMembers = members.map(member => {
    if(!member.isBeingSearched) {
      return <AutocompleteMember key={member.id} member={member} />;
    }
  });

  let ulClass = "form-autocomplete-list";
  if(!searching) { ulClass += " hide"; }

  return (
    <ul className={ulClass}>
      {autocompleteMembers}
    </ul>
  );
}

AutocompleteList.defaultProps = { visible: true };
export default StoreWatchMixin(AutocompleteList, getMembers);
