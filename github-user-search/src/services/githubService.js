// src/services/api.js
export const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};
function