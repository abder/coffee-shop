import { ProductListItem } from "./ProductListItem";
import { action } from "@storybook/addon-actions";

// Component Story Format: Far Better 
export default { title: "patterns/ProductListItem", component: ProductListItem }

const Template = (args) => <ProductListItem {...args} />

export const Standard = Template.bind();
Standard.args = {
    name: "coffee",  
    price: "1.99",
    imageUrl: "https://via.placeholder.com/200x100",
    onAddToCart: action("Item Added!"),
    inSale: false,
    isSoldOut: false
}

export const SoldOut = Template.bind();
SoldOut.args = {
   ...Standard.args,
    isSoldOut: true
}

export const OnSale = Template.bind();
OnSale.args = {
   ...Standard.args,
   inSale: true
}

