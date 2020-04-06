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
