import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<HomePage />}></Route> */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
