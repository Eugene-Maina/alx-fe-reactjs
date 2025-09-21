// components/Search.jsx
import { useState } from "react";
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // State to store the input value
  const [username, setUsername] = useState('');
  // Additional states for API call
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    if (!username.trim()) {
      setError('Please enter a valid username');
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setError('Looks like we can\'t find the user');
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          GitHub Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div className="user-info">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <h2>{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;