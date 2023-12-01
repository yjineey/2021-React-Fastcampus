import React from "react";

//Stateless: 상태가 없는
//State: 상태 / State Class (상태가 있는 클래스)를 기반으로 한다.

//리액트 컴포넌트 확장  React.Component
class Fast extends React.Component{
  // 기본적으로 생성자 생성해주고, props를 상속받아
  constructor(props){
    // super 키워드로 ... props는 상위계층의 컴포넌트와 데이터 교환을 위해 사용
    super(props)

    // state는 다른 컴포넌트와 상호교환이 아닌 해당 component = Fast class 내부에서, 해당컴포넌트 안에서 사용하는 목적으로 사용 / state는 객체로 정의
    this.state = {
      lang: 'javascript',
      props,    //props한 데이터 모두 state에 넣을 수 있다.
      date: new Date(),
    }
  }

  //클래스 내부에 render함수 + return 값
  render(){
    //정의한 state를 render함수에서 바로 사용가능
    const{lang, props, date} = this.state

    //JSX를 리턴한다, 자바스크립트 코드 및 변수 사용가능
    return(
      <div>{lang}</div>
    )  
  }
}

export default App;
