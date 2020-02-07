import { handleResponse, handleError } from "./apiUtils";
// Cors
// import * as cors from "cors";
// const corsHandler = cors({ origin: true });

const baseUrl = process.env.API_URL + "/courses/";
//const cors = require("cors")({ origin: true });
//const baseUrl = "http://localhost:3001/courses/"; //"https://origin-react-website.firebaseapp.com/courses";
//"http://localhost:3001/courses/";

export function getCourses() {
  debugger;
  return fetch(baseUrl, {
    mode: "cors"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  debugger;
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    mode: "cors",
    headers: { "content-type": "application/json" },
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
