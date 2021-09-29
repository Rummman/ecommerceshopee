import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Shopee</Logo>
                <Desc>Shopee's goal is bringing the best possible shopping experience to any enthusiast who visits us looking for motorcycle jackets, apparel, helmets, motorcycle gear, accessories & almost everything else that goes on your person or your motorcycle. We also attempt to specialize where it makes sense for certain specific riding styles such as Sport Touring, Adventure & Sport Touring & Track Day / Racing.</Desc>
            </Left>
            <Center>
                <Title>Trending</Title>
                <List>
                    <ListItem>Full Face Helmet</ListItem>
                    <ListItem>Modular Helmet</ListItem>
                    <ListItem>Dirt Helmet</ListItem>
                    <ListItem>Open Face Helmet</ListItem>
                    <ListItem>Pillion Helmet</ListItem>
                    <ListItem>Cross Helmet</ListItem>
                    <ListItem>Open Face Helmet</ListItem>
                    <ListItem> Riding Gloves</ListItem>
                    <ListItem>Riding Boots</ListItem>
                    <ListItem>Riding Jacket</ListItem>
                </List>
            </Center>
            <Right>
                <Title2>Contact Us</Title2>
                <ContactAddress>739, Mirpur 10, Dhaka, Bangladesh</ContactAddress>
                <ContactPhone>031-234233 01959874658</ContactPhone>
                <ContactMail>shopee@helmet.com.bd</ContactMail>
            
            </Right>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display : flex;
    padding-top : 70px;
    padding-left : 35px;
`;

const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    padding : 20px;
`;
const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin : 20px 0px;
    margin-right : 10px;
`;

const Center = styled.div`
    flex : 1;
    padding : 20px;
`;
const Title = styled.h3`
    margin-bottom : 30px;
    text-align : center;
    margin-right : 40px;
`;
const List = styled.ul`
    margin : 0;
    padding: 0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;
`;

const ListItem = styled.li`
    width : 50%;   
    margin-bottom : 10px;
`;

const Right = styled.div`
    flex : 1;
    padding : 20px;
`;
const Title2 = styled.h3`
    margin-bottom : 30px;
`;
const ContactAddress =styled.p`
    margin : 10px 0px;
`;

const ContactPhone = styled.p`
    margin : 10px 0px;
`;

const ContactMail = styled.p`
    margin : 10px 0px;
`;