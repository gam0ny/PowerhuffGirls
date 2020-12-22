import { API_ROOT } from "./configuraion";

export const httpGet = (endpoint) => {
  try {
    return fetch(`${API_ROOT}/${endpoint}`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  } catch (err) {
      console.warn('httpGet error ', err);
  }
};
