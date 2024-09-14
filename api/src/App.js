import {BrowserRouter as Router,
    Routes,
    Route,
    Link,

} from "react-router-dom";
import Hello from './routers/Hello'
import Main from './routers/Main'
function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/hello' element={<Hello />}/>
          </Routes>
      </Router>
  );
}

export default App;
