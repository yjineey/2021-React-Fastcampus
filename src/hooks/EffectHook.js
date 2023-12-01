import React, {useState, useEffect} from "react"
import axios from 'axios'

const App = () => {
    const [data, setData] = useState({ hits: []});
    const [query, setQuery] = useState('react')

    // 해당 input의 값이 변경되었을때 use Effect를 사용한다
    useEffect(() => {

        //query 데이터 값이 반환이 완료되어 더이상 다른 비동기 코드를 실행하지 않아도 된다. 초기에는 무시하면 안되니까 false
        let completed = false 

        async function get(){
            const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`)
            if (!completed) setData(result.data)
        }
        get()
        return() => {
            //다른비동기작업이 실행되지 않도록
            completed = true
        };
    }, [query])

    return (
        <>
        <input value={query} onChange = {e => setQuery(e.target.value)} />
        <ul>
            {data.hits.map(item => (
                <li key={item.objectId}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
        </>
    )
}

export default App