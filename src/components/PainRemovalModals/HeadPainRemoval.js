import React from 'react';
import { data } from './DataBase';
import { Accordion, Card, Container, Row } from 'react-bootstrap';
import { CardHeader } from 'reactstrap';

class HeadPainRemoval extends React.Component {

    render() {

        return (
            <Container>
                <Row>
                    <div className="col-12 col-md-3 text-justify px-2">
                        {/*===============OVERVIEW=================*/}
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} className="pointer" eventKey="0">
                                        Overview
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
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

                        <h2>Headache types</h2>
                        <p className="lead">
                            Several different headache types exist. Examples of these headache types include:
                        </p>
                        <hr />
                        {/*=======Types of Headaches=============*/}
                        <Accordion>
                            {data[0].types.map((type, id) => (
                                <Card>
                                    <CardHeader>
                                        <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" size="sm" eventKey={`${id}`}>
                                            {type.title}
                                        </Accordion.Toggle>
                                    </CardHeader>
                                    <Accordion.Collapse eventKey={`${id}`}>
                                        <Card.Body className="lead">{type.article}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            ))}
                        </Accordion>
                        {/*=========================================*/}
                    </div>

                    <div className="col-12 col-md-6 text-left px-lg-4 py-3 py-lg-0">

                        {data[0].causes.map(item => (
                            <div>
                                <div className="p-0 text-left bg-transparent pb-4 ">
                                    <h2>{item.title}</h2>
                                </div>
                                <p className="pb-4">{item.article}</p>
                                <Accordion>
                                    {item.subtitle.map((subItem, id) => (
                                        <Card>
                                            <CardHeader>
                                                <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" size="sm" eventKey={`${id}`}>
                                                    {subItem.title}
                                                </Accordion.Toggle>
                                            </CardHeader>
                                            <Accordion.Collapse eventKey={`${id}`}>
                                                <Card.Body className="px-4">{subItem.article}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                </Accordion>
                                {/* {item.subtitle.map(subItem => (
                                    <div>
                                        <div className="p-0 btn-light text-left bg-transparent pb-4">
                                            <h5>{subItem.title}</h5>
                                        </div>
                                        <p className="pb-4">{subItem.article}</p>
                                    </div>
                                ))} */}
                            </div>

                        ))}
                    </div>


                    <div className="col-12 col-md-3 text-left">
                        {data[0].trivia.map(trivia => (
                            <div>
                                <h2>{trivia.title}</h2>
                                <p className="lead text-justify">{trivia.article}</p>
                                <Accordion>
                                    {trivia.subtitle.map((subTrivia,id) => (
                                        <Card>
                                            <CardHeader>
                                                <Accordion.Toggle as={Card.Header} className="bg-transparent pointer" size="sm" eventKey={`${id}`}>
                                                    {subTrivia.title}
                                                </Accordion.Toggle>
                                            </CardHeader>
                                            <Accordion.Collapse eventKey={`${id}`}>
                                                <Card.Body className="px-4 lead">{subTrivia.article}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                </Accordion>

                            </div>
                        ))}

                    </div>
                </Row>
            </Container >

        )
    }
}

export default HeadPainRemoval;