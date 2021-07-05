import React from 'react';
import { data } from './BackAcheDatabase';
import { Accordion, Card, Container, Row, Form, Button } from 'react-bootstrap';

import mail from '../../../assets/SVGs/mail.svg';
import FloatDoodle from '../../../assets/SVGs/FloatDoodle.svg';


class BackPainRemoval extends React.Component {
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
            <Container className="text-left">

                <a href="mailto:whythishurts@med.in"><img className="contact-btn" src={mail} alt="Contact Us" /></a>

                <Row>
                    <div className="col-12 col-md-5 col-lg-3 px-2">

                        <p className="mb-3 text-center apply-filters">Filters: </p>

                        {/*==============Filters======================*/}


                        <Accordion>
                            <Card className="accordion-card">
                                <Card.Header className="accordion-header">
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


                            <Card className="accordion-card">
                                <Card.Header className="accordion-header">
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
                                <p className="h2 mb-3">Why does my Back hurt?</p>
                                <Accordion className="accordion">
                                    {this.filteredArray.map((filtered, id) => (
                                        <Card className="text-left accordion-card">
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
                                                    {filtered.article &&
                                                        <p>{filtered.article}</p>
                                                    }
                                                    <div>
                                                        {filtered.causes &&
                                                            <div>
                                                                <p>The cause of this <span className="text-bold">{filtered.title}</span> are:</p>
                                                                <ul>
                                                                    {filtered.causes.map(point => (
                                                                        <li>{point}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        }
                                                        {
                                                            filtered.preventive_treatment.diagnosis && (
                                                                <div>
                                                                    <p className="h4">Diagnosis</p>
                                                                    <ul>
                                                                        {filtered.preventive_treatment.diagnosis.map(diagnosis => (
                                                                            <li>{diagnosis}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        }

                                                        {
                                                            filtered.preventive_treatment.treatments && (
                                                                <div>
                                                                    <p className="h4">Treatments</p>
                                                                    <ul>
                                                                        {filtered.preventive_treatment.treatments.map(treatment => (
                                                                            <li>{treatment}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        }

                                                        {/* <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a> */}

                                                    </div>
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
                                    <p className="h2">Causes of Back Ache</p>

                                    {/*=======Types of Headaches=============*/}
                                    <Accordion>
                                        {data[0].causes.map((maincause, id) => (
                                            <Card className=" accordion-card">
                                                <Card.Header className=" accordion-header">
                                                    <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-middle pointer d-flex justify-content-between pointer" eventKey={`${id}`}>
                                                        <span className="d-inline-block pt-1">{maincause.title}</span>
                                                        <span class="d-inline-block btn float-right">
                                                            <i class="fa fa-angle-down"></i>
                                                        </span>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                    <Card.Body>
                                                        {maincause.article &&
                                                            <p>{maincause.article}</p>
                                                        }
                                                        <div>
                                                            {maincause.causes &&
                                                                <div>
                                                                    <p>The cause of this <span className="text-bold">{maincause.title}</span> are:</p>
                                                                    <ul>
                                                                        {maincause.causes.map(point => (
                                                                            <li>{point}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            }
                                                            {
                                                                maincause.preventive_treatment.diagnosis && (
                                                                    <div>
                                                                        <p className="h4">Diagnosis</p>
                                                                        <ul>
                                                                            {maincause.preventive_treatment.diagnosis.map(diagnosis => (
                                                                                <li>{diagnosis}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )
                                                            }

                                                            {
                                                                maincause.preventive_treatment.treatments && (
                                                                    <div>
                                                                        <p className="h4">Treatments</p>
                                                                        <ul>
                                                                            {maincause.preventive_treatment.treatments.map(treatment => (
                                                                                <li>{treatment}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )
                                                            }

                                                            {/* <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a> */}

                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        ))}
                                    </Accordion>
                                    {/*=========================================*/}
                                </div>
                            )}

                        {/* Rare cases */}
                        <div>
                            <p className="h2">Rare causes of Back Ache</p>
                            <p>There are many other potential causes of back pain, but most of these are rare. Be sure to see your doctor if you experience regular back pain that does not go away.</p>
                            <p>
                                After ruling out the more common causes of back pain, your doctor will perform tests to determine if you have a rarer cause. These can include:
                            </p>
                            {/*=======Types of Headaches=============*/}
                            <Accordion>
                                {data[0].rare_causes.map((cause, id) => (
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
                                                {cause.article &&
                                                    <p>{cause.article}</p>
                                                }
                                                <div>
                                                    {cause.causes &&
                                                        <div>
                                                            <p>The causes of this <span className="text-bold">{cause.title}</span> are:</p>
                                                            <ul>
                                                                {cause.causes.map(point => (
                                                                    <li>{point}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    }
                                                    {cause.symptoms &&
                                                        <div>
                                                            <p className="h4">Symptoms</p>
                                                            <ul>
                                                                {cause.symptoms.map(symptom => (
                                                                    <li>{symptom}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    }
                                                    {
                                                        cause.preventive_treatment.diagnosis && (
                                                            <div>
                                                                <p className="h4">Diagnosis</p>
                                                                <ul>
                                                                    {cause.preventive_treatment.diagnosis.map(diagnosis => (
                                                                        <li>{diagnosis}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )
                                                    }

                                                    {
                                                        cause.preventive_treatment.treatments && (
                                                            <div>
                                                                <p className="h4">Treatments</p>
                                                                <ul>
                                                                    {cause.preventive_treatment.treatments.map(treatment => (
                                                                        <li>{treatment}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )
                                                    }

                                                    {/* <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a> */}

                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                            {/*=========================================*/}
                        </div>
                    </div>


                    <div className="col-12 col-lg-3 ">
                        <p className="h2">Overview</p>
                        <p>The most common causes of lower back pain are strain and problems with back structures.</p>

                    </div>
                </Row>
            </Container >

        )
    }
}

export default BackPainRemoval;