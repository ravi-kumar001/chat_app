import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";

const App = () => {
  return (

    <Routes>

      <Route path="/chat/:targetUserId" element={<Chat />} />

    </Routes>
  );
};

export default App;