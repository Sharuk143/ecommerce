import React from 'react'
import HeaderScreen from './HeaderScreen';
import item2 from '../Images/blogimage2.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const AboutScreen = () => {
    return (
        <>
            <HeaderScreen/>
            <div style={{margin:"10px"}}>
                    <Card style={{ width: '93rem', height:'36rem', backgroundColor:"gainsboro"}}>
                    <Card.Img variant="top" src={item2} className='Imwh'/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>About Ecommerce</Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>
                            E-commerce (electronic commerce) is the buying and selling of goods and 
                            services, or the transmitting of funds or data, over an electronic network,
                            primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.
                        </Card.Text>
                        <Button variant="primary" style={{marginLeft:"45%"}}>Start Now</Button>
                    </Card.Body>
                    </Card>
                </div>
        </>
    )
}

export default AboutScreen
