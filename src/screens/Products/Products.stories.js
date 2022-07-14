import { Products } from "./Products"
import { Server } from "miragejs"

export default { title: "Screens/Products", component: Products }

const Template = (args) => <Products {...args} />

export const Standard = Template.bind()

let server = new Server();
server.get("/api/products", {
    data: [
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
})
