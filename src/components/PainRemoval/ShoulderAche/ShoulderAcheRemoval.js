import React from 'react';
import { data } from './ShoulderAcheDataBase';
import { Accordion, Card, Container, Row, Form, Button } from 'react-bootstrap';

import mail from '../../../assets/SVGs/mail.svg';
import FloatDoodle from '../../../assets/SVGs/FloatDoodle.svg';


class ShoulderAcheRemoval extends React.Component {
    constructor() {
        super();
        this.state = {
            filtered: false,
            filters: []
        };
        this.filteredArray = [];
    }

    painDesFilter = (e) => {
        e.preventDefault();
        const checkboxes = e.currentTarget.getElementsByTagName("input");
        const filters = [];
        Object.values(checkboxes).map(checkbox => {
            if (checkbox.checked && !filters.includes(checkbox.value)) {
                filters.push(checkbox.value);
                this.setState({ filtered: true })
            }
        });
        this.setState({ filters });
    }

    render() {

        let temp_filtersArray = [];
        let id = 0;

        data[0].causes.map(cause => {
            for (const pain of cause.symptoms[0].pain) {
                if (this.state.filters.indexOf(pain) > -1 && !this.filteredArray.includes(cause)) {
                    this.filteredArray.push(cause);
                }
            }
            for (const withpain of cause.symptoms[0].with) {
                if (this.state.filters.indexOf(withpain) > -1 && !this.filteredArray.includes(cause)) {
                    this.filteredArray.push(cause);
                }
            }
            return this.filteredArray.size;
        })

        return (
            <Container  className="text-left">

                <a href="mailto:whythishurts@med.in"><img className="contact-btn" src={mail} alt="Contact Us" /></a>

                <Row>
                    <div className="col-12 col-md-5 col-lg-3  px-2">

                        <p className="mb-3 text-center apply-filters">Filters: </p>

                        {/*==============Filters======================*/}


                        <Accordion>
                            <Card className=" accordion-card">
                                <Card.Header className=" accordion-header">
                                    <Accordion.Toggle as={Card.Header} className="pointer accordion-toggle d-flex justify-content-between" eventKey="PainDescription">
                                        <span className="d-inline-block pt-1">Pain Description: </span>
                                        <span class="d-inline-block btn float-right">
                                            <i class="fa fa-angle-down"></i>
                                        </span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-collapse " eventKey="PainDescription">
                                    <Card.Body>
                                        <Form onSubmit={this.painDesFilter}>
                                            {
                                                data[0].causes.map(cause => (
                                                    <>
                                                        {cause.symptoms[0].pain.map((paintype) => (
                                                            <Form.Group controlID={`paintype-${id}`}>
                                                                {temp_filtersArray.includes(paintype) ? (<div></div>) : (
                                                                    <div className="checkboxes">
                                                                        <div className="d-none">{id = id + 1}</div>
                                                                        <Form.Check
                                                                            name={`symptoms-pain${id}`}
                                                                            id={`symptoms-pain-${id}`}
                                                                            type="checkbox"
                                                                            label={paintype}
                                                                            value={paintype}
                                                                        />
                                                                        <hr />
                                                                        <div className="d-none">{temp_filtersArray.push(paintype)}</div>
                                                                    </div>
                                                                )}
                                                            </Form.Group>
                                                        ))}
                                                    </>
                                                ))
                                            }
                                            {
                                                <div className="d-none">{temp_filtersArray = []}</div>
                                            }
                                            <Button id="submitButton" variant="secondary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card className=" accordion-card">
                                <Card.Header className=" accordion-header">
                                    <Accordion.Toggle as={Card.Header} className="pointer accordion-toggle d-flex justify-content-between" eventKey="PainWith">
                                        <span className="d-inline-block pt-1">With Pain: </span>
                                        <span class="d-inline-block btn float-right">
                                            <i class="fa fa-angle-down"></i>
                                        </span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-collapse " eventKey="PainWith">
                                    <Card.Body>
                                        <Form onSubmit={this.painDesFilter}>
                                            {
                                                data[0].causes.map(cause => (
                                                    <>
                                                        {cause.symptoms[0].with.filter(withpain => { //Filtering out all "withpain" which are empty string
                                                            if (withpain === '') {
                                                                return false;
                                                            }
                                                            return true
                                                        })
                                                            .map((withpain) => (
                                                                <Form.Group controlID={`withpain-${id}`}>
                                                                    {temp_filtersArray.includes(withpain) ? (<div></div>) : (
                                                                        <div className="checkboxes">

                                                                            <div className="d-none">{id = id + 1}</div>
                                                                            <Form.Check
                                                                                name={`symptoms-pain${id}`}
                                                                                id={`symptoms-pain-${id}`}
                                                                                type="checkbox"
                                                                                label={withpain}
                                                                                value={withpain}
                                                                            />
                                                                            <hr />
                                                                            <div className="d-none">{temp_filtersArray.push(withpain)}</div>
                                                                        </div>
                                                                    )}
                                                                </Form.Group>
                                                            ))}
                                                    </>
                                                ))
                                            }
                                            {
                                                <div className="d-none">{temp_filtersArray = []}</div>
                                            }
                                            <Button id="submitButton" variant="secondary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>
                        <img src={FloatDoodle} width="100%" className="my-5" />

                        {/*=========================================*/}
                    </div>

                    <div className="col-12 col-md-7 col-lg-6  px-lg-4 pb-3 py-lg-0">
                        {this.state.filtered ? (
                            <div>
                                <p className="h2 mb-3">Why does my Shoulder hurt?</p>
                                <Accordion className="accordion">
                                    {this.filteredArray.map((filtered, id) => (
                                        <Card className=" accordion-card">
                                            <Card.Header className=" accordion-header">
                                                <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-result pointer d-flex justify-content-between pointer" eventKey={`${id}`}>
                                                    <span className="d-inline-block pt-1">{filtered.title}</span>
                                                    <span class="d-inline-block btn float-right">
                                                        <i class="fa fa-angle-down"></i>
                                                    </span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                <Card.Body>
                                                    {
                                                        filtered.article && <p>{filtered.article}</p>
                                                    }
                                                    <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a>

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                    {/* {filtered_types} */}
                                </Accordion>
                            </div>
                        )
                            :
                            (
                                <div>


                                    <p className="h2">Causes of Shoulder Pain</p>

                                    {/*=======Types of Headaches=============*/}
                                    <Accordion>
                                        {data[0].causes.map((cause, id) => (
                                            <Card className=" accordion-card">
                                                <Card.Header className=" accordion-header">
                                                    <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-middle pointer d-flex justify-content-between pointer" eventKey={`${id}`}>
                                                        <span className="d-inline-block pt-1">{cause.title}</span>
                                                        <span class="d-inline-block btn float-right">
                                                            <i class="fa fa-angle-down"></i>
                                                        </span>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                    <Card.Body>
                                                        {
                                                            cause.article && <p>{cause.article}</p>
                                                        }
                                                        <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        ))}
                                    </Accordion>
                                    {/*=========================================*/}

                                </div>
                            )}


                    </div>


                    <div className="col-12 col-lg-3 ">
                        <p className="h2">Overview</p>
                        <p>
                            Shoulder pain can be caused by a variety of reasons. The most common causes are injuries due to sports activities, manual labour or repetitive movement. Certain diseases that affect the cervical spine, liver, heart or gallbladder can bring about pain that travels to the shoulder.
                        </p>
                        <p className="h4">Diagnosis</p>
                        <p>Doctors usually check for tenderness and swelling and will assess the range of motion and joint stability. Doctors also use x-rays and MRIs to produce a detailed image of the shoulder to help with the diagnosis.</p>
                        <p className="h5">Common Causes:</p>
                        <ul>
                            {data[0].diagnosis[0].common_causes.map(common_causes => (
                                <li>{common_causes}</li>
                            ))}
                        </ul>
                        <p>{data[0].diagnosis[0].treatment_options[0].point}</p>
                        <ul>
                            {data[0].diagnosis[0].treatment_options[0].helping_in_treatment.map(point => (
                                <li>{point}</li>
                            ))}
                        </ul>
                    </div>
                </Row>
                <Row className=" mx-0" >
                    <div id="when-to-see-doctor" className="p-4 mx-0 my-4">
                        <p className="h4">When to see a doctor?</p>
                        <p>{data[0].diagnosis[1].when_to_see_doctor[0].point}</p>
                        <ul>
                            {
                                data[0].diagnosis[1].when_to_see_doctor[0].pain_with.map(painwith => (
                                    <li>{`${painwith}`}</li>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container >

        )
    }
}

export default ShoulderAcheRemoval;