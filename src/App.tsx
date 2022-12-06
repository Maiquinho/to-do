import { useState } from 'react';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';



import { Item } from './types/Item';


export function App() {
  const [list, setList] = useState<Item[]>([]);

  return (
    <>
      <Container>
        <Header />
        <Form />

        { list.map((item, index) => <List key={index} item={item} /> ) }

      </Container>
    </>
  )
}