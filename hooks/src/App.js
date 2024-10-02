import {
    Link,
} from "react-router-dom";
function App(){
    return(
        <>
            <Link to={'/useContext'}><h1>useContext 예제보러가기</h1></Link>
            <Link to={'/useRef'}><h1>useRef 예제보러가기</h1></Link>
            <Link to='/useMemo'><h1>useMemo 예제보러가기</h1></Link>
            <Link to={'/useCallback'}><h1>useCallback 예제보러가기</h1></Link>
        </>


    )
}

export default App;