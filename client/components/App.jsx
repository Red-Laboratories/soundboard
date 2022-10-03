import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Board from './Board';


function App() {  
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='board' element={<Board />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App;


