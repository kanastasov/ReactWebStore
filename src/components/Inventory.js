import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemFrom';
import PropTypes from 'prop-types';
class Inventory extends React.Component{
    static propTypes = {
        items: PropTypes.object,
        updateItem: PropTypes.func,
        deleteItem: PropTypes.func,
        loadSampleItems: PropTypes.func
    };

    render() {
        return (
          <div className="inventory">
              <h2>Inventory</h2>
              {Object.keys(this.props.items).map(key => 
              <EditItemForm  
              key={key}
              index={key}
              item={this.props.items[key]} 
              updateItem={this.props.updateItem}
              deleteItem={this.props.deleteItem}
              />)}
              <AddItemForm addItem={this.props.addItem} />
              <button onClick={this.props.loadSampleItems}>Load Fruits</button>
          </div>
        

        );
    }

}

export default Inventory;