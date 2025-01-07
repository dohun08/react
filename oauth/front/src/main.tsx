import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Main from './mainPage.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<App />}></Route>
            <Route  path="/main" element={<Main />}></Route>
        </Routes>
    </BrowserRouter>

)
