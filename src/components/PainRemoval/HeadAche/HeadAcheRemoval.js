import React from 'react';
import { data } from './HeadAcheDataBase';
import { Accordion, Card, Container, Row, Form, Button } from 'react-bootstrap';

import mail from '../../../assets/SVGs/mail.svg';
import FloatDoodle from '../../../assets/SVGs/FloatDoodle.svg';


class HeadPainRemoval extends React.Component {
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

        data[0].types.map(type => {
            for (const pain of type.symptoms[0].pain) {
                if (this.state.filters.indexOf(pain) > -1 && !this.filteredArray.includes(type)) {
                    this.filteredArray.push(type);
                }
            }
            for (const withpain of type.symptoms[0].with) {
                if (this.state.filters.indexOf(withpain) > -1 && !this.filteredArray.includes(type)) {
                    this.filteredArray.push(type);
                }
            }
            return this.filteredArray.size;
        })

        return (
            <Container>
                <a href="mailto:whythishurts@med.in"><img className="contact-btn" src={mail} alt="Contact Us" /></a>

                <Row>
                    <div className="col-12 col-md-5 col-lg-3 text-justify px-2">

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
                                                data[0].types.map(type => (
                                                    <>
                                                        {type.symptoms[0].pain.map((paintype) => (
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
                                        <span className="d-inline-block pt-1">With Pain:</span>
                                        <span class="d-inline-block btn float-right">
                                            <i class="fa fa-angle-down"></i>
                                        </span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-collapse " eventKey="PainWith">
                                    <Card.Body>
                                        <Form onSubmit={this.painDesFilter}>
                                            {
                                                data[0].types.map(type => (
                                                    <>
                                                        {type.symptoms[0].with.filter(withpain => { //Filtering out all "withpain" which are empty string
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

                    <div className="col-12 col-md-7 col-lg-6 text-justify px-lg-4 pb-3 py-lg-0">
                        {this.state.filtered ? (
                            <div>
                                <p className="h2 mb-3">Your Headache can be:</p>
                                <Accordion className="accordion">
                                    {this.filteredArray.map((filtered, id) => (
                                        <Card className=" accordion-card">
                                            <Card.Header className=" accordion-header">
                                                {/* {console.log("article 2: ", filtered.article, "id: ", id)} */}
                                                <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-result pointer d-flex justify-content-between pointer" eventKey={`${id}`}>
                                                    <span className="d-inline-block pt-1">{filtered.title}</span>
                                                    <span class="d-inline-block btn float-right">
                                                        <i class="fa fa-angle-down"></i>
                                                    </span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                <Card.Body>
                                                    <p>{filtered.article}</p>
                                                    <div>
                                                        {filtered.used_when &&
                                                            <div>
                                                                <p className="h4">Preventive Treatments</p>
                                                                <p>Used when {filtered.used_when} :</p>
                                                            </div>
                                                        }
                                                        <ul>
                                                            {filtered.treatments.map(treatment => (
                                                                <div>
                                                                    {treatment &&
                                                                        <li>
                                                                            {treatment}
                                                                        </li>
                                                                    }
                                                                </div>

                                                            ))}
                                                        </ul>
                                                        <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a>

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
                                    <p className="h2 mb-3">Overview</p>
                                    <p className="">
                                        A ache is a very common condition that causes pain and discomfort in the head, scalp, or neck. It’s estimated that 7 in 10 people have at least one headache each year.
                                    </p>
                                    <p className="">
                                        Headaches can sometimes be mild, but in many cases, they can cause severe pain that makes it difficult to concentrate at work and perform other daily activities. In fact, approximately 45 million Americans frequently have severe headaches that can be disabling. Luckily, most headaches can be managed with medication and lifestyle changes.
                                    </p>

                                    <p className="h2 py-3">Headache types</p>
                                    <p className="">
                                        Several different headache types exist. Examples of these headache types include:
                                    </p>
                                    {/*=======Types of Headaches=============*/}
                                    <Accordion>
                                        {data[0].types.map((type, id) => (
                                            <Card className=" accordion-card">
                                                <Card.Header className=" accordion-header">
                                                    <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-middle pointer d-flex justify-content-between pointer" eventKey={`${id}`}>
                                                        <span className="d-inline-block pt-1">{type.title}</span>
                                                        <span class="d-inline-block btn float-right">
                                                            <i class="fa fa-angle-down"></i>
                                                        </span>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                    <Card.Body>
                                                        <p>{type.article}</p>
                                                        <div>
                                                            {type.used_when &&
                                                                <div>
                                                                    <p className="h4">Preventive Treatments</p>
                                                                    <p>Used when {type.used_when} :</p>
                                                                </div>
                                                            }
                                                            <ul>
                                                                {type.treatments.map(treatment => (
                                                                    <div>
                                                                        {treatment &&
                                                                            <li>
                                                                                {treatment}
                                                                            </li>
                                                                        }
                                                                    </div>

                                                                ))}
                                                            </ul>
                                                            <a href="#when-to-see-doctor" className="a-link">When to see a doctor?</a>

                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        ))}
                                    </Accordion>
                                    {/*=========================================*/}
                                </div>
                            )}

                        {/* Common Causes and their treatments */}

                        <div className="">
                            <p className="h2 py-2">Common Causes</p>
                            <p className="h4">There are some common causes of Headache:</p>
                            <ul>
                                {data[0].diagnosis[0].common_causes.map(common_causes => (
                                    <li>{`${common_causes}`}</li>
                                ))}
                            </ul>
                            <p>{data[0].diagnosis[0].cure[0].point} <span className="lead font-weight-bold">{data[0].diagnosis[0].cure[0].subpoint}</span></p>
                            <Accordion>
                                <Card className=" accordion-card">
                                    <Card.Header className=" accordion-header">
                                        <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-middle pointer" size="sm" eventKey="common-treatments-when-non-working-medication">
                                            If medications aren’t working, there are several other remedies that can help treat headaches:
                                            <span class="d-inline-block btn float-right">
                                                <i class="fa fa-angle-down"></i>
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse className="accordion-collapse " eventKey="common-treatments-when-non-working-medication">
                                        <Card.Body >
                                            <ul>
                                                {data[0].diagnosis[0].cure[0].helping_in_treatment.map(treatments => (
                                                    <li>{`${treatments}`}</li>
                                                ))}
                                            </ul></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>


                        </div>


                        {data[0].causes.map(item => (
                            <div>
                                <div className="p-0 text-justify bg-transparent ">
                                    <p className="h2 py-2">{item.title}</p>
                                </div>
                                <p className="">{item.article}</p>
                                <Accordion>
                                    {item.subtitle.map((subItem, id) => (
                                        <Card className=" accordion-card">
                                            <Card.Header className=" accordion-header">
                                                <Accordion.Toggle as={Card.Header} className="accordion-toggle accordion-toggle-middle pointer d-flex justify-content-between" size="sm" eventKey={`${id}`}>
                                                    {/* <div className="d-flex flex-row"> */}
                                                    <span className="d-inline-block pt-1">{subItem.title}</span>
                                                    <span class="d-inline-block btn float-right">
                                                        <i class="fa fa-angle-down"></i>
                                                    </span>
                                                    {/* </div> */}
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                <Card.Body >{subItem.article}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>


                    <div className="col-12 col-lg-3 text-justify">
                        {data[0].trivia.map(trivia => (
                            <div>
                                <p className="h2 mb-3">{trivia.title}</p>
                                <p className="text-justify">{trivia.article}</p>
                                <Accordion>
                                    {trivia.subtrivia.map((subTrivia, id) => (
                                        <Card className=" accordion-card">
                                            <Card.Header className="accordion-header">
                                                <Accordion.Toggle as={Card.Header} className="accordion-toggle pointer d-flex justify-content-between" size="sm" eventKey={`${id}`}>
                                                    <span className="d-inline-block pt-1">{subTrivia.title}</span>
                                                    <span class="d-inline-block btn float-right">
                                                        <i class="fa fa-angle-down"></i>
                                                    </span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse className="accordion-collapse " eventKey={`${id}`}>
                                                <Card.Body className="px-4">
                                                    {subTrivia.article.map(
                                                        item => (
                                                            <div>
                                                                <p>
                                                                    {item.point}
                                                                </p>
                                                                <ul>
                                                                    {item.these_include.map(element => (
                                                                        <div>
                                                                            {element &&
                                                                                <li>
                                                                                    {element}
                                                                                </li>
                                                                            }
                                                                        </div>
                                                                    ))}

                                                                </ul>

                                                            </div>
                                                        )
                                                    )}

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                </Accordion>

                            </div>
                        ))}

                    </div>
                </Row>
                <Row className="text-justify mx-0" >
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
                        <p>A doctor may also order diagnostic tests if they suspect that a certain medical condition is causing the headaches. These tests might include:</p>
                        <ul>
                            {
                                data[0].diagnosis[1].when_to_see_doctor[0].tests.map(test => (
                                    <li>
                                        <p className="h5">{test.title}</p>
                                        <p>{test.article}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container >

        )
    }
}

export default HeadPainRemoval;