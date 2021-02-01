import React from 'react';
import Zoom from 'react-reveal/Zoom';
import malebody from '../humanbody.png';
import femalebody from '../femalebody.png';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowaMale: false
        };
        this.toggleShowMale = this.toggleShowMale.bind(this);
    }


    toggleShowMale(show) {
        this.setState({ isShowaMale:show });
        // this.setState({showdiv:!showdiv});
    }

    render() {

        const { isShowaMale } = this.state;

        return (
            <div className="container py-5">

                <div className="row">
                    <button disabled={isShowaMale} className="btn col-6 bg-transparent col-12 col-sm-6" onClick={() => this.toggleShowMale(true)}  >
                        <img className="humanbody profile" src={malebody} />
                    </button>
                    <button disabled={!isShowaMale} className="btn col-6 bg-transparent col-12 col-sm-6" onClick={() => this.toggleShowMale(false)}  >
                        <img className="humanbody profile" src={femalebody} alt="" />
                    </button>
                </div>

                
                {/* Hidden div */}
                <div className="row mx-auto">
                    {`Hey ${isShowaMale? "man" : "woman"}!`}
                </div>
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