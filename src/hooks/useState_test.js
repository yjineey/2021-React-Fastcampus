// 코지코더 useState(로그인)
import React, {useState} from 'react';


function App(){
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        alert('username : '+ username + ' / password : ' + password ) ;
    };

    return(
        <div>
            {/* onsubmit 사용하면 엔터쳐도 적용이된다 */}
            <form onSubmit={onSubmit}>
                <input 
                placeholder="Username" 
                value={username} 
                //event가 들어가고 setUsername 이벤트안에 이벤트-타겟안에 value 의 값이 event값으로 적용
                onChange={(e) => setUsername(e.target.value)}/><br/>
                <input 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default App