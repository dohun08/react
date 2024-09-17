import {useState, useRef, useEffect} from "react";

function UseRef(){
    const [count, setCount] = useState(0)
    const inputRef = useRef()
    const addState = ()=>{
        setCount(count+1)
    }
    const addRef = ()=>{
        countRef.current +=1
    }
    const countRef = useRef(0)

    const Enter = (e)=>{
        if(e.key === 'Enter'){
            welcome();
        }
    }
    console.log("렌더링됐음")
    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }, []);
    const welcome = ()=>{
        alert(`환영합니다 ${inputRef.current.value}님!`)
        inputRef.current.value = null
    }
    return(
        <>
            <div>
                <input ref={inputRef} type={"text"} placeholder={'이름을 입력해주세요'} onKeyDown={Enter} />
                <button type={"button"} onClick={welcome}>로그인</button>
            </div>
            <div>
                <input type={"button"} value={"Ref올려"} onClick={addRef}/>
                <p>{countRef.current}</p>
            </div>
            <div>
                <input type={"button"} value={"State올려"} onClick={addState}/>
                <p>{count}</p>
            </div>
        </>
    )
}
export default UseRef