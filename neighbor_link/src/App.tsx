import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './layout/Sidebar/Sidebar';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Order from './pages/order/Order';
import Chat from './pages/chat/Chat';
import Dashboard from './pages/dashboard/Dashboard';
import Direction from './pages/direction/Direction';
import ErrorPage from './pages/errorpage/ErrorPage';
import Navbar from './layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/order' element={<Order />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/direction' element={<Direction />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
