import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Protected from "./Protected";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <div className="bg-[#F0F0F0]">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/singin" element={<Login />} />
            <Route element={<Protected />}>
              <Route element={<Layout/>}>
                <Route path="/dashboard" element={<Dashboard />} /> 
              </Route>
            </Route>
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
