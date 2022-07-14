import { Heading } from './Heading'

export default { title: "atoms/Heading", component: "Heading"}

const Template = (args) => <Heading {...args}/>

export const Standard = Template.bind();
Standard.args = {
    children: "Heading"
}
