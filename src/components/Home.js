import React from 'react';
import Zoom from 'react-reveal/Zoom';
import malebody from '../humanbody.png';
import femalebody from '../femalebody.png';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowaMale: false,
            isShowdiv: false
        };
        this.toggleShowMale = this.toggleShowMale.bind(this);
        this.togglediv = this.togglediv.bind(this);
    }

    togglediv(show) {
        this.setState({ isShowdiv: show });
    }

    toggleShowMale(show) {
        this.setState({ isShowaMale: show });
        this.togglediv(true);
    }

    render() {

        const { isShowaMale, isShowdiv } = this.state;

        return (
            <div className="container py-5">

                <div className="row">
                    <button className="btn col-6 bg-transparent col-6" onClick={() => this.toggleShowMale(true)}  >
                        <img className="humanbody profile" src={malebody} />
                    </button>
                    <button className="btn col-6 bg-transparent col-6" onClick={() => this.toggleShowMale(false)}  >
                        <img className="humanbody profile" src={femalebody} alt="" />
                    </button>
                </div>

                <p>Tell us, where does it hurt.</p>

                {/* Hidden div */}
                { isShowdiv && (
                    <Zoom center>
                        <div className="row">
                            <div className="mx-auto">
                                {`Hey ${isShowaMale ? "man" : "woman"}!`}
                            </div>
                        </div>
                    </Zoom>
                )}
                {/* Hidden div */}

                <Zoom center>
                    <div className="row">
                        <div className="col-12 col-sm-6 py-5 text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut beatae quos impedit est repudiandae asperiores quia eum nobis, inventore officiis dolorum laudantium placeat eligendi, odio animi doloribus. Illo, vel.
                        </div>
                        <div className="col-12 col-sm-6 py-5 text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut beatae quos impedit est repudiandae asperiores quia eum nobis, inventore officiis dolorum laudantium placeat eligendi, odio animi doloribus. Illo, vel.
                        </div>
                    </div>
                </Zoom>
            </div>
        )
    }
}

export default Home;