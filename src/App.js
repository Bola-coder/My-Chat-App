import AuthProvider from "./context/authContext";
import Homepage from "./components/Homepage";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Chat App.</h1>
        <Homepage />
      </div>
    </AuthProvider>
  );
}

export default App;
