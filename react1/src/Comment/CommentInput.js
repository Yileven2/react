import React, {Component} from 'react';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        //接收父组件传过来的onSubmit属性
        if (this.props.onSubmit) {
            const {username, content} = this.state;
            //并将数据放入到此属性中
            this.props.onSubmit({username, content})
        }
        this.setState({username: "", content: ""})
    }

    render() {
        return (
            <div className={'comment-input'}>
                <div className={'comment-field'}>
                    <span className={'comment-field-name'}>用户名：</span>
                    <div className={'comment-field-input'}>
                        <input type="text" onChange={this.handleUsernameChange.bind(this)} value={this.state.username}
                               placeholder={"用户名"}/>
                    </div>
                </div>
                <div className={'comment-field'}>
                    <span className={'comment-field-name'}>评论内容</span>
                    <div className={'comment-field-input'}>
                        <textarea onChange={this.handleContentChange.bind(this)} value={this.state.content}
                                  placeholder={"发表你的意见"}/>
                    </div>
                </div>
                <div className={'comment-field-button'}>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;