import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
   
    constructor(){
        super()
        this.state = {
            productDetails: {}
        }
    }

    componentWillMount() {
         axios.get(`/api/products/${this.props.match.params.id}`).then((response) => {
             this.setState({
                 productDetails:response.data
             })
         })
    }
    render() {
      
        return (
            <div>
            hgghjhjhjhj
                <h1>{this.state.productDetails.color}</h1>
                <p>{this.state.productDetails.price}</p>
                <h3>{this.state.productDetails.details}</h3>
            </div>
        );
    }
}

export default Details;