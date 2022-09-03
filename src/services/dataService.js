import axios from 'axios';

let catalog = [
    {
        _id: "1",
        title: "Air Jordan 1",
        price: 120,
        brand: "Nike",
        category: "Basketball shoes",
        image: "./images/jordans.png"
    },

    {
        _id: "2",
        title: "Nike LeBron 19",
        price: 130,
        brand: "Nike",
        category: "Basketball shoes",
        image: "./images/lebrons.png"
    },

    {
        _id: "3",
        title: "Nike Kyrie 8",
        price: 130,
        brand: "Nike",
        category: "Basketball shoes",
        image: "./images/kyrie.png"
    },

    {
        _id: "4",
        title: "Adidas Predator Edge",
        price: 120,
        brand: "Adidas",
        category: "Soccer shoes",
        image: "./images/adidas.png"
    }
];

class DataService {

    serverURL = "http://127.0.0.1:5000"

    async getCatalog() {
        // Call the server
        // Get the list of products and return it

        let res = await axios.get(this.serverURL + "/api/catalog");

        return res.data;
        // return catalog;
    }


    async saveProduct(prod){
        let res = await axios.post(this.serverURL + "/api/catalog", prod);

        return res.data;

    }

    async saveCoupon(coupon){
        let res = await axios.post(this.serverURL + "/api/coupons", coupon);

        return res.data;
        
    }

    async getCoupons(){
        let res = await axios.get(this.serverURL+ "/api/coupons");

        return res.data;
    }

}

export default DataService;