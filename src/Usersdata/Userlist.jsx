import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Userlist() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // [00:08:20]
  const url = "http://localhost:3000/users";

  const getUserData = async () => {
    setLoading(true); // Start loading [00:09:15]

    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false); // Stop loading after data is fetched [00:09:25]
  };
  useEffect(() => {
    getUserData();
  }, []);
  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    response = await response.json();
    if (response) {
      alert("User Deleted Successfully");
    }
    getUserData();
  };
  const editUser = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <div className="App">
      <h1>User List with JSON Server</h1>

      {/* Loading State Logic [00:08:45] */}
      {loading ? (
        <h1>Data Loading...</h1>
      ) : (
        <div className="user-list">
          {/* Table Header */}
          <ul className="user-list-item head">
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Actions</li>
          </ul>

          {/* Mapping through API Data */}
          {userData.map((user) => (
            <ul className="user-list-item" key={user.id}>
              {/* Unique key is required [00:06:29] */}
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>

              <li>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => editUser(user.id)}>Edit</button>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default Userlist;
