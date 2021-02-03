import React from 'react';
import { Navbar, NavbarBrand,Jumbotron, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from 'reactstrap';

// Images:
import logo from '../assets/logo.png';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isNavOpen: false,
            isModalOpen: false
        };
        // this.toggleNav = this.toggleNav.bind(this);
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
                        {/* <NavbarToggler onclick={this.toggleNav} /> */}
                        <NavbarBrand className="mx-auto p-0 pt-1" href="/">
                            <img src={logo} className="App-logo" alt="WhyThisHurts Logo" />
                        </NavbarBrand>
                        {/* <Collapse isOpen={this.state.isNavOpen} navbar> */}
                        {/* <Nav navbar>
                            <NavLink className="nav-link" to="/aboutme">
                                <span className="fa fa-into fa-lg"></span> About Me
                            </NavLink>
                        </Nav> */}
                        {/* </Collapse> */}
                    </div>
                </Navbar>
                <Jumbotron className="mb-5 rounded inset-shadow jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Why This Hurts?</h1>
                                <p className="text-justify lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur officia ratione dicta ipsam aliquam cam natus iste quia animi repudiandae? Cum possimus ducimus vel expedita rem error quas exercitationem itaque.</p>
                            </div>
                            <a href="#author-details" className="btn bg-transparent col-12 col-sm-6" onClick={this.toggleModal}>
                                <div className="row">
                                    <img className="profile mx-auto" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Author" />
                                </div>
                                <div className="row">
                                    <p className="mx-auto text-">Lorem ipsum</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </Jumbotron>
                <Modal id="author-details" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="mx-3" toggle={this.toggleModal}>About Me</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <p className="col-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod doloribus, enim reiciendis dicta cumque tempore consectetur quisquam obcaecati optio.</p>
                                <img className="profile mx-auto p-2" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Author" />
                                <hr />
                                <p className="text-justify p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, doloribus. Porro deleniti libero iusto. Nam voluptas quasi error soluta voluptate temporibus libero sequi inventore quod, et, reprehenderit repudiandae ex laboriosam?</p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;