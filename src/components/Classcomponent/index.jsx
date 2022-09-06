import React from "react";
class CComponent extends React.Component{
    state={
        count:0
    }
    setCount=()=>{
        this.setState({
            count:this.state.count+2
        })
    }
    clickHandler=(e,num)=>{
        console.log(this)
    }
    clickHandler1(){
        console.log(this)
    }
    render() {
        return(
            <div>
                <button onClick={(e)=>this.clickHandler(e,'124')}>点击我1</button>
                <button onClick={this.clickHandler1}>点击我2</button>
                <button onClick={this.setCount}>{this.state.count}</button>
            </div>
        )
    }
}

export default CComponent;