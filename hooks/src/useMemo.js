import {useMemo, useState} from "react";
const hardSumf = (e)=>{
    for(let i=0; i<999999999; i++){}
    return e+10000;
}
const easySumf = (e)=>{
    return e+1;
}
function UseMemo(){
    const [hardNum, setHardNum] = useState(1)
    const [easyNum, setEasyNum] = useState(1)

    // const hardSum = hardSumf(hardNum)
    const hardSum = useMemo(()=>{
        return hardSumf(hardNum); //return 되는 값이 바뀔때마다 실행됨.
    }, [hardNum]) //즉 hardNum이 바뀔때마다 실행된다는거지
    const easySum = easySumf(easyNum)
    return(
        <>
        <div>
            <h1>짱어려운 계산</h1>
            <input type={"number"} value = {hardNum} onChange={(e)=>{setHardNum(parseInt(e.target.value))}} />
            + 10000 = <p>{hardSum}</p>
        </div>
            <div>
                <h1>짱쉬운 계산</h1>
                <input type={"number"} value={easyNum} onChange={(e) => {
                    setEasyNum(parseInt(e.target.value))
                }}/>
                + 1 = <p>{easySum}</p>
            </div>
        </>
    )
}

export default UseMemo