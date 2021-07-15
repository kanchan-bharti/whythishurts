import React from 'react';
import { Navbar, NavbarBrand,Jumbotron, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Container, Row} from 'react-bootstrap';
// Images:
import logo from '../assets/PNGs/logo_small.png';

import Doctors from '../assets/SVGs/Doctors.svg';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <Navbar dark className="bg-pink shadow p-3 rounded" expand="md">
                    <div className="container">
                        <NavbarBrand className="mx-auto p-0 pt-1" href="/">
                            <img src={logo} className="App-logo" alt="WhyThisHurtsLogo" />
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron className="mb-5 rounded inset-shadow jumbotron">
                    <Container>
                        <Row>
                            <div className="col-12 col-sm-6 align-self-center pl-0">
                                <h1>Why This Hurts?</h1>
                                <p className="text-justify px-lg-2 lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur officia ratione dicta ipsam aliquam cam natus iste quia animi repudiandae? Cum possimus ducimus vel expedita rem error quas exercitationem itaque.</p>
                            </div>
                            <img src={Doctors} className="col-12 col-sm-6 align-self-center pr-0" alt="" />
                            {/* <a href="#author-details" className="btn bg-transparent col-12 col-sm-6 align-self-center pr-0" onClick={this.toggleModal}>
                                <div className="row">
                                    <img className="profile hov_effect mx-auto" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Author" />
                                </div>
                                <div className="row">
                                    <p className="mx-auto text-">Lorem ipsum</p>
                                </div>
                            </a> */}
                        </Row>
                    </Container>
                </Jumbotron>
                <Modal id="author-details" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="mx-3" toggle={this.toggleModal}>About Me</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <p className="col-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod doloribus, enim reiciendis dicta cumque tempore consectetur quisquam obcaecati optio.</p>
                                <img className="profile mx-auto p-2" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Author" />
                                <hr />
                                <p className="text-justify p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, doloribus. Porro deleniti libero iusto. Nam voluptas quasi error soluta voluptate temporibus libero sequi inventore quod, et, reprehenderit repudiandae ex laboriosam?</p>
                            </Row>
                        </Container>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;