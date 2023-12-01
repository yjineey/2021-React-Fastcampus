import React from "react";

// reactLifecycle = state 기반의 component 다
class LifeCycle extends React.Component{
  constructor(props){     //해당 클래스를 초기화 하고
    super(props)      //super는 부모클래스 생성자 참고로서 호출하지 않으면 constructor에서 this를 사용할 수 없다.

  }
  //화면에 ui가 호출되기 전에 rendering되기 전에 mount시키겠다 (초기화시키겠다.)
  componentWillMount(){

  }


  //rendering을 해야만 화면에 보여지기 때문에 render가 없는 class는 존재할 수 없다.
  // setState사용 불가, 랜더링 중에 상태를 바꾸면 안되기 때문에.. 결과를 보장받지 못하게 된다
  render(){
    return(<></>)

  }

  //랜더링 된 이후에 업데이트가 필요하면 여기서
  componentDidMount(){

  }

  //해당 로직이 더이상 필으니까 초기화 하겠다
  // setState사용 불가, 로직을 삭제하는 중이니까..
  componentWillUnmount

}

export default App;
