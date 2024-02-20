import React from "react";
import "../StyleSheets/StyleSheet.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import image from "../Images/loder.gif";


const AppData = ({ productData }) => {
    return (
        <>
        <Container className="m-7">
            <Row className="m-2 p-2">
            {Array.isArray(productData)  && productData.length > 0 ? ( 
                productData.map(data => {
                return (
                    <Col key={data.id}>
                    <Card style={{ width: '20rem', height: '35rem' }} className="mt-3">
                        <Card.Img variant="top" src={data.images[0]} alt="item" width={300} height={300} />
                        <Card.Body>
                        <div className="mb-2" style={{ width: '18rem', height: '10rem' }}>
                            <Card.Text>
                            <p>{`$ ${data.price}`}</p>
                            <p>{data.title}</p>
                            </Card.Text>
                        </div>
                        <div>
                            <Button variant="primary">
                            <Link to={`/product/${data.id}`} className="btlink">View More Details</Link>
                            </Button>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                );
                })
            ) : (
                <div style={{position:"absolute", top:"15%",left:"25%"}}>
                <img src={image} alt="item" />
            </div>
            )}
            </Row>
        </Container>
        </>
    );
};

export default AppData;