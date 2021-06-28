import React from 'react';
import Header from './Header';
import Home from './Home2';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import HeadPainRemoval from './PainRemoval/HeadAche/HeadAcheRemoval';
// import ShoulderPainRemoval from './PainRemoval/ShoulderAche/';

import history from './history';
// import PainRemoval from './PainRemovalModals/ExamplePainRemoval';
// import Footer from './Footer';

class Main extends React.Component {

    render() {

        return (
            <div>
                <Header />
                {/* <BrowserRouter> */}
                    <Router history={history}>
                        <Switch location={this.props.location}>
                            <Route path="/home" component={Home} />
                            <Route path="/head-male" component={HeadPainRemoval} />
                            <Route path="/head-female" component={HeadPainRemoval} />
                            <Redirect to="/home"/>
                        </Switch>
                    </Router>
                {/* </BrowserRouter> */}

                {/* <Footer/> */}
            </div>
        )
    }
}

export default Main;