import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";
//const baseUrl = "http://localhost:3001/authors/";
//"https://origin-react-website.firebaseapp.com/authors/";
export function getAuthors() {
  return fetch(baseUrl, {
    mode: "cors"
  })
    .then(handleResponse)
    .catch(handleError);
}
