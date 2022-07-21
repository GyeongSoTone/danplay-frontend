import React from 'react'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import ROUTES from './constants/routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MyPage from './pages/MyPage'
import AddMatch from './pages/AddMatch'
import ReserveStadium from './pages/ReserveStadium'
import Term from './pages/Term'
import Privacy from './pages/Privacy'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header-body">
          <Header />
          <div className="App-container">
            <Routes>
              <Route path={ROUTES.ROOT} element={<Home />}></Route>
              <Route path={ROUTES.LOGIN} element={<Login />}></Route>
              <Route path={ROUTES.REGISTER} element={<Register />}></Route>
              <Route path={ROUTES.MYPAGE} element={<MyPage />}></Route>
              <Route path={ROUTES.ADDMATCH} element={<AddMatch />}></Route>
              <Route path={ROUTES.RESERVE} element={<ReserveStadium />}></Route>
              <Route path={ROUTES.TERM} element={<Term />}></Route>
              <Route path={ROUTES.PRIVACY} element={<Privacy />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
