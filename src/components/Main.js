import React from 'react';
import Header from './Header';
import Home from './Home2';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import HeadPainRemoval from './PainRemovalModals/HeadPainRemoval';
import history from './history';
// import PainRemoval from './PainRemovalModals/ExamplePainRemoval';
// import Footer from './Footer';

class Main extends React.Component {

    render() {
        // const HomePage = () => {
        //     return (
        //         <Home />
        //     )
        // }

        return (
            <div>
                <Header />
                <Router history={history}>
                    <Switch location={this.props.location}>
                        <Route path="/home" component={Home} />
                        <Route path="/head" component={HeadPainRemoval} />
                        <Redirect to="/home" />
                    </Switch>
                </Router>

                {/* <Footer/> */}
            </div>
        )
    }
}

export default Main;