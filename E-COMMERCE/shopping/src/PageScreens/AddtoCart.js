import React, { useContext } from 'react';
import HeaderScreen from './HeaderScreen';
import { CartContext } from './NavigationStack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AddtoCart = () => {
    const cartItem = useContext(CartContext);

    return (

    <>  
    <HeaderScreen />
        <div style={{display:"flex", flexDirection:"row", justifyContent:"fleex-start", margin:"10px",gap:"10px"}}>
            
                {cartItem.cart.map(item => (
                    <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.images[0]} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            <p>Category : {item.category}</p>
                            <p>Description : {item.description}</p>
                            <p>Price : {item.price}</p>
                        </Card.Text>
                        <Button variant="primary">Remove</Button>
                    </Card.Body>
                    </Card>
                ))}
        </div>

    </>
    );
}

export default AddtoCart;


