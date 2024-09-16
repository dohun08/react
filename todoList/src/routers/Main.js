import {useEffect, useState} from "react";
import '../css/Main.css'
function Main(){
    const [Todos, setTodos] = useState([])
    const getTodos = async ()=>{
        const response = await fetch("http://localhost:8080")
        const json = await response.json()
        setTodos(json)
    }
    useEffect(() => {
        getTodos();
    }, []);
    console.log(Todos)
    return(
        <div className={"container"}>
            <section className={"headerBox"}>
                <h1>할일</h1>
                <form>
                    <input type={"text"} placeholder={"할일을 입력해주세요"}/>
                    <input type={"button"} value={"추가하기"}/>
                </form>
            </section>
            <section className={"todoList"}>
                {Todos.length > 0 ? Todos.map((element)=> {
                    return (
                        <div className={"todo"}>
                            <p>{element.task}</p>
                            <div className={"buttonBox"}>
                                <button type={"button"}>완료하기</button>
                                <button type={"button"}>삭제하기</button>
                            </div>
                        </div>
                    )
                }) : null}

            </section>
        </div>
    )
}

export default Main;