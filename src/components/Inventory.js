import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemFrom';
import PropTypes from 'prop-types';
import Login from './Login';
import firebase from "firebase";
import base, { firebaseApp } from '../base';
class Inventory extends React.Component{
    static propTypes = {
        items: PropTypes.object,
        updateItem: PropTypes.func,
        deleteItem: PropTypes.func,
        loadSampleItems: PropTypes.func
    };

    state = {
        uid:null,
        owner:null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({user});
            }
        })
    };
    authHandler = async authData => {
        const store = base.fetch(this.props.storeId, {context: this});

        if(!store.owner) {
            await base.post(`${this.props.storeId}/owner`,{
             data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })

    };
    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
          .auth()
          .signInWithPopup(authProvider)
          .then(this.authHandler);
      };

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({uid:null});
    }
 
    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>

        if(!this.state.uid) {
            return <Login authenticate={this.authenticate}/>;
        }
       
        if(this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry you are not the owner</p>
                    {logout}
                </div>
            );
        }
        return (
          <div className="inventory">
              <h2>Inventory</h2> 
              {logout}
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