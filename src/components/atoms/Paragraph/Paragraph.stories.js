import {Paragraph} from './Paragraph'

export default { title: "atoms/Paragraph", component: Paragraph }

const Template = (args) => <Paragraph {...args} />

export const Standard = Template.bind();
Standard.args = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in massa volutpat, commodo diam eget, sagittis magna. Fusce efficitur finibus semper. Quisque eu diam diam"
}
