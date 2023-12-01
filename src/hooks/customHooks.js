// 코드팩토리 customHooks
import React, {useState, useEffect} from 'react';

const App = () => {

    const[data, setData] = useState(['']);

    useEffect(()=>{
        refresh();
    },[])

    const refresh = () =>{
        //강아지 사진이 랜덤으로 출력
        fetch('http://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(newData => setData(newData))
    }

    return(
        <>
            <img src={data?.message}/>
            <button onClick={refresh}>refresh</button>
        </>
    )
}
export default App