import React from "react";

class Timer extends React.Component{
    constructor(props) {
        this.state = {
            time: new Date()
        }
    }

    //ui가 초기화되었다.
    componentDidMount() {
        //ui가 랜더링 된 이후, 즉시 호출
        this.tick()
    }

    //초당 업데이트 함수
    tick() {
        //setState 비동기 함수이고, 비동기함수의 완료를 아래에 콜백함수에 작성 (2번째 파라미터)
        this.setState({
            time: new Date()
        }, () => {
            //콜백함수,, arrow
            console.log(this.state)
        })
    }

    //setState는 render 함수 안에서 사용할 수 없다xxxx
    render() {
        const {time} = this.state
        return(
            <>
                {time.date.toLocaleTimeString()}
            </>
        )
    }
}
export default App;