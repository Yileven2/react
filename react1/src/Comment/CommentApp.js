import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

//CommentApp 现在暂时还很简单，文件顶部引入了 CommentInput 和 CommentList 。
class ComponentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment) {
        if (!comment) return;
        if (!comment.username) return alert("请输入用户名");
        if (!comment.content) return alert("请输入评论内容");
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className={'wrapper'}>
                {/*在这里将input的数据放入子组件*/}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default ComponentApp;