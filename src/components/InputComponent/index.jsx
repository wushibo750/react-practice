import React from "react";
class InputComponent extends React.Component{
    state={
        message:'this is message'
    }
    changeHandler=(e)=>{
        this.setState({
            message:e.target.value
            }
        )
    }
    Demo=()=>{
        console.log("返回数据==>",this.state.message)
    }

    render() {
        return (
            <div>
                <input value={this.state.message} onChange={this.changeHandler}/>
                {/*需要使用this*/}
                <button onClick={this.Demo}>输出数据</button>
            </div>
        );
    }
}
export default InputComponent;