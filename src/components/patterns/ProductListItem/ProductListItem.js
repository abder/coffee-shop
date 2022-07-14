

import styled from "styled-components";


import { Button, Heading, Paragraph, Image } from '../../atoms'

export const ProductListItem = ( { className, name, price, imageUrl, onAddToCart, isSoldOut, inSale } ) => {

    return (
        <Card inSale={inSale} className={className}>
            <Heading data-testid="product-name" inSale={inSale}>
                {name}
                {inSale && <span> (On Sale)</span>}
            </Heading>
            <Image src={imageUrl} alt={name} />
            <Price>{price}</Price>
            <Button disabled={isSoldOut} onClick={onAddToCart}>{isSoldOut ? "Sold Out" : "Add to Cart"}</Button>
        </Card>
    )
}

const Card= styled.div`
    display: flex;
    flex-direction: column;
    border:1px solid #EDEDED;
    padding: 8px;
    max-width: 240px;
    background-color: ${ props => (props.inSale ? "#E8F6FF" : "#FFFFFF")};
`;


const Price= styled(Paragraph)`
    &::before {
        content: "$"
    }
`;

