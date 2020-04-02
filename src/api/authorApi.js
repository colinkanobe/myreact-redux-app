import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";
//"https://origin-react-website.firebaseapp.com/authors/";
export function getAuthors() {
  return fetch(baseUrl, {
    mode: "cors" //,
    //  headers: { "Access-Control-Allow-Origin": "*" }
  })
    .then(handleResponse)
    .catch(handleError);
}
/* export function getAuthors() {
  return fetch(baseUrl, {
    method: "GET",
    mode: "cors",
    headers: { "Access-Control-Allow-Origin": "*" }
  })
    .then(response => {
      if (response.ok) {
        response.json();
      }
      if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = response.text();
        throw new Error(error);
      }
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
}
 */
