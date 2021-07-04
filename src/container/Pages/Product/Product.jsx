import React, {Component, Fragment} from 'react';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

// !redux
// import {RootContext} from '../../Home/Home';

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return(
                // !redux
                // <Fragment>
                //     <p>Halaman Produk</p>
                //     <hr />
                //     <div className="header">
                //         <div className="logo">
                //             <img src="https://picsum.photos/250/150" alt="" />
                //         </div>
                //         <div className="troley">
                //             <img src="https://picsum.photos/250/150" alt="" />
                //             <div className="count">{this.props.order}</div>
                //         </div>
                //     </div>
                //     <CardProduct/>
                // </Fragment>

                // !context
                <Fragment>
                    <p>Halaman Produk</p>
                    <hr />
                    <div className="header">
                        {/* <div className="logo">
                            <img src="https://picsum.photos/250/150" alt="" />
                        </div> */}
                        <div className="troley">
                            {/* <img src="https://picsum.photos/250/150" alt="" /> */}
                            <div className="count">{this.props.state.totalOrder}</div>
                        </div>
                    </div>
                    <CardProduct/>
                </Fragment>

                // <Fragment>
                //     <p>Halaman Produk</p>
                //     <hr />
                //     <div className="header">
                //         {/* <div className="logo">
                //             <img src="https://picsum.photos/250/150" alt="" />
                //         </div> */}
                //         <div className="troley">
                //             {/* <img src="https://picsum.photos/250/150" alt="" /> */}
                //             <div className="count">{this.props.state.totalOrder}</div>
                //         </div>
                //     </div>
                //     <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
                // </Fragment>
        );
    }
}

// !redux
// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);