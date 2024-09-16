import Context from "../Context/themContext";
import {useContext} from "react";

function DarkMode(){
    const {Dark, setDark} = useContext(Context)
    const changeMode = ()=>{
        setDark(!Dark)
    }
    return(
        <div style={{background : Dark ? "black":"white" }}>
            <h1>hello</h1>
            <div>
                <p>This is UseContext!</p>
            </div>
            <button onClick={changeMode}>change</button>
        </div>
    )
}
export default DarkMode