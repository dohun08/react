import Home from "./routers/Home";
import Detail from "./routers/Detail";

import {BrowserRouter as Router,
    Routes,
    Route,
    Link,

} from "react-router-dom";
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={'/:id'} element={<Detail />} />
            </Routes>
        </Router>
  );
}

export default App;
