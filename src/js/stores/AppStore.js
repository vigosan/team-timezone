import { register } from "../dispatchers/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import { EventEmitter } from "events";
import TzAPI from '../api/TzAPI';

const CHANGE_EVENT = "change";

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSearchedMembers() {
    return TzAPI.searchedMembers;
  },

  getMembers() {
    return TzAPI.getMembers();
  },

  getMembersGroupedByTz() {
    return TzAPI.getMembersGroupedByTz();
  },

  getNotSearchedMembersByName(name) {
    return TzAPI.getNotSearchedMembersByName(name);
  },

  dispatcherIndex: register(action => {
    switch(action.actionType){
      case AppConstants.SEARCH_ADD_MEMBER:
        TzAPI.addSearchedMember(action.member);
      break;

      case AppConstants.SEARCH_REMOVE_MEMBER:
        TzAPI.removeSearchedMember(action.member);
      break;
    }

    AppStore.emitChange();
  })
});

export default AppStore;
