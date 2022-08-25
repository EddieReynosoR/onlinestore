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
        copy.push(prod);
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