import React from 'react';
import PropTypes from 'prop-types';

class EditItemForm extends React.Component{
    static porpTypes = {
        item: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateItem: PropTypes.func
    };
    handleChange = event => {
        const updatedItem={
            ...this.props.item,
            [event.currentTarget.name]: event.currentTarget.value
         
        };
        this.props.updateItem(this.props.index, updatedItem)
    };
    render() {
        return(
            <div className="item-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.item.name}/>
            <input type="text" name="price" onChange={this.handleChange}  value={this.props.item.price}/>
            <select type="text" name="status" onChange={this.handleChange}  value={this.props.item.status}>
             <option value = "available">Fresh!</option>
              <option value = "unavailable">Sold out!</option>
            </select>
            <input type="text" name="desc" onChange={this.handleChange}  value={this.props.item.desc}/>
            <input type="text" name="image" onChange={this.handleChange}  value={this.props.item.image}/>
            <button 
                onClick={() => this.props.deleteItem(this.props.index)}>
                Remove Item
            </button>
            </div>
        );
    }
}
export default EditItemForm;