import React from "react";
import AutocompleteMember from "./AutocompleteMember";

class AutocompleteList extends React.Component {
  render() {
    let { members, searching } = this.props;
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
}

AutocompleteList.defaultProps = { visible: true };
export default AutocompleteList;
