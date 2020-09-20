import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemFrom';

class Inventory extends React.Component{
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