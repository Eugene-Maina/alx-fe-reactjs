// Search component
const Search = () => {
  // State to store the input value
  const [username, setUsername] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (username.trim()) {
      console.log('Submitted username:', username);
      // Here, you could trigger an API call or other logic with the username
    } else {
      console.log('Please enter a valid username');
    }
  };

  return (
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
      <button type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;