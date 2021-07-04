import React, {Component} from 'react';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../../context/context';
import ActionType from '../../../../redux/reducer/globalActionType';

// !redux
// import {RootContext} from '../../../Home/Home';

class Counter extends Component {
    // ?sdh menggunakan state global
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     });
    // }
    
    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         });
    //     }
    // }

    render() {
        // console.log(this);

        console.log(this);
        return (
            // !redux
            // <div className="counter">
            //     {/* menggunakan props karena sudah tidak menggunakan yg local tetapi global */}
            //     <button className="minus" onClick={this.props.handleMinus}>-</button>
            //     <input type="text" value={this.props.order} />
            //     <button className="plus" onClick={this.props.handlePlus}>+</button>
            // </div>

            // !context
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
            </div>
        )
    }
}

// !redux
// // mengambil state dri index(global) dan mengirimkan val order
// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
//     }
// }

// !redux
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);