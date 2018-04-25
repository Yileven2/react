import React, {Component} from 'react';
import Comment from "./Comment";

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        return (
            <div>
                {/* 接受来自父组件的comments,并对其进行map操作*/}
                {this.props.comments.map((comment, i) => {
                    return (
                        /*将数据传给子组件，在子组件中的this.props.comment中获取　*/
                        <Comment comment={comment} key={i}/>
                    )
                })}
            </div>
        )
    }
}

export default CommentList;