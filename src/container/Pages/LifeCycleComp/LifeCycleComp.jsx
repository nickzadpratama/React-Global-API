import React, {Component, Fragment, useDebugValue} from 'react';
import './LifeCycleComp.css';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

// !redux
// import {RootContext} from '../../Home/Home';

class LifeCycleComp extends Component {
    constructor (props) {
        // ? super, karena extends Component
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount');

        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate')
        // console.log('nextProps: ', nextProps)
        console.log('nextState: ', nextState)
        console.log('thisState: ', this.state)
        console.groupEnd()
        if (nextState.count >= 4) {
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        // console.log(this);
        return (
            // karena return hanya mengembalikan 1 value maka harus dibungkus fragment jika lebih dri 1
            // !redux
            // <Fragment>
            //     <p>Halaman LifeCycle</p>
            //     <hr />
            //     <button className="btn">Component Button</button>
            //     <hr />

            //     <p>Total Order: {this.props.order}</p>
            // </Fragment>

            // !context
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button</button>
                <hr />

                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);