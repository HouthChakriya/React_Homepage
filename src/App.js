import './App.css';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./modules/homepage/component/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index path="/homepage" element={<HomePage />}></Route>
            <Route path="*" element={<Navigate to="/homepage" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
