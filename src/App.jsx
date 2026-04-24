import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    // Setting only the 'users' array from the response [00:08:38]
    setUsersData(response.users);
  };

  return (
    <div className="App">
      <h1>Fetch Data from API</h1>
      {/* Header for the list */}
      <ul className="user-list user-list-head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>

      {/* Mapping through the users data to display it [00:09:27] */}
      {usersData.length > 0 && usersData.map((user) => (
        <ul key={user.id} className="user-list">
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;