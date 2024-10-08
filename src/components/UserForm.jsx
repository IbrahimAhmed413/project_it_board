import { useState, useEffect } from "react";

function UserForm({ onAddUser, onUpdateUser, editingUser, setEditingUser }) {
  const [user, setUser] = useState({
    firstName: " ", lastName: " ", phone:" ", address:" "
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({
        firstName: "",
        lastName: "",
        phone: "",
        address: ""
      });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(user);
    } else {
      onAddUser(user);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="userform">
      <input
        type="text"
        className="firstnamebox"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        required
      /> 
      <input
       className="firstnamebox"
        type="text"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        required
      />
      <input 
         className="firstnamebox"
        type="text"
        placeholder="Phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        required
      />
      <input
         className="firstnamebox"
        type="text"
        placeholder="Address"
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
        required
      />
      <button type="submit">{editingUser ? "Update" : "Add"}</button>
      {editingUser && <button onClick={() => setEditingUser(null)}>Cancel</button>}
    </form>
  );
}

export default UserForm;
