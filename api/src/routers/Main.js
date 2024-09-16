import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Main(){
    const [todos, setTodos] = useState([])
    const getTodos = async ()=> {
        const response = await fetch('http://localhost:8080/')
        const json = await response.json()
        setTodos(json)
    }
    useEffect(() => {
        getTodos();
    }, []);
    console.log(todos)
    return(
        <>
            <h1>Main Todo 리스트 페이지</h1>
            <form>
                <input type='text' placeholder={"할일을 입력해주세요"} />
                <input type={"button"} value={'추가하기'} />
            </form>
            {todos.length > 0 ?
                todos.map((element)=>{
                    return (<div key={element.id}>{element.task}</div>)
                })
                : null}
            <Link to='/hello'>Hello로 가기</Link>
        </>
    )
}
export default Main;