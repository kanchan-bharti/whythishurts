import React from 'react';
import Zoom from 'react-reveal/Zoom';
import malebody from '../humanbody.png';
import femalebody from '../femalebody.png';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Home extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         isShowMale: false
    //     };
    //     this.toggleShowMale = this.toggleShowMale.bind(this);
    // }

    constructor() {
        super();
        const isShow = window.localStorage.getItem("isShowMale");;
        this.state = { isShowMale: isShow || false };
    }

    toggleShowMale(isShow) {
        window.localStorage.setItem("isShowMale", isShow);
        this.setState({ isShowMale: isShow });
    }

    // toggleShowMale(show) {
    //     this.setState({ isShowMale: show });
    //     // this.setState({showdiv:!showdiv});
    // }

    render() {

        const { isShowMale } = this.state;

        return (
            <div className="container py-5">
                <div className="row">
                    <button disabled={isShowMale} className="btn col-6 bg-transparent col-12 col-sm-6" onClick={() => this.toggleShowMale(true)}  >
                        <img className="humanbody profile" src={malebody} />
                    </button>
                    <button disabled={!isShowMale} className="btn col-6 bg-transparent col-12 col-sm-6" onClick={() => this.toggleShowMale(false)}  >
                        <img className="humanbody profile" src={femalebody} alt="" />
                    </button>
                </div>

                <p>Tell us where does it hurt.</p>

                {/* Hidden div */}
                <div className="row mx-auto">
                    <div className="mx-auto">
                        <p>Hey {`${isShowMale ? "man" : "woman"}!`}</p>
                    </div>
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