import React, { Component } from 'react';

export default class Cart extends Component {

    
    render() {
        const itemsOnCart = this.props.itemsToCart.map((product) => {
            return (
                <div>
                {product.id}
                </div>
            )
        })
        return (
            <div>
          Hello I am a cart    
          {itemsOnCart}  
            </div>
        );
    }
}

