import React from 'react';
import Header from './Header';
import Home from './Home2';
import { Switch, Route, Redirect, Router } from 'react-router-dom';


import HeadAcheRemoval from './PainRemoval/HeadAche/HeadAcheRemoval';
import ChestAcheRemoval_male from './PainRemoval/ChestAche/ChestAcheRemoval_male';
import ChestAcheRemoval_female from './PainRemoval/ChestAche/ChestAcheRemoval_female';
import NeckAcheRemoval from './PainRemoval/NeckAche/NeckAcheRemoval';
import ShoulderAcheRemoval from './PainRemoval/ShoulderAche/ShoulderAcheRemoval';
import StomachAcheRemoval_male from './PainRemoval/StomachAche/StomachAcheRemoval_male';
import StomachAcheRemoval_female from './PainRemoval/StomachAche/StomachAcheRemoval_female';
import HandAcheRemoval from './PainRemoval/HandAche/HandAcheRemoval';
import HipAcheRemoval from './PainRemoval/HipAche/HipAcheRemoval';
import KneeAcheRemoval from './PainRemoval/KneeAche/KneeAcheRemoval';
import FootAcheRemoval_male from './PainRemoval/FootAche/FootAcheRemoval_male';
import FootAcheRemoval_female from './PainRemoval/FootAche/FootAcheRemoval_female';
import BackAcheRemoval from './PainRemoval/BackAche/BackAcheRemoval';

import history from './history';
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
                            <Route path="/head-male" component={HeadAcheRemoval} />
                            <Route path="/head-female" component={HeadAcheRemoval} />
                            <Route path="/chest-male" component={ChestAcheRemoval_male} />
                            <Route path="/chest-female" component={ChestAcheRemoval_female} />
                            <Route path="/neck-male" component={NeckAcheRemoval} />
                            <Route path="/neck-female" component={NeckAcheRemoval} />
                            <Route path="/shoulder-male" component={ShoulderAcheRemoval} />
                            <Route path="/shoulder-female" component={ShoulderAcheRemoval} />
                            <Route path="/stomach-male" component={StomachAcheRemoval_male} />
                            <Route path="/stomach-female" component={StomachAcheRemoval_female} />
                            <Route path="/hand-male" component={HandAcheRemoval} />
                            <Route path="/hand-female" component={HandAcheRemoval} />
                            <Route path="/hip-male" component={HipAcheRemoval} />
                            <Route path="/hip-female" component={HipAcheRemoval} />
                            <Route path="/knee" component={KneeAcheRemoval} />
                            <Route path="/foot-male" component={FootAcheRemoval_male} />
                            <Route path="/foot-female" component={FootAcheRemoval_female} />
                            <Route path="/back" component={BackAcheRemoval} />
                            <Redirect to="/home" />
                        </Switch>
                    </Router>
                {/* </BrowserRouter> */}

                {/* <Footer/> */}
            </div>
        )
    }
}

export default Main;