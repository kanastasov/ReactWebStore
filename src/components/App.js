import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleItems from '../sample-items';
import Item from '../components/Item';

class App extends React.Component {
    state = {
        items: {},
        order: {}
    };

    addItem = (item) => {
        // 1 take a copy of the existing state
        const items = {... this.state.items};
        items[`item${Date.now()}`] = item;

        this.setState({
            items: items
        });
     
        console.log("Adding Item");
    };

    loadSampleItems = () => {
        this.setState({items: sampleItems});
    }

    addToOrder = (key) => {
               //take copy of state
        const order = {... this.state.order};
        //add the order or update number in order
        order[key] = order[key] + 1 || 1;
        this.setState({
            order : order
        });
    }

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
                <Order items={this.state.items} order={this.state.order} />
                <Inventory addItem={this.addItem} loadSampleItems={this.loadSampleItems} />
                
            </div>
        )
    }


}

export default App;