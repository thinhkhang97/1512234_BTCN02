import React, { Component } from 'react';
import Explorer from './pages/Explorer';
import SearchTag from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/searchTag/:tagName' component={SearchTag} />
                    <Route exact path='/' component={Explorer} />
                </div>
            </Router>

        );
    }
}

export default App;