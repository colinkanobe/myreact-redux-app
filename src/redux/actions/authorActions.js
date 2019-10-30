import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";
import { beginApiCall, beginApiError } from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}
export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return authorsApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(beginApiError(error));
        throw error;
      });
  };
}
