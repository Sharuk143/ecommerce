import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import item1 from '../Images/blogimage.jpg'
import item2 from "../Images/blogimage2.jpg"
import item3 from "../Images/Shopping-blogger-template.jpg"
import "./BlockStyle.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const CarouselComponent = () => {
    return (
        <>
            <div>
                <Carousel style={{height:400,width:"100%",backgroundColor:"red"}} >
                    <Carousel.Item interval={1000}>
                        <img src={item1} alt="prouct"  width={"100%"} height={400}/>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={item3} alt="prouct"  width={"100%"} height={400}/>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item1} alt="prouct"  width={"100%"}height={400}/>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={item3} alt="prouct"  width={"100%"} height={400}/>

                    </Carousel.Item>
                </Carousel>

            </div>

            <div className='area'>
                <div style={{margin:"10px"}}>
                    <Card style={{ width: '38rem', height:'36rem', backgroundColor:"gainsboro"}}>
                    <Card.Img variant="top" src={item2} className='Imwh'/>
                    <Card.Body>
                        <Card.Title>Start selling with Shopify today</Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>
                        For ecommerce entrepreneurs who want to make the most of their online business, 
                        high-quality content full of marketing tips, success stories, lessons learned, 
                        and the latest ecommerce trends is essential.

                        If you’re new to the world of ecommerce, you’re likely hustling to learn about product 
                        sourcing, inventory management, marketing automation, running ads, and customer service
                        optimization. Thankfully, the internet is full of wisdom from seasoned experts with proven success. 
                        Let’s look at 14 top ecommerce blogs to check out on your way to running a successful online store.
                        </Card.Text>
                        <Button variant="primary" className='batn'>Start Now</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div style={{margin:"10px"}}>
                    <Card style={{ width: '38rem', height:'36rem', backgroundColor:"gainsboro"}}>
                    <Card.Img variant="top" src={item2} className='Imwh'/>
                    <Card.Body>
                        <Card.Title>Start selling with Shopify today</Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>
                        For ecommerce entrepreneurs who want to make the most of their online business, 
                        high-quality content full of marketing tips, success stories, lessons learned, 
                        and the latest ecommerce trends is essential.

                        If you’re new to the world of ecommerce, you’re likely hustling to learn about product 
                        sourcing, inventory management, marketing automation, running ads, and customer service
                        optimization. Thankfully, the internet is full of wisdom from seasoned experts with proven success. 
                        Let’s look at 14 top ecommerce blogs to check out on your way to running a successful online store.
                        </Card.Text>
                        <Button variant="primary" className='batn'>Start Now</Button>
                    </Card.Body>
                    </Card>
                </div>


                <div style={{margin:"10px"}}>
                    <Card style={{ width: '38rem', height:'36rem', backgroundColor:"gainsboro"}}>
                    <Card.Img variant="top" src={item2} className='Imwh'/>
                    <Card.Body>
                        <Card.Title>Start selling with Shopify today</Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>
                        For ecommerce entrepreneurs who want to make the most of their online business, 
                        high-quality content full of marketing tips, success stories, lessons learned, 
                        and the latest ecommerce trends is essential.

                        If you’re new to the world of ecommerce, you’re likely hustling to learn about product 
                        sourcing, inventory management, marketing automation, running ads, and customer service
                        optimization. Thankfully, the internet is full of wisdom from seasoned experts with proven success. 
                        Let’s look at 14 top ecommerce blogs to check out on your way to running a successful online store.
                        </Card.Text>
                        <Button variant="primary" className='batn'>Start Now</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div style={{margin:"10px"}}>
                    <Card style={{ width: '38rem', height:'36rem', backgroundColor:"gainsboro"}}>
                    <Card.Img variant="top" src={item2} className='Imwh'/>
                    <Card.Body>
                        <Card.Title>Start selling with Shopify today</Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>
                        For ecommerce entrepreneurs who want to make the most of their online business, 
                        high-quality content full of marketing tips, success stories, lessons learned, 
                        and the latest ecommerce trends is essential.

                        If you’re new to the world of ecommerce, you’re likely hustling to learn about product 
                        sourcing, inventory management, marketing automation, running ads, and customer service
                        optimization. Thankfully, the internet is full of wisdom from seasoned experts with proven success. 
                        Let’s look at 14 top ecommerce blogs to check out on your way to running a successful online store.
                        </Card.Text>
                        <Button variant="primary" className='batn'>Start Now</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div> 
        
        </>
    )
}

export default CarouselComponent
