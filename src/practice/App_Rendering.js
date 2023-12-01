import React from "react";

// render와 코드는 항상 함수를 반환해야 한다. 간편하게 arrow 사용
const Loading = () => <div>Loading...</div>


class LoadingComponent extends React.component{
  constructon(props){
    super(props)
    this.state={
      loading: false
    }
  }

  comment() {
    const con = 1
    const res = con > 0 ? true:false
    const and = loading && (<div>loading..</div>)
  }
  
  render(){
    const{loading} = this.state
    // 조건이 있는 rendering은 if 절 대신 한줄로 간편하게 아래와 같이 표현 한다. if(loading) return <Loading/>
    return(
      <>
        {
          loading ? <Loading /> : <div>this is a webpage</div>
          // loading && <Loading / > 로딩일 경우에만 리턴해라
        }
      </>
    )
  }
}

export default App;
