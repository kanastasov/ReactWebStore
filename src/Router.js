import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import React from 'react';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />        
        </Switch>
    </BrowserRouter>
);
 
export default Router;