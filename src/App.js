import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import Homepage from "./components/Homepage";
import Authenticate from "./components/Authenticate";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Authenticate />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
