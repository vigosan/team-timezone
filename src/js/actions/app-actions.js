import AppConstants from "../constants/app-constants";
import {dispatch, register} from "../dispatchers/app-dispatcher";

export default {
  searchAddMember(member) {
    dispatch({
      actionType: AppConstants.SEARCH_ADD_MEMBER, member
    });
  },
  searchRemoveMember(member) {
    dispatch({
      actionType: AppConstants.SEARCH_REMOVE_MEMBER, member
    });
  }
}
