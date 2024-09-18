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
                body: JSON.stringify({ task: newTodo }),
            });
            if (response.ok) {
                setNewTodo(''); // 입력 필드를 비워줌
                getTodos();
            } else {
                console.error('서버에서 오류 발생');
            }
        } catch (error) {
            console.error('데이터 전송 실패:', error);
        }
    };
    const del = async (e)=>{
        console.log(e)
        try{
            await fetch(`http://localhost:8080/delete/${e}`, {
                method: 'DELETE'
            })
            getTodos()
        }
        catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
    const com = async (e)=>{
        try{
            await fetch(`http://localhost:8080/completed/${e}` , {
                method: 'PATCH'
            })
            getTodos()
        }
        catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
    function getId(e, type){
        if (type === "deleted"){
            del(e)
        }
        else{
            com(e)
        }
    }
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
                            <p className={element.completed === "true"  ? "task" : null}>{element.task}</p>
                            <div className={"buttonBox"}>
                                <button type={"button"} onClick={()=>{getId(element.id, "completed")}}>완료하기</button>
                                <button type={"button"} onClick={()=>{getId(element.id, "deleted")}}>삭제하기</button>
                            </div>
                        </div>
                    )
                }) : null}


            </section>
        </div>
    )
}

export default Main;