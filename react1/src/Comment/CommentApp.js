import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import wrapWithLoadData from './wrapWithLoadData'

//CommentApp 现在暂时还很简单，文件顶部引入了 CommentInput 和 CommentList 。
class ComponentApp extends Component {
    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            comments: props.data
        }
    }

    /* //每次将要渲染之前修改数据
     componentWillMount() {
         this._loadComments();
     }

     //保存列表区的内容
     _saveComments(comments) {
         localStorage.setItem('comments', JSON.stringify(comments));

     }

     //加载本地的列表区内容
     _loadComments() {
         let comments = localStorage.getItem('comments');
         if (comments) {
             comments = JSON.parse(comments);
             this.setState({comments})
         }
     }*/

    handleSubmitComment(comment) {
        if (!comment) return;
        if (!comment.username) return alert("请输入用户名");
        if (!comment.content) return alert("请输入评论内容");
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});
        this.props.saveData(comments);
        // this.state.comments.push(comment);
        // this.setState({
        //     comments: this.state.comments
        // })
    }

    handleDeleteComment(index) {
        // console.log(index);
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({comments});
        this.props.saveData(comments);
    }

    render() {
        return (
            <div className={'wrapper'}>
                {/*在这里将input的数据放入子组件*/}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

ComponentApp = wrapWithLoadData(ComponentApp, 'comments');
export default ComponentApp;