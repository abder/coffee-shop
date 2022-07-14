import { render, fireEvent } from "@testing-library/react";
import { Standard, SoldOut, OnSale } from './ProductListItem.stories'

it("Shows (On Sale) when onSale", () => {
    const { getByText } = render(<OnSale {...OnSale.args}/>)

    expect(getByText("(On Sale)")).toBeInTheDocument()
})

it("Disables the button when disabled", ()=> {
    const { getByText } = render(<SoldOut {...SoldOut.args}/>)

    expect(getByText("Sold Out")).toHaveAttribute("disabled")
})

it("calls callback when button Add to Cart pressed", ()=> {
    const addToCart = jest.fn();

    const { getByText } = render(
        <Standard onAddToCart={addToCart}/>
    )

    fireEvent.click(getByText("Add to Cart"))
    expect(addToCart).toHaveBeenCalled()
})