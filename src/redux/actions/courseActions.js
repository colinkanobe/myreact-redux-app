import * as types from "./actionTypes";

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}
export function updateCourse(course) {
  return {
    type: types.UPDATE_COURSE,
    course
  };
}
