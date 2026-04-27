import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
function EditUser() {
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = `http://localhost:3000/users/${id}`;
  const usenavigate = useNavigate();

  const getUserData = async () => {
    console.log(id);
    let res = await fetch(url);
    console.log(url);
    res = await res.json();
    console.log(res);

    setName(res.name);
    setAge(res.age);
    setEmail(res.email);
  };

  useEffect(() => {
    getUserData();
  }, []);
  const editUser = async () => {
    console.log(name, age, email);
    let res = await fetch(url, {
      method: "Put",
      body: JSON.stringify({ name, age, email }),
    });

    res = await res.json();
    console.log(res);
    if (res) {
      alert("User details updated successfully");
    }
  };

  return (
    <div>
      <h1>Edit User details</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder=" editName"
      />
      <br />
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder=" edit Age"
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder=" edit Email"
      />
      <br />
      <br />
      <button onClick={editUser}>edit User</button>
    </div>
  );
}
export default EditUser;
