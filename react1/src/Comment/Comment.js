import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    };

    constructor() {
        super();
        this.state = {timeString: ''};
    }

    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createTime) / 1000
        this.setState({
            timeString: duration > 60 ? `${ Math.round(duration / 60) } 分钟之前` : `${ Math.round(Math.max(duration, 1)) } 秒前`
        })
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    componentWillMount() {
        this._updateTimeString();
        //开启一个定时器，指定5秒刷新一次
        this._timer = setInterval(
            this._updateTimeString.bind(this), 5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    _getProcessedContent(content) {
        return content
            .replace(/&/g, '&amp')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt')
            .replace(/"/g, '&quot')
            .replace(/'/g, '&#039;')
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render() {
        return (
            <div className={'comment'}>
                <div className={'comment-user'}>
                    {/*接收并使用父组件。。List传过来的Comment，将用于显示*/}
                    <span>{this.props.comment.username}</span> :
                </div>
                <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.comment.content)}}/>
                <span className={'comment-createtime'}>
                    {this.state.timeString}
                </span>
                <span onClick={this.handleDeleteComment.bind(this)} className={'comment-delete'}>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment;