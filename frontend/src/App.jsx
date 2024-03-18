import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import MessageCenter from "./pages/MessageCenter/MessageCenter";
import SignUp from "./pages/SignUp/SignUp";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-blue-950">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/messages" /> : <Login />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/messages" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/messages" /> : <SignUp />}
        />
        <Route
          path="/messages"
          element={!authUser ? <Navigate to="/login" /> : <MessageCenter />}
        />
      </Routes>
    </div>
  );
}

export default App;
