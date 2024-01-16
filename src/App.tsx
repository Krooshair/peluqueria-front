import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <div className="bg-[#F0F0F0]">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
