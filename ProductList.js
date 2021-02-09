import React from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


export default function ProductList() {
    const products = ['Russia', 'Canada', 'USA', 'China'];
    const listProducts = products.map((product) =>
        <ListItem key={product.toString()}>
            <Text>{product}</Text>
        </ListItem>
    );
    return (
        <Container>
            <Header />
            <Content>
                <List>
                    {listProducts}
                </List>
            </Content>
        </Container>
    );
}
