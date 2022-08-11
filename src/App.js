import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import MessageProvider from "./context/messageContext";
import Homepage from "./components/Homepage";
import Authenticate from "./components/Authenticate";
import ChatContainer from "./components/chat/ChatContainer";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MessageProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/auth" element={<Authenticate />} />\
              <Route path="/chats" element={<ChatContainer />} />
              <Route path="/add-friend" element={<AddFriend />} />
            </Routes>
          </div>
        </MessageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
