import {useEffect, useState} from "react";
import '../css/Main.css'
function Main(){
    const [Todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState(null)
    const getTodos = async ()=>{
        const response = await fetch("http://localhost:8080")
        const json = await response.json()
        setTodos(json)
    }
    useEffect(() => {
        getTodos();
    }, []);
    const valueChange = (e)=>{
        setNewTodo(e.target.value)
    }
    const addTodo = async () => {
        if (newTodo.trim() === "") return;
        try {
            const response = await fetch('http://localhost:8080/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: newTodo }), // 새로운 할일을 서버로 전송
            });
            if (response.ok) {
                setNewTodo(''); // 입력 필드를 비워줌
                getTodos(); // 새로운 할일을 추가한 뒤 목록을 다시 불러옴
                console.log("getTodos")
            } else {
                console.error('서버에서 오류 발생');
            }
        } catch (error) {
            console.error('데이터 전송 실패:', error);
        }
    };
    console.log(Todos)
    return(
        <div className={"container"}>
            <section className={"headerBox"}>
                <h1>할일</h1>
                <form method={"POST"}>
                    <input type={"text"} placeholder={"할일을 입력해주세요"} value={newTodo} onChange={valueChange}/>
                    <input type={"button"} onClick={addTodo} value={"추가하기"}/>
                </form>
            </section>
            <section className={"todoList"}>
                {Todos.length > 0 ? Todos.map((element)=> {
                    return (
                        <div className={"todo"} key={element.id}>
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