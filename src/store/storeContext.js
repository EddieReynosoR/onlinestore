import { createContext } from "react";

// context describes the data structure
// but doesnt provide implementation

const StoreContext = createContext({
    cart: [],
    user: [],

    addToCart: () => {},
    removeFromCart: () => {}
});

export default StoreContext;