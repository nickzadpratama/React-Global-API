import React, {Component, Fragment} from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://picsum.photos/250/150" alt="" />
                    </div>
                    <p className="product-title">Daging Ayam</p>
                    <p className="product-price">Rp 410,000</p>
                    <Counter />
                </div>
        );
    }
}

export default CardProduct;