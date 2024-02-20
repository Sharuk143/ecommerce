import React from 'react'
import HeaderScreen from './HeaderScreen.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CardAligner from './CardAligner.js'
const HomeScreen = () => {
const [Data,setData] = useState([])
useEffect(()=>{axios.get("https://dummyjson.com/products")
        .then(res => setData(res.data.products))
        .catch(error => {
            console.error("Error fetching data:", error);
        });
     },[])
return (
        <>
        <HeaderScreen />
        <CardAligner productData={Data}/>
        </>
    )
}

export default HomeScreen
