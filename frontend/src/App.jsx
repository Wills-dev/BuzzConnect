import "./App.css";
import Login from "./pages/Login/Login";
import MessageCenter from "./pages/MessageCenter/MessageCenter";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-blue-950">
      {/* <Login /> */}
      {/* <SignUp /> */}
      <MessageCenter />
    </div>
  );
}

export default App;
