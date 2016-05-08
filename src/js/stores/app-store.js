import {dispatch, register} from "../dispatchers/app-dispatcher";
import AppConstants from "../constants/app-constants";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

var _members = [];

for(let i = 1; i < 9; i++) {
  _members.push({
    "id": `member-${i}@email.com`,
    "email": `member-${i}@email.com`,
    "name": `Member ${1}`,
    "tz": ["Europe/Madrid", "America/New_York", "Europe/London"][Math.floor(Math.random()*3)]
  });
}

var _searchedMembers = [];

const _removeSearchedMember = (member) => {
  _searchedMembers.splice(
    _searchedMembers.findIndex(i => i === member)
  , 1);
};

const _addSearchedMember = (member) => {
  _searchedMembers.push(Object.assign({ isBeingSearched: true }, member));
};

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSearchedMembers() {
    return _searchedMembers;
  },

  getMembers() {
    return _members.map(member => {
      return Object.assign({}, member, _searchedMembers.find(searchedMember => searchedMember.id === member.id))
    })
  },

  dispatcherIndex: register(action => {
    switch(action.actionType){
      case AppConstants.SEARCH_ADD_MEMBER:
        _addSearchedMember(action.member);
      break;

      case AppConstants.SEARCH_REMOVE_MEMBER:
        _removeSearchedMember(action.member);
      break;
    }

    AppStore.emitChange();
  })
});

export default AppStore;
