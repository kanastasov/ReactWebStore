import React from 'react';
import { formatPrice } from '../helpers';

class Item extends React.Component{
    render() {
        const {image,name, price, desc, status} = this.props.details;
        return (
        <li className = "menu-item">
            <img src ={image} alt={this.props.details.name} />
            <h3 className="item-name">
                {name} 
        <span classNam="price">{formatPrice(price)}</span>
            </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
        </li>
       );
        
    }

}

export default Item;