import { ProductList } from './ProductList'
import { statusTypes } from './statusTypes'

export default { title: "Patterns/ProductList", component: ProductList }

const Template = (args) => <ProductList {...args} />

export const Standard = Template.bind();
Standard.args = {
    status: statusTypes.loading
}


