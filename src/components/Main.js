import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default Main;