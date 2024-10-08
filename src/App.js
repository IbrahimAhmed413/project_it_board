import { useState } from "react";
import Login from "./components/login";
import UsersTable from "./components/userTable";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  return <>{!LoggedIn ? <Login Login={setLoggedIn} /> : <UsersTable />}</>;
}

export default App;
