import React from "react";
import ListMember from "./ListMember";
import AppStore from "../../stores/AppStore";
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

const getMembers = () => {
  return { members: AppStore.getMembers() };
};

const List = (props) => {
  let { members, searching } = props;
  let autocompleteMembers = members.map(member => {
    if(!member.isBeingSearched) {
      return <ListMember key={member.id} member={member} />;
    }
  });

  let ulClass = "form-autocomplete-list";
  if(!searching) { ulClass += " hide"; }

  return (
    <ul className={ulClass}>
      {autocompleteMembers}
    </ul>
  );
};

List.defaultProps = { visible: true };
export default StoreWatchMixin(List, getMembers);
