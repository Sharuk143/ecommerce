import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./BlockStyle.css";
import image from "../Images/loder-unscreen (1).gif"
import { CartContext,CartCounter } from './NavigationStack';
import axios from 'axios'
import HeaderScreen from './HeaderScreen';

const ProductDetail = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const datafromUrl = useParams();

    const cartConsumer = useContext(CartContext);
    const cartIncrement = useContext(CartCounter);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${datafromUrl.id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                setLoading(false);
            });
    }, [datafromUrl.id]);

    const handleAddToCart = () => {
    cartConsumer.addItemsToCart(product);
    cartIncrement.IncrementCount(cartIncrement.cartCount);
    }


    return (
        <>
        <HeaderScreen/>
            {loading ? (
                <div className='loader'>
                    <img src={image} alt="item" />
                </div>
            ) : (
                <div className='block'>
                    <Card style={{ width: '50rem', height: '38rem', backgroundColor: "gainsboro" }}>
                        <Card.Img
                            variant="top"
                            src={product.images && product.images.length > 0 ? product.images[0] : ''}
                            className='Imwh'
                        />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <p>Category: {product.category || 'N/A'}</p>
                                <p>Description: {product.description || 'N/A'}</p>
                                <p>Price: ${product.price || 'N/A'}</p>
                            </Card.Text>
                            <Button variant="primary" className='batn' onClick={handleAddToCart}>Add to Cart</Button>
                            <Button variant="success">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </>
    );
}

export default ProductDetail;


