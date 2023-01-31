import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './page/home';
import Footer from './component/Footer';
import { AnimatePresence } from 'framer-motion';
import Program from './page/program';
import Contact from './page/contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='flex flex-col items-center' style={{flexDirection:"column"}}>
        <BrowserRouter>
      <NavBar/>
      {/* <div className='flex flex-col justify-end items-end'> */}
      <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/program" element={<Program/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </AnimatePresence>

      {/* </div> */}
        </BrowserRouter>
    </div>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

