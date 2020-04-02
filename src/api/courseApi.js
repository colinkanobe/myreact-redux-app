// import { handleResponse, handleError } from "./apiUtils";
// Cors
async function handleResponse(response) {
  if (response.ok) {
    console.log("response is ok");
    return response.json();
  }
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

const baseUrl = process.env.API_URL + "/courses/";
// const baseUrl = "https://origin-react-website.firebaseapp.com/courses";
//"http://localhost:3001/courses/";
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
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

/*
export function getCourses() {
  debugger;
  return fetch(baseUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
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

export function saveCourse(course) {
  debugger;
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    mode: "cors",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(course)
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
  // debugger;
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
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
