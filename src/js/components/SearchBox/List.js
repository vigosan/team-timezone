import React from "react";
import ListMember from "./ListMember";
import NotFoundMember from "./ListNotFoundMember";
import AppStore from "../../stores/AppStore";

class List extends React.Component {
  _getNotSearchedMembersByName() {
    return AppStore.getNotSearchedMembersByName(
      this.props.searchQuery
    );
  }

  _onChange(){
    this.setState(this._getNotSearchedMembersByName);
  }

  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    this.setState(this._getNotSearchedMembersByName);
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let { searchQuery, searching } = this.props;

    let listMembers = this._getNotSearchedMembersByName().map(member => {
      if(!member.isBeingSearched) {
        return <ListMember key={member.id} member={member} />;
      }
    });

    if(listMembers.length === 0) {
      listMembers = <NotFoundMember />
    }

    let ulClass = "form-autocomplete-list";
    if(!searching) { ulClass += " hide"; }

    return(
      <ul className={ulClass}>
      {listMembers}
      </ul>
    );
  }
}

List.defaultProps = { searching: false };
export default List;
