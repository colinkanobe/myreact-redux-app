import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}
export function beginApiError() {
  return { type: types.BEGIN_API_ERROR };
}
