import {dispatch, register} from "../dispatchers/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

var _members = [];

for(let i = 0; i < 10; i++) {
  _members.push({
    "id": `member-${i}@email.com`,
    "email": `member-${i}@email.com`,
    "name": `Member ${1}`,
    "avatar": `https://api.adorable.io/avatars/45/${i}`,
    "tz": ["Europe/Madrid", "America/New_York", "Europe/London"][Math.floor(Math.random()*3)]
  });
}

var _searchedMembers = [];

const _findSearchedMember = (member) => {
  return _searchedMembers.find(searchedMember => searchedMember.id === member.id)
};

const _removeSearchedMember = (member) => {
  _searchedMembers.splice(
    _searchedMembers.findIndex(i => i === member)
  , 1);
};

const _addSearchedMember = (member) => {
  const searchedMember = _findSearchedMember(member);
  if(searchedMember) { return };
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
