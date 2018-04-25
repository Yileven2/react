import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
        console.log('constructer');
    }

    componentWillMount() {//即将要进行挂载
        console.log("Will mount:进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动");
    }

    render() {//正在进行挂载
        console.log('render');
        return (
            <div>
                <h1 className={'title'}>React book</h1>
            </div>
        )
    }

    componentDidMount() {//已经完成挂载操作
        console.log("Did mount:有些组件的启动工作是依赖 DOM 的，例如动画的启动,这时候就可以把这些操作放在 componentDidMount 当中");
    }

    componentWillUnmount() {//从页面中移除
        console.log("Removed:组件从页面上销毁的时候,有时候需要一些数据的清理，例如定时器的清理")
    }

//    更新阶段自己去了解
}

class Index extends Component {
    constructor() {
        super();
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowHeader ? <Header/> : null}
                {/*{this.state.isShowHeader?<Clock/>:null}*/}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏
                </button>
            </div>
        )
    }
}

export default Index;
