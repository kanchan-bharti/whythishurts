import React from 'react';
import { data } from './HeadacheDataBase';
import { Accordion, Card, Container, Row, Form, Button } from 'react-bootstrap';
import { CardHeader } from 'reactstrap';


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
                <Row>
                    <div className="col-12 col-md-4 col-lg-3 text-left px-2">
                        {/*===============OVERVIEW=================*/}
                        <Accordion id="Overview-Accordion">
                            <Card className="bg-transparent accordion-card">
                                <Card.Header className="bg-transparent accordion-header">
                                    <Accordion.Toggle as={Card.Header} className="pointer accordion-toggle" eventKey="0">
                                        Overview
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" className="accordion-collapse bg-transparent">
                                    <Card.Body>
                                        <p className="lead">
                                            A headache is a very common condition that causes pain and discomfort in the head, scalp, or neck. It’s estimated that 7 in 10 people have at least one headache each year.
                                        </p>
                                        <p className="lead">
                                            Headaches can sometimes be mild, but in many cases, they can cause severe pain that makes it difficult to concentrate at work and perform other daily activities. In fact, approximately 45 million Americans frequently have severe headaches that can be disabling. Luckily, most headaches can be managed with medication and lifestyle changes.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        {/*=========================================*/}

                        <p className="display-4 my-3">Apply Filters: </p>

                        {/*==============Filters======================*/}


                        <Accordion variant="primary">
                            <Card className="bg-transparent bg-card">
                                <Card.Header className="bg-transparent accordion-header">
                                    <Accordion.Toggle as={Card.Header} className="pointer accordion-toggle" eventKey="PainDescription">
                                        Pain Description:
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-collapse bg-transparent" eventKey="PainDescription">
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


                            <Card className="bg-transparent bg-card">
                                <Card.Header className="bg-transparent accordion-header">
                                    <Accordion.Toggle as={Card.Header} className="pointer accordion-toggle" eventKey="PainWith">
                                        With Pain:
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-collapse bg-transparent" eventKey="PainWith">
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

                    <div className="col-12 col-md-8 col-lg-6 text-left px-lg-4 py-3 py-lg-0">

                        {this.state.filtered ? (
                            <div>
                                <p className="h2">Your Headache can be:</p>
                                <Accordion>
                                    {this.filteredArray.map((filtered, id) => (
                                        <Card className="bg-transparent bg-card">
                                            <CardHeader>
                                                {/* {console.log("article 2: ", filtered.article, "id: ", id)} */}
                                                <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" eventKey={`${id}`}>
                                                    {filtered.title}
                                                </Accordion.Toggle>
                                            </CardHeader>
                                            <Accordion.Collapse className="accordion-collapse bg-transparent" eventKey={`${id}`}>
                                                <Card.Body>
                                                    <p className="lead">{filtered.article}</p>
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
                                    <h2>Headache types</h2>
                                    <p className="lead">
                                        Several different headache types exist. Examples of these headache types include:
                                    </p>
                                    <hr />
                                    {/*=======Types of Headaches=============*/}
                                    <Accordion>
                                        {data[0].types.map((type, id) => (
                                            <Card className="bg-transparent bg-card">
                                                <CardHeader>
                                                    <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" eventKey={`${id}`}>
                                                        {type.title}
                                                    </Accordion.Toggle>
                                                </CardHeader>
                                                <Accordion.Collapse className="accordion-collapse bg-transparent" eventKey={`${id}`}>
                                                    <Card.Body className="lead">{type.article}</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        ))}
                                    </Accordion>
                                    {/*=========================================*/}
                                </div>
                            )}

                        {/* Common Causes and their treatments */}

                        {

                        }


                        {data[0].causes.map(item => (
                            <div>
                                <div className="p-0 mt-3 text-left bg-transparent pb-4 ">
                                    <h2>{item.title}</h2>
                                </div>
                                <p className="pb-4">{item.article}</p>
                                <Accordion>
                                    {item.subtitle.map((subItem, id) => (
                                        <Card className="bg-transparent bg-card">
                                            <CardHeader>
                                                <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" size="sm" eventKey={`${id}`}>
                                                    {subItem.title}
                                                </Accordion.Toggle>
                                            </CardHeader>
                                            <Accordion.Collapse className="accordion-collapse bg-transparent" eventKey={`${id}`}>
                                                <Card.Body >{subItem.article}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>


                    <div className="col-12 col-lg-3 text-left">
                        {data[0].trivia.map(trivia => (
                            <div>
                                <h2>{trivia.title}</h2>
                                <p className="lead text-justify">{trivia.article}</p>
                                <Accordion>
                                    {trivia.subtrivia.map((subTrivia, id) => (
                                        <Card className="bg-transparent bg-card">
                                            <CardHeader>
                                                <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" size="sm" eventKey={`${id}`}>
                                                    {subTrivia.title}
                                                </Accordion.Toggle>
                                            </CardHeader>
                                            <Accordion.Collapse className="accordion-collapse bg-transparent" eventKey={`${id}`}>
                                                <Card.Body className="px-4 lead">
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
                <Row className="col-12 text-left mx-auto" id="when-to-see-doctor">
                    <div>
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