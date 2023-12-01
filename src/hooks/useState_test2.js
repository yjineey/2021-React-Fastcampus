//코드스퀴드 useState(todoList)
import React, {useState, useEffect} from "react";

const List = ({todos}) => {
    const todoList = todos.map( todo => <li>{todo}</li>)
    return(
        <ul>{todoList}</ul>
    )
}

const App = () => {
    const [todos, setTodos] = useState(['useState 기본값']);
    const [newTodo, setNewTodo] = useState();
    
    const changeInputData = (e) =>{
        setNewTodo(e.target.value);
    }

    const addTodo = (e) =>{
        e.preventDefault();
        // 이전에 todo값을 가져오고, 새로운 todo 값을 새로운 배열에 추가한다
        setTodos([...todos, newTodo]);
    }

    //todos값이 실행될때마다 console이 실행된다
    useEffect(() =>{
        console.log("새로운 내용이 랜더링 됐네요")
    },[todos])

    return (
        <>
        <h3>todo 애플리케이션</h3>
        <form action="">
            <input type="text" name="" onChange={changeInputData}></input>
            <button onClick={addTodo}>할일추가</button>
        </form>
        <List todos={todos}></List>
        </>
    )
}

export default App;