import ReactDOM from 'react-dom/client';
import './index.css'; //전체 css
import reportWebVitals from './reportWebVitals';
import React, { useState, useEffect } from 'react'; //리액트 동적변수, 이펙트 사용
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //페이지이동 import

//페이지 import
import Nav from './Nav/Nav'; //네비게이션바
import Footer from './Footer/Footer'; //푸터

import Main from './Main/Main'; //메인
import Community from './Community/Community'; //게시판


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Nav/>

    {/*화면이동 페이지*/}
    <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/Community" element={<Community/>}></Route>
    {/* <Route path="/" element={< />}></Route>
    <Route path="/" element={< />}></Route> */}
    </Routes>
    {/*화면이동 페이지*/}

    <Footer/>


    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
