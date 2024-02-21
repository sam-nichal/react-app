import { Routes, Route} from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Dashboard from "./DashBoard/Dashboard";
import UserTasks from "./User/UserTasks";

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
             <Route
                exact
                path="/userTasks"
                element={<UserTasks/>}
            ></Route>
        </Routes>
  );
}

export default App;
