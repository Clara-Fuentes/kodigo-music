import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MainLayout from './components/MainLayout.jsx';

function App() {
  return (
    <MainLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </MainLayout>
  )
}

export default App