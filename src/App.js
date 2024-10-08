import { useState } from "react";
import Login from "./components/login";
import UsersTable from "./components/userTable";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (<Login Login={setIsLoggedIn} />) : (<UsersTable />
      )}
    </div>
  );
}

export default App;
