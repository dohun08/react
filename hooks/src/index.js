import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import UseRef from './useRef'
import UseContext from "./useContext";
import UseMemo from './useMemo'
import UseCallback from "./useCallback";
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
            <Route path={'/useMemo'} element={<UseMemo />}></Route>
            <Route path={'/useCallback'} element={<UseCallback />}></Route>
        </Routes>
    </Router>

);

