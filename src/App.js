import { Routes, Route} from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Dashboard from "./DashBoard/Dashboard";

function App() {
  return (
        <Routes>
          <Route
                exact
                path="/"
                element={<Dashboard/>}
            ></Route>
            <Route
                exact
                path="/login"
                element={<Login/>}
            ></Route>
            <Route
                exact
                path="/register"
                element={<Register/>}
            ></Route>
        </Routes>
 
  );
}

export default App;
