import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

// Component Story Format: Far Better 
export default { 
    title: "atoms/Button", 
    component: Button, 
    parameters: {
        docs: {
            description: {
                component: "The **Button** is a component that should fire an action based on a click event."
            }
        }
    },
    argTypes: {
        children: {
            description: "The element that should be rendered within the button",
        },

        disabled: {
            description: "Whether the button is enabled or disbled",
        },

        onClick: {
            description: "Call back to be called when the button gets clicked",
        }
    }
}

const Template = (args) => <Button {...args} />

export const Standard = Template.bind();
Standard.args = {
    children: "Button",
    disabled: false,
    onClick: action("Button Clicked")
}

export const Disabled = Template.bind();
Disabled.args = {
   ...Standard.args,
    disabled: true
}
