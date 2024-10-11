import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
