import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import UseRef from './useRef'
import UseContext from "./useContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path={'/'} element={<App />}></Route>
            <Route path={'/useRef'} element={<UseRef />}></Route>
            <Route path={'/useContext'} element={<UseContext />}></Route>
        </Routes>
    </Router>

);

