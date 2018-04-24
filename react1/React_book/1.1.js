import React,{Component} from "react";
import ReactDOM from "react-dom";

class Header extends Component{
    render(){
        return (
            <div>
                <div>1</div>
                <div>2</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Header/>,
    document.getElementById('root')
);
