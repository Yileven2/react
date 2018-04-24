import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Likebutton extends Component{
    constructor(){
        super()
        this.state={isLiked:false}
    }
    handleClickOnLikeButton(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked?"cancel":"execute"}👍
            </button>
        )
    }
}

ReactDOM.render(
    <Likebutton/>,
    document.getElementById('root')
);