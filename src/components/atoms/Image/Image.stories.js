import { Image } from './Image'

export default { title:"atoms/Image", component: Image }

const Template = (args) => <Image {...args}/>

export const Standard = Template.bind()
Standard.args = {
    src: "https://via.placeholder.com/200x100",
    alt: "test"
}

