

import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class List extends Component {

    
    render(){
       
        const listOfProduct = this.props.productPassing.map((alm) => {
        
        return (
            <div>
           <Link to={`/productdetails/${alm.id}`}>
           <h3> 
           {alm.id}
           </h3>
           
           </Link>
            <span></span>
            <button onClick={() => this.props.movingToCart(alm)} >Add me to Cart</button>

            </div>
        )

        })
            
        return (
            <div>
            Hello I am list 
            {listOfProduct}
            </div>
        )
    }
}