import {useEffect, useState, useCallback} from "react";

function UseCallback(){
    const [num, setNum] = useState(0)
    const someNum = useCallback(()=>{
        console.log(num)
        return;
    }, [num]);

    useEffect(() => {
        console.log("재설정되었습니다.")
    }, [someNum]);


    return(
        <div>
            <input type={"number"} value={num} onChange={(e)=>{setNum(e.target.value)}} />
            <button onClick={someNum}>useCallback me</button>
        </div>
    )
}
export default  UseCallback