import React from "react";
import AppStore from "../stores/AppStore";
import AppActions from "../actions/AppActions";

export default (props) => {
  return(
    <figure class="avatar avatar-xl">
      <img src={props.member.avatar} onClick={
        AppActions.searchAddMember.bind(null, props.member)
      } />
    </figure>
  )
}
