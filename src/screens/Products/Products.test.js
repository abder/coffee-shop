import { render, waitFor } from '@testing-library/react'
import { Standard } from './Products.stories'

it("It Receives API data and render them", async ()=> {
    const { getByText } = render(<Standard />);
    await waitFor(() => { expect(getByText("Mocha")).toBeInTheDocument()})
})