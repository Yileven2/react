import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    render() {
        const {comment} = this.props;
        return (
            <div className={'comment'}>
                <div className={'comment-user'}>
                    {/*接收并使用父组件。。List传过来的Comment，将用于显示*/}
                    <span>{comment.username}</span> :
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}

export default Comment;