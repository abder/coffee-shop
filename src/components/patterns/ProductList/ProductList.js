import { ProductListItem } from '../ProductListItem'
import { statusTypes } from './statusTypes'
import styled from 'styled-components'

export const ProductList = ({ status, data }) => {

    if(status === statusTypes.loading) {
        return "Loading..."
    }

    if(status === statusTypes.errored) {
        return "Error"
    }

    if(status === statusTypes.loaded) {
        return (
            <Container>
                {
                data.map(product => 
                    <ProductListItem 
                            key={product.id}
                            name= {product.name}
                            price= {product.price}
                            imageUrl= {product.imageUrl}
                            onAddToCart= {()=> alert("Item Added!")}
                            inSale={false}
                            isSoldOut={false} 
                    />)
                }
            </Container>   
        )
    }
  
}


const Container = styled.div`
    display: flex;
`
