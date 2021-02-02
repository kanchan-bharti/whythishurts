import React from 'react';
import Zoom from 'react-reveal/Zoom';

// Images:

// import malebody from '../asets/humanbody.png';
import malebody_orange from '../assets/humanbody_orange.png';
// import femalebody from '../assets/femalebody.png';
import femalebody_orange from '../assets/femalebody_orange.png';
import female_head from '../assets/female_head.png';
import male_head from '../assets/male_head.png';
import male_chest from '../assets/male_chest.png';
import female_chest from '../assets/female_chest.png';
import male_neck from '../assets/male_neck.png';
import female_neck from '../assets/female_neck.png';
import male_center_chest from '../assets/male_center_chest.png';
import female_center_chest from '../assets/female_center_chest.png';
import male_stomach from '../assets/male_stomach.png';
import female_stomach from '../assets/female_stomach.png';
import male_hips from '../assets/male_hips.png';
import female_hips from '../assets/female_hips.png';
import human_palm from '../assets/human_palm.png';
import human_finger from '../assets/human_finger.png';
import human_foot from '../assets/human_foot.png';
import human_ankle from '../assets/human_ankle.png';
import male_knees from '../assets/male_knees.png';
import female_knees from '../assets/female_knees.png';

import { Container, Card } from 'reactstrap';

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
            <Container className="py-5">

                <div className="row">
                    <button className="btn col-6 bg-transparent" onClick={() => this.toggleShowMale(true)}  >
                        <img className="humanbody" src={malebody_orange} alt="Male" />
                    </button>
                    <button className="btn col-6 bg-transparent" onClick={() => this.toggleShowMale(false)}  >
                        <img className="humanbody" src={femalebody_orange} alt="Female" />
                    </button>
                </div>

                <p>Tell us, where does it hurt.</p>

                {/* Hidden div */}
                { isShowdiv && (
                    <Zoom center>
                        <div className="row">
                            <div className="mx-auto">
                                <Card className="mx-auto p-5 w-75 bg-grey m-2 container">
                                        <div className="row">
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    <img src={`${isShowaMale ? male_head : female_head}`} className="body-part" alt="Head"/>
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2 ">
                                                <button className="btn bg-transparent col-4">
                                                    {/* <img src={require( `${isShowaMale ? '../assets/male_chest.png' : '../assets/female_chest.png' }` )} className="profile"/> */}
                                                    <img src={`${isShowaMale ? male_chest : female_chest}`} className="body-part" alt="Heart area or Chest" />
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    <img src={`${isShowaMale ? male_neck : female_neck}`} className="body-part" alt="Neck" />
                                                </button>
                                            </Card>
                                        </div>

                                        <div className="row">
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    {/* <img src={require( `${isShowaMale ? '../assets/male_chest.png' : '../assets/female_chest.png' }` )} className="profile"/> */}
                                                    <img src={`${isShowaMale ? male_center_chest : female_center_chest}`} className="body-part" alt="Central Chest Area" />
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    {/* <img src={require( `${isShowaMale ? '../assets/male_chest.png' : '../assets/female_chest.png' }` )} className="profile"/> */}
                                                    <img src={`${isShowaMale ? male_stomach : female_stomach}`} className="body-part" alt="Stomach Area" />
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    <img src={`${isShowaMale ? male_hips : female_hips}`} className="body-part" alt="Hips"/>
                                                </button>
                                            </Card>
                                        </div>

                                        <div className="row">
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    <img src={human_palm} className="body-part" alt="Hand" />
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    <img src={human_finger} className="body-part" alt="Finger" />
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2">
                                                <button className="btn bg-transparent col-4">
                                                    <img src={human_foot} className="body-part" alt="Foot" />
                                                </button>
                                            </Card>
                                        </div>

                                        <div className="row">
                                            <Card className="option-card m-2 mx-auto">
                                                <button className="btn bg-transparent col-6">
                                                    <img src={human_ankle} className="body-part" alt="Ankle" />
                                                </button>
                                            </Card>
                                            <Card className="option-card m-2 mx-auto">
                                                <button className="btn bg-transparent col-6">
                                                    <img src={`${isShowaMale ? male_knees : female_knees}`} className="body-part" alt="Knees"/>
                                                </button>
                                            </Card>
                                        </div>
                                </Card>
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
            </Container>
        )
    }
}

export default Home;