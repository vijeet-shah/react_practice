import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import Darkmode from "./pages/Darkmode";
import Eatfood from "./pages/Eatfood";
import Home from "./pages/Home";
import Imagelib from "./pages/Imagelib";
import Calculator from "./pages/Calculator";
import TodoList from "./pages/TodoList";
import FormHandle from "./pages/FormHandle";
import ListKey from "./pages/ListKey";
import More from "./pages/More";
import Props from "./pages/propsProject/Props";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/darkmode" element={<Darkmode />} />
            <Route path="/eatfood" element={<Eatfood />} />
            <Route path="/imagelib" element={<Imagelib />} />
            <Route path="/calci" element={<Calculator />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/formhandle" element={<FormHandle />} />
            <Route path="/listkey" element={<ListKey />} />
            <Route path="/more" element={<More />} />
            <Route path="/props" element={<Props />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
