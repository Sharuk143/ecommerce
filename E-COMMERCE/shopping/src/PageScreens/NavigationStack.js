import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import BlogScreen from './BlogScreen';
import ProductDetail from './ProductDetail';
import { Logininfo } from '../App';
import AddtoCart from "./AddtoCart";

export const CartContext = createContext();

export const CartCounter = createContext();

const NavigationStack = () => {
    const loginflag = useContext(Logininfo);

    const [cart, setCart] = useState([]);


    const addItemsToCart = (item) => {
        setCart([...cart, item]);
    }



    const [cartCount, setCartCount] = useState(0);

    const IncrementCount = () => {
        setCartCount(cartCount + 1);
    }

    return (
        <BrowserRouter>
            {loginflag.login
                ?
                <CartContext.Provider value={{ cart, addItemsToCart}}>
                    <CartCounter.Provider value={{ cartCount, IncrementCount }}>
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/about" element={<AboutScreen />} />
                            <Route path="/blog" element={<BlogScreen />} />
                            <Route path="/addtocart" element={<AddtoCart />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<AddtoCart />} />
                        </Routes>
                    </CartCounter.Provider>
                </CartContext.Provider>
                :
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                </Routes>
            }
        </BrowserRouter>
    );
};

export default NavigationStack;


