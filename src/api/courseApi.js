import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";
// const baseUrl = "https://origin-react-website.firebaseapp.com/courses";

export function getCourses() {
  debugger;
  return fetch(baseUrl, {
    mode: "cors",
    headers: {
      "content-type": "application/json" //,
      // "Access-Control-Allow-Origin": "*"
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  debugger;
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    mode: "cors",
    headers: {
      "content-type": "application/json" //,
      // "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
  // debugger;
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
