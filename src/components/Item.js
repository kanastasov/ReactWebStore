import React from 'react';
import { formatPrice } from '../helpers';

class Item extends React.Component{
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    } ;
    render() {
        const {image,name, price, desc, status} = this.props.details;
        const isAvailable =  status === 'available';
        return (
        <li className = "menu-item">
            <img src ={image} alt={this.props.details.name} />
            <h3 className="item-name">
                {name} 
             <span className="price">{formatPrice(price)}</span>
            </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
            {isAvailable ? "Add To Order" : "Sold Out!"}
            </button>
        </li>
       );
        
    }

}

export default Item;