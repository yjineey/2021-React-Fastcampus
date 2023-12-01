import React from "react";

function App(){
  // const handleClick= () => {
  // const handleClick= (params) => {
  const handleClick=(e)=>{
    //중첩을 막기위해... onclick이 두번 실행되면 내부작동을 해야하는데 외부 클릭이 적용될수도 있다. 이를방지
    e.preventDefault() 
    // console.log(params)    //params값이 들어오면 test가 출력된다
    // console.log('button is clicked')   //{handleClick} 일때 출력
  }

  const newHandleClick=(e)=>{
    e.preventDefault()
    console.log('wrapper is clicked')
  }

  //파라미터 반환 하기: 파라미터를 받도록.. test가 출력
  const newHandleClick=(param)=>{
    e.preventDefault()
    console.log('param') 
  }

  return(
    // <div onClick={newHandleClick}>
      <button onClick={() => handleClick('test')}> this is a button </button>
      // <button onClick={handleClick}> this is a button </button>
    // </div>

  )
}

export default App;