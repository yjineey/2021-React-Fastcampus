// 패스트캠퍼스 인강 useState
import React, {useState} from "react";
import './App.css';

const Todo = ({todo, index, completeTodo, removeTodo}) => {
    return(
        <>
        <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
         >
            {todo.text}
        </div>
        <div>
            <button onClick = {() => completeTodo(index)}>Completed </button>
            <button onClick = {() => removeTodo(index)}>X </button>
        </div>
        </>
    )
}
const TodoForm=({addTodo}) => {
    //초기화, 값이 없을경우 undefind로 표시되는 것을 막기 위해
    const [value, setValue] = useState('')

    const handleSubmit = e =>{
        //클래스가 중첩되어 2번 실행되는 것을 방지 한다.
        e.preventDefault();
        if(!value) return
        //값이 없으면
        addTodo(value)
        //값이 있으면 다시 초기화
        setValue('')
    }

    //return 이 실제 적용되는 값이고
    return(
        //onSubmit = 엔터키
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="input"
            value={value}
            //타이핑 할때마다 바로 적용(엔터없이) onChange
            onChange={e => setValue(e.target.value)}
            >
            </input>
        </form>
    )
}

const App = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = text => {
        const newTodos = [...todo, {text}]
        setTodo(newTodos)
    }
    
    const completeTodo = index => {
        //시존의 파라미터값을 그대로 추가
        const newTodos = [...todo]
        //해당 인덱스의 값이 완료되었다
        newTodos[index].isCompleted = true
        setTodo(newTodos)
    }
    
    const removeTodo = index => {
        //todo를 가져오고
        const newTodos = [...todo]
        //기존에 todo에서 1개를 삭제
        newTodos.splice(index , 1) 
        //파라미터로 넘겨서 업데이트
        setTodo(newTodos)

    }

    return (
        <div className="app">
            <div className="todo-list">
                {
                    todo.map((item,index) => (
                        <Todo
                         key={item}
                         index={index}
                         todo={todo}
                         completeTodo={completeTodo}
                         removeTodo={removeTodo}
                        />
                    ))
                }
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default App;