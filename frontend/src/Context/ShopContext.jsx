import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index <= 300; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_products,setAll_Product] = useState([]);

    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            }).then((res)=>res.json())
            .then((data)=>setCartItems(data));
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCartItems = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log(updatedCartItems); 
            return updatedCartItems; 
        });
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev) => {
            const updatedCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
            console.log(updatedCartItems); 
            return updatedCartItems; 
        });
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        const allData = [...all_products];
    
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = allData.find((product) => product.id === Number(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[itemId];
                }
            }
        }
    
        return totalAmount;
    };
      
    const getTotalCartItems = ()=>{
        let totalItem =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
