import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./Pages/GetStarted";
import Chatbot from "./Pages/Chatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GetStarted />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
