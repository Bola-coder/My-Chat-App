import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import Homepage from "./components/Homepage";
import Authenticate from "./components/Authenticate";
import ChatContainer from "./components/chat/ChatContainer";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Authenticate />} />\
            <Route path="/chats" element={<ChatContainer />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
