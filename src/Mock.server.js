import { createServer } from 'miragejs'

const productsData =  [
        {
            id: 1,
            name: "Mocha",
            price: "4.5",
            imageUrl: "https://via.placeholder.com/200x100"
        },
        {
            id: 2,
            name: "Americano",
            price: "3",
            imageUrl: "https://via.placeholder.com/200x100"
        }
]

const runServer = () => createServer({
    routes() {
        this.namespace = "/api";
        this.get("products", () => ( { data: productsData } ) )
    }
});

export default runServer;

