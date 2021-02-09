import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, H1, Text, Button } from "native-base";
import ProductList from './ProductList';
import Rating from './Rating';


function formatName(user) {
  return user.firstName + "" + user.lastName;
}

export default function App() {
  const user = {
    firstName: 'Иван',
    lastName: "Дурачев"
  };

  return (
    <Container>
      <Header />
      <Content>
        <H1>Забавно...</H1>
        <Text>Прив {formatName(user)}</Text>

        <ProductList />
        <Rating rating='0' />
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
        <Button>
          <Text>Нажать</Text>
        </Button>


      </Content>
    </Container>
  );
}

