import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Handle specific HTTP errors
      throw new Error(`GitHub API error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      // Handle network errors
      throw new Error('Network error: Unable to reach GitHub API');
    } else {
      // Handle other errors
      throw new Error('Error fetching user data: ' + error.message);
    }
  }
};