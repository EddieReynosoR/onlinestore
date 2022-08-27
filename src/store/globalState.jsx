import StoreContext from "./storeContext";
import { useState } from 'react';

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);

    const [user, setUser] = useState([]);

    const addToCart = (prod) => {
        console.log("adding to cart...");
        

        // add product to cart
        // create a copy, mod copy, set the copy

        let copy = [...cart];

        let exist = false;

        for(let i = 0; i < copy.length; i++){
            if(copy[i]._id === prod._id){
                exist = true;
                copy[i].quantity += prod.quantity;
            }
        }

        if(!exist){
            copy.push(prod);
        }

        setCart(copy);


    };
    const removeFromCart = () => {};

    return(
        <div>
            <StoreContext.Provider value={{
                cart: cart,
                user: user,
                addToCart: addToCart,
                removeFromCart: removeFromCart
            }}>
                {props.children}
            </StoreContext.Provider>
        </div>
    );
};

export default GlobalState;