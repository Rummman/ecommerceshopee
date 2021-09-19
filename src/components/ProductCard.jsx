import { Height } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fit,minmax(12rem-16rem));
    gap : 2rem;
    justify-content : center;
`;

const Card = styled.div`
    box-sizing : border-box;
    padding: 0;
    margin : 0;
`;
const CardBody = styled.div`
    margin : 2rem;
`;

const Image =styled.img`
    height : 400px;
`;

const CardTitle = styled.h2`

`;

const CardButton = styled.button`

`;

const ProductCard = (props) => {
    return (
        <Wrapper>
            <Card> 
                <CardBody>
                    
                    <img src={props.img} style ={{height:300}}/>
                    
                    <CardTitle>{props.title}</CardTitle>
                    <CardButton>Buy Now</CardButton>
                    <CardButton>Add To Cart</CardButton>
                </CardBody>
            </Card>
        </Wrapper>
        )
};

export default ProductCard;