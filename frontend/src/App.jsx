import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import MessageCenter from "./pages/MessageCenter/MessageCenter";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-blue-950">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/messages" element={<MessageCenter />} />
      </Routes>
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
