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
import PassGen from "./pages/passwordgenrator/PassGen";
import ContextDarkMode from "./pages/darkmode/ContextDarkMode";
import Filter from "./pages/filter/Filter";
import Search from "./pages/search/search";
import DataScroll from "./pages/scroll/DataScroll";
import Pagination from "./pages/pagination/Pagination";

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
            <Route path="/pass" element={<PassGen />} />
            <Route path="/contextdarkmode" element={<ContextDarkMode />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/search" element={<Search />} />
            <Route path="/scroll" element={<DataScroll />} />
            <Route path="/pagination" element={<Pagination />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
