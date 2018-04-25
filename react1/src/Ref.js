import React, {Component} from 'react';

class AutoFocus extends Component {
    render() {
        return (
            //我们可以给任意代表 HTML 元素标签加上 ref 从而获取到它 DOM 元素然后调用 DOM API。
            <input ref={(input) => {
                this.input = input;//获取到真实DOM里面的input
            }}/>
        )
    }

    componentDidMount() {
        this.input.focus()//对真实DOM进行操作
    }
}

export default AutoFocus;