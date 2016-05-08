import AppConstants from "../constants/AppConstants";
import { dispatch } from "../dispatchers/AppDispatcher";

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
};
