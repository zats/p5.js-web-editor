import axios from 'axios';

const ROOT_URL = 'https://api.openai.com/';

/**
 * Configures an Axios instance with the correct API URL
 */
function createClientInstance() {
  return axios.create({
    baseURL: ROOT_URL,
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export default createClientInstance();
