import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter'
import Darkmode from './pages/Darkmode'
import Eatfood from './pages/Eatfood'
import Home from './pages/Home'
import Imagelib from './pages/Imagelib'
import Calculator from './pages/Calculator'
import TodoList from './pages/TodoList'
import FormHandle from './pages/FormHandle'
import ListKey from './pages/ListKey'
import More from './pages/More'
import NavBar from './components/NavBar'
// import Props from "./pages/propsProject/Props";

function changeToDark(setIsDarkMode) {
  setIsDarkMode(true)
  // body bg
  document.querySelector('body').classList.add('dark-bg-body')
  // green bg
  document
    .querySelectorAll('.bg-green')
    .forEach((e) => e.classList.add('dark-bg-green'))
  // red bg
  document
    .querySelectorAll('.bg-red')
    .forEach((e) => e.classList.add('dark-bg-red'))
  // button bg
  document
    .querySelectorAll('.bg-btn')
    .forEach((e) => e.classList.add('dark-bg-btn'))
  // black text in navbar
  document
    .querySelectorAll('.nav-clr-black')
    .forEach((e) => e.classList.add('nav-clr-white'))
}

function changeToLight(setIsDarkMode) {
  setIsDarkMode(false)
  // body bg
  document.querySelector('body').classList.remove('dark-bg-body')
  // green bg
  document
    .querySelectorAll('.bg-green')
    .forEach((e) => e.classList.remove('dark-bg-green'))
  // red bg
  document
    .querySelectorAll('.bg-red')
    .forEach((e) => e.classList.remove('dark-bg-red'))
  // button bg
  document
    .querySelectorAll('.bg-btn')
    .forEach((e) => e.classList.remove('dark-bg-btn'))
  // black text in navbar
  document
    .querySelectorAll('.nav-clr-black')
    .forEach((e) => e.classList.remove('nav-clr-white'))
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      changeToDark(setIsDarkMode)
      localStorage.setItem('theme', 'dark')
    } else {
      changeToLight(setIsDarkMode)
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const themePreference = localStorage.getItem('theme')
  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkThemeMq.matches && themePreference === 'dark') {
      changeToDark(setIsDarkMode)
    } else {
      changeToLight(setIsDarkMode)
    }
  }, [])

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path="/counter"
              element={<Counter isDarkMode={isDarkMode} />}
            />
            <Route
              path="/darkmode"
              element={
                <Darkmode
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
            <Route
              path="/eatfood"
              element={<Eatfood isDarkMode={isDarkMode} />}
            />
            <Route
              path="/imagelib"
              element={<Imagelib isDarkMode={isDarkMode} />}
            />
            <Route
              path="/calci"
              element={<Calculator isDarkMode={isDarkMode} />}
            />
            <Route
              path="/todo"
              element={<TodoList isDarkMode={isDarkMode} />}
            />
            <Route
              path="/formhandle"
              element={<FormHandle isDarkMode={isDarkMode} />}
            />
            <Route
              path="/listkey"
              element={<ListKey isDarkMode={isDarkMode} />}
            />
            <Route path="/more" element={<More isDarkMode={isDarkMode} />} />
            {/* <Route path="/props" element={<Props />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
