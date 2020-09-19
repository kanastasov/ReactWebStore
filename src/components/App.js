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

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu"> 
                    <Header  tagline = "Natural Foods"/>
                    <ul className="items">
                        {Object.keys(this.state.items)
                        .map(key =><Item key={key} 
                        details={this.state.items[key]}/>)}
                    </ul>
                </div>        
                <Order />
                <Inventory addItem={this.addItem} loadSampleItems={this.loadSampleItems} />
                
            </div>
        )
    }


}

export default App;