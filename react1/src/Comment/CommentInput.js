import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    static propsType = {
        //规定传进来的onSubmit必须是函数
        onSubmit: PropTypes.func
    };

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

    //处理点击提交按钮之后的渲染
    handleSubmit() {
        //接收父组件传过来的onSubmit属性
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createTime: +new Date()
            })
        }
        this.setState({content: ''});
    }

    //加载名字的方法
    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({username});
        }
    }

    //讲获取的名字进行保存
    _saveUsername(username) {
        localStorage.setItem('username', username);
    }

    //失去焦点时将名字传给保存方法将username保存
    handleUsernameBlur(ev) {
        this._saveUsername(ev.target.value);
    }


    /**
     * 开始渲染生命周期
     */

    //每次重新渲染访问一次加载名字的方法
    componentWillMount() {
        this._loadUsername();
    }

    //自动聚焦评论栏
    componentDidMount() {
        this.textarea.focus();
    }


    /**
     * 组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头。把事件监听方法传给组件的时候，属性名用 on 开头。
     * @returns {*}
     */

    render() {
        return (
            <div className={'comment-input'}>
                <div className={'comment-field'}>
                    <span className={'comment-field-name'}>用户名：</span>
                    <div className={'comment-field-input'}>
                        <input onBlur={this.handleUsernameBlur.bind(this)}
                               onChange={this.handleUsernameChange.bind(this)} value={this.state.username}
                               placeholder={"用户名"}/>
                    </div>
                </div>
                <div className={'comment-field'}>
                    <span className={'comment-field-name'}>评论内容</span>
                    <div className={'comment-field-input'}>
                        <textarea ref={(textarea) => this.textarea = textarea}
                                  onChange={this.handleContentChange.bind(this)} value={this.state.content}
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