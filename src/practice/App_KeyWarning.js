import React from "react";
import "./App.css";

function App(){
  const item = [0,1,2]
  return(
    <div>
      {
        //map()함수는 array값을 반환한다 / 반복되는 컴포넌트를 렌터링 할수 있게 하는 함수
        //키가 없다고 keyWarning 경고창이 뜬다 - console
        item.map(item => <h1>item</h1>) 
      }
      {
        // Q.react는 왜 사용자가 key를 선언하도록 만들었을까? key는 중복값 x, 고유값
        item.map(item => <h1 key={item} >item</h1>)
      }
      {
        //index를 사용하지 않도록 한다. component가 아래와 같이 2개 이상 반복되다보면.. index값이 서로 중복될 수 있다. 
        //충돌발생으로 인한 결과가 달라짐, index를 사용해서 component가 rendering 되면 운이 좋은거다....ㅋㅋ
        item.map((item,index) => <h1 key={index} >item</h1>)
      }
      {
        item.map((item,index) => <h1 key={index} >item</h1>)
      }
    </div>
  )
}

export default App;