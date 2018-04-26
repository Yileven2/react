import React, {Component} from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    };

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return (
            <div>
                {/* 接受来自父组件的comments,并对其进行map操作*/}
                {this.props.comments.map((comment, i) => {
                    return (
                        /*将数据传给子组件，在子组件中的this.props.comment中获取　*/
                        <Comment comment={comment}
                                 key={i}
                                 index={i}
                                 onDeleteComment={this.handleDeleteComment.bind(this)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default CommentList;