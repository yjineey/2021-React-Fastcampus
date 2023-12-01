// 코드팩토리 useState(카운트증가), useEffect
import React, {useState, useEffect} from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    const addCount = (e) => {
        e.preventDefault();
        setCount(count + 1);
    };

    //실행할 함수 파라미터를 받고, array를 받는다 /array값이 바뀌면 useEffect가 실행
    useEffect(()=>{
        console.log('useEffect 실행');

        //unmount (count가 실행되지 않으면 unmount되지 않으면 실행된다)
        return() =>{
            console.log('unmount');
        }
    }, [count])
    return(
        <>
            <form >
                count : {count}
                <br></br>
                <button onClick={addCount}>카운트증가</button>
            </form>
        </>
    )
}

export default App