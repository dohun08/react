import {useEffect, useState} from "react";
import '../css/Main.css'
import axios from "axios";

function Main(){
    const [Todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")
    const getTodos = async ()=>{
        const response = await axios.get("http://localhost:8080", {
            headers:{
                'ContentType':'application/json'
            },
        });
        if(response.status === 200){
            setTodos(()=>response.data);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    const valueChange = (e)=>{
        setNewTodo(e.target.value)
    }
    const addTodo = async () => {
        if (newTodo.trim() === "") return;
       try{
           const response = await axios.post("http://localhost:8080/insert", {
               task:newTodo
           })
           if (response.status === 201) {
               setNewTodo('');
               getTodos();
           } else {
               console.error('서버에서 오류 발생');
           }
       }catch (error){
           console.log(error)
       }
    };
    const del = async (e)=>{
        console.log(e)
        try{
            const response = await axios.delete(`http://localhost:8080/delete/${e}`, );
            if(response.status === 204){
                console.log("성공적으로 삭제되었습니다.")
                getTodos();
            }
        }
        catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
    const com = async (e) => {
        try {
            const response = await axios.patch(`http://localhost:8080/completed/${e}`);
            getTodos();
        } catch (error) {
            console.error("Request failed:", error.response || error);
        }
    };

    function getId(e, type){
        if (type === "deleted"){
            del(e)
        }
        else{
            com(e)
        }
    }
    const valuePost = (e)=>{
        if(e.key === "Enter"){
            addTodo();
        }
    }
    return(
        <div className={"container"}>
            <section className={"headerBox"}>
                <h1>할일</h1>
                    <input type={"text"} placeholder={"할일을 입력해주세요"} value={newTodo} onChange={valueChange} onKeyDown={valuePost}/>
                    <input type={"button"} onClick={addTodo} value={"추가하기"}/>
            </section>
            <section className={"todoList"}>
                {Todos.length > 0 ? Todos.map((element)=> {
                    console.log(element.completed)
                    return (
                            <div className={"todo"} key={element.id}>
                            <p className={element.completed == 1 ? "task" : null}>{element.task}</p>
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