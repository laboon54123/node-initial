import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";

import NotFound from "./pages/NotFound.jsx";

import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
