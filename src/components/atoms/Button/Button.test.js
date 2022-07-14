import { render, fireEvent } from "@testing-library/react"
import { Standard, Disabled } from './Button.stories'

it("Disables the button when disabled" , () => {
    const { getByText } = render(<Disabled {...Disabled.args} />)

    expect(getByText("Button")).toHaveAttribute("disabled")
})

it("Calls a callback when the button is clicked", ()=> {

    const clicked = jest.fn();

    const {onClick, ...btnArgs} = Standard.args;

    const { getByText } = render(<Standard {...btnArgs} onClick={clicked} />)

    fireEvent.click(getByText("Button"))

    expect(clicked).toHaveBeenCalled();

})
