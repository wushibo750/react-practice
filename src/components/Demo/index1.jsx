import React from "react";
class HelloC extends React.Component{
    render() {
        return <div>这是一个类组件</div>;
    }
}
function Ademo () {
    return (
        <div className="App">
            {/* 渲染类组件 */}
            <HelloC />
            <HelloC></HelloC>
        </div>
    )
}
export default Ademo