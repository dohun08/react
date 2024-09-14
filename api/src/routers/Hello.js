import Btn from '../components/Button'
import {useEffect} from "react";

function Hello(){
    const getAPI = async ()=>{
        const response = await fetch('http://localhost:8080')
        const json = await response.json()
        console.log(json)
    }
    useEffect(() => {
        getAPI();
    }, []);
    return(
        <>
            <h2>Hello react</h2>
            <Btn></Btn>
        </>
    )
}

export default Hello;