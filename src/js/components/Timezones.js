import React from "react";
import Timezone from "./Timezone";
import AppStore from "../stores/AppStore";
import StoreWatchMixin from '../mixins/StoreWatchMixin';

const getMembersGroupedByTz = () => {
  return { membersByTz: AppStore.getMembersGroupedByTz() };
}

const Timezones = (props) => {
  let membersByTz = props.membersByTz;
  let timezones = Object.keys(membersByTz).map((tz, index) => {
    return <Timezone
    key={index}
    name={tz}
    members={membersByTz[tz]} />;
  });

  return(
    <div className="columns">
      {timezones}
    </div>
  );
}

export default StoreWatchMixin(Timezones, getMembersGroupedByTz);
