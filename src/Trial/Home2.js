import React from 'react';
import Zoom from 'react-reveal/Zoom';
// import history from './history';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import PainRemoval from './PainRemovalModals/ExamplePainRemoval';

// Images:

// import malebody from '../asets/humanbody.png';
import malebody_orange from '../assets/PNGs/malebody_orange.png';
// import femalebody from '../assets/femalebody.png';
import femalebody_orange from '../assets/PNGs/femalebody_orange.png';
import female_head from '../assets/PNGs/female_head.png';
import male_head from '../assets/PNGs/male_head.png';
import male_chest from '../assets/PNGs/male_chest.png';
import female_chest from '../assets/PNGs/female_chest.png';
import male_neck from '../assets/PNGs/male_neck.png';
import female_neck from '../assets/PNGs/female_neck.png';
import male_center_chest from '../assets/PNGs/male_center_chest.png';
import female_center_chest from '../assets/PNGs/female_center_chest.png';
import male_stomach from '../assets/PNGs/male_stomach.png';
import female_stomach from '../assets/PNGs/female_stomach.png';
import male_hips from '../assets/PNGs/male_hips.png';
import female_hips from '../assets/PNGs/female_hips.png';
import human_palm from '../assets/PNGs/human_palm.png';
import human_finger from '../assets/PNGs/human_finger.png';
import human_foot from '../assets/PNGs/human_foot.png';
import human_ankle from '../assets/PNGs/human_ankle.png';
import male_knees from '../assets/PNGs/male_knees.png';
import female_knees from '../assets/PNGs/female_knees.png';

//   SVGs  //
import mail from '../assets/SVGs/mail.svg';
// import HealthSVG from '../assets/SVGs/Health _Flatline.svg';
import FloatingSVG from '../assets/SVGs/FloatDoodle.svg';
import Doctors from '../assets/SVGs/Doctors.svg';


import { Container, Card } from 'reactstrap';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowaMale: false,
            isShowdiv: false,
            isModalOpen: false,
            show_pain_details: false,
        };

        this.toggleShowMale = this.toggleShowMale.bind(this);
        this.togglediv = this.togglediv.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggle_show_pain_details = this.toggle_show_pain_details.bind(this);

    }

    togglediv(show) {
        this.setState({ isShowdiv: show });
    }

    toggleShowMale(show) {
        this.setState({ isShowaMale: show });
        this.togglediv(true);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggle_show_pain_details() {
        this.setState({
            show_pain_details: !this.state.show_pain_details
        })
    }

    render() {

        const { isShowaMale, isShowdiv } = this.state;

        return (
            <Container className="py-5">

                <a href="mailto:whythishurts@med.in"><img className="contact-btn" src={mail} alt="Contact Us" /></a>

                {/* <img src={Doctors} className="mb-5 pb-3" alt="Doctors" width="70%"/> */}

                <div className="row">
                    <a href="#body-parts" className="btn col-6 bg-transparent" onClick={() => this.toggleShowMale(true)}  >
                        <img className="humanbody hov_effect" src={malebody_orange} alt="Male" />
                    </a>
                    <a href="#body-parts" className="btn col-6 bg-transparent" onClick={() => this.toggleShowMale(false)}  >
                        <img className="humanbody hov_effect" src={femalebody_orange} alt="Female" />
                    </a>
                </div>
                <br />

                {isShowdiv ? (<p>Tell us, where does it hurt.</p>) : (<p>Select your gender from above.</p>)}

                {/* Hidden div */}
                {isShowdiv && (
                    <Zoom center>
                        <div id="body-parts" className="row">
                            <div className="mx-auto">
                                <Card className="mx-auto w-75 bg-grey container">
                                    <div className="row">
                                        <Card className="option-card m-2">
                                            <a href={`${isShowaMale ? "/head-male" : "/head-female"}`} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_head : female_head}`} className="body-part" alt="Head" />
                                            </a>
                                            {/* <a onClick={() => history.push('/head-male')} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_head : female_head}`} className="body-part" alt="Head" />
                                            </a> */}
                                        </Card>
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_chest : female_chest}`} className="body-part" alt="Heart area or Chest" />
                                            </a>
                                        </Card>
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_neck : female_neck}`} className="body-part" alt="Neck" />
                                            </a>
                                        </Card>
                                    </div>

                                    <div className="row">
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_center_chest : female_center_chest}`} className="body-part" alt="Central Chest Area" />
                                            </a>
                                        </Card>
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_stomach : female_stomach}`} className="body-part" alt="Stomach Area" />
                                            </a>
                                        </Card>
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={`${isShowaMale ? male_hips : female_hips}`} className="body-part" alt="Hips" />
                                            </a>
                                        </Card>
                                    </div>

                                    <div className="row">
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={human_palm} className="body-part" alt="Hand" />
                                            </a>
                                        </Card>
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={human_finger} className="body-part" alt="Finger" />
                                            </a>
                                        </Card>
                                        <Card className="option-card m-2">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-4">
                                                <img src={human_foot} className="body-part" alt="Foot" />
                                            </a>
                                        </Card>
                                    </div>

                                    <div className="row">
                                        <Card className="option-card m-2 mx-auto">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-6">
                                                <img src={human_ankle} className="body-part" alt="Ankle" />
                                            </a>
                                        </Card>
                                        <Card className="option-card m-2 mx-auto">
                                            <a href="#painRemoval" onClick={this.toggleModal} className="btn bg-transparent col-6">
                                                <img src={`${isShowaMale ? male_knees : female_knees}`} className="body-part" alt="Knees" />
                                            </a>
                                        </Card>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Zoom>
                )}



                <Zoom center>
                    <div className="row">
                        <div className="col-12 col-lg p-5 text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut beatae quos impedit est repudiandae asperiores quia eum nobis, inventore officiis dolorum laudantium placeat eligendi, odio animi doloribus. Illo, vel.
                        </div>
                        <div className="col-12 col-lg p-5 text-left">
                            <img src='https://opendoodles.s3-us-west-1.amazonaws.com/levitate.gif' width="100%" alt="Floating Lady" align="middle" />
                        </div>
                    </div>
                </Zoom>
            </Container>
        )
    }
}

export default Home;