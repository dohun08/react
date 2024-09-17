import UseRef from "./useRef";
import UseContext from "./useContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function App(){
    return(
        <>
            <Link to={'/useContext'}><h1>useContext 예제보러가기</h1></Link>
            <Link to={'/useRef'}><h1>useRef 예제 보러가기</h1></Link>
        </>


    )
}

export default App;