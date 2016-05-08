import React from "react";
import AppStore from "../stores/AppStore";
import Member from "./SearchedMember";

function getSearchedMembers() {
  return { members: AppStore.getSearchedMembers() };
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = getSearchedMembers();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getSearchedMembers);
  }

  render() {
    let members = this.state.members.map(member => {
      return <Member key={member.id} member={member} />
    });

    return(
      <div className="members">
        {members}
      </div>
    )
  }
}

export default Search;
