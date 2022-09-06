const TestComponent = () => {
    const list=[
        {
            id:1001,
            name:'react'
        },
        {
            id:1002,
            name:'vue'
        }
    ]
    return (
        <ul>
            {list.map(item=>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={(e)=>console.log(e,item.id)}>点击获取数据</button>
                </li>
                ))}
        </ul>
    )

}
function HelloFn() {
    const clickHandler=(e)=>{
        console.log("事件被触发了",e)
    }
    return(
        <div>
            <button onClick={clickHandler}>点击我</button>
            <TestComponent/>
        </div>
    )

}
export default HelloFn;