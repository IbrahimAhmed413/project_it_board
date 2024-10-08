import { useState } from "react";
import UserForm from "./UserForm";

function UsersTable() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "John", lastName: "Doe", phone: "1234567890", address: "123 Main St" },
    { id: 2, firstName: "Jane", lastName: "Smith", phone: "0987654321", address: "456 Elm St" },
    { id: 3, firstName: "Alice", lastName: "Johnson", phone: "1122334455", address: "789 Oak St" }
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Users Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserForm
        onAddUser={addUser}
        onUpdateUser={updateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
    </div>
  );
}

export default UsersTable;
