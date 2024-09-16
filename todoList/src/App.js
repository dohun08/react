import {BrowserRouter as Router,
    Routes,
    Route,
    Link,

} from "react-router-dom";
import Main from './routers/Main'
function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Main />}/>
          </Routes>
      </Router>
  );
}

export default App;
