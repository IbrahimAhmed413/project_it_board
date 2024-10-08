import { useState } from "react";
import UserForm from "./UserForm";

function UsersTable() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Ibrahim",
      lastName: "Ahmed",
      phone: "03431938944",
      address: "Abbottabad",
    },
    {
      id: 2,
      firstName: "Waqar",
      lastName: "Ahmed",
      phone: "03459583659",
      address: "USA",
    },
    {
      id: 3,
      firstName: "Ahmed",
      lastName: "khan",
      phone: "03355080815",
      address: "Mansehra",
    },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h2>USERS</h2>
      <table className="userpagetable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Operations</th>
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
    </>
  );
}

export default UsersTable;
