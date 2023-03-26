import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { allitem } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
const AllProducts = () => {
    const[allproducts,setallproducts]= useState('');
    const dispatch = useDispatch();
    const search = useSelector((store) => store.app.searchitems);
    useEffect(()=>{
          fetchData()
    },[])
    const cart = useSelector((store) => store.app.cart);
    const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const result = await response.json();
          setallproducts(result);
          dispatch(allitem(result));
          console.log(result);
        } catch (err) {
            console.log(err);
         
        }
      };
  return (
    <div className='d-flex flex-wrap justify-content-center mt-3'>{ allproducts &&
         search.map((element)=>{
        return <SingleProduct
        name={element.title}
      price={element.price}
      image={element.image }
      id={element.id}
    
      />
    })  }</div>
  )
}

export default AllProducts