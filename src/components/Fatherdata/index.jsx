import {useState} from "react";
function Counter(props){
    const [count,setCount]=useState(()=>{
       return props.count
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>数字为：{count}</button>
        </div>
    )
}
function Usestate() {
    return(
        <>
            <Counter count={10}></Counter>
            <Counter count={20}></Counter>
        </>
    )
}
export default Usestate;