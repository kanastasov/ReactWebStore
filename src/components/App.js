import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleItems from '../sample-items';
import Item from '../components/Item';
import base from '../base';

class App extends React.Component {
    state = {
        items: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }
        this.ref=base.syncState(`${params.storeId}/items`,
        {context: this,
        state: "items"
        });
     }

     componentWillUnmount() {
         base.removeBinding(this.ref);
     }

     componentDidUpdate() {
         localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
     }

    addItem = (item) => {
        // 1 take a copy of the existing state
        const items={...this.state.items};
        items[`item${Date.now()}`] = item;

        this.setState({
            items: items
        });
     
        console.log("Adding Item");
    };


    updateItem = (key, updateItem) => {
        const items = {...this.state.items};
        items[key] = updateItem;
        this.setState({items});
    };


    deleteItem = key => {
        const items = {...this.state.items};
        items[key] = null;
        this.setState({items});
    };


    loadSampleItems = () => {
        this.setState({items: sampleItems});
    }

    addToOrder = (key) => {
               //take copy of state
        const order={...this.state.order};
        //add the order or update number in order
        order[key] = order[key] + 1 || 1;
        this.setState({
            order : order
        });
    };

    deleteOrder = key => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu"> 
                    <Header  tagline = "Natural Foods"/>
                    <ul className="items">
                        {Object.keys(this.state.items)
                        .map(key =>
                        <Item key={key} 
                        index={key}
                        details={this.state.items[key]} addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>        
                <Order 
                items={this.state.items} 
                order={this.state.order} 
                deleteOrder={this.deleteOrder}
                />
                <Inventory 
                addItem={this.addItem} 
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
                loadSampleItems={this.loadSampleItems} 
                items={this.state.items}
                />
                
            </div>
        )
    }


}

export default App;