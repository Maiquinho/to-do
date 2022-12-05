import { useState } from 'react';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';



import { Item } from './types/Item';


export function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar React', done: false },
    { id: 2, name: 'Estudar Node', done: false },
  ]);

  return (
    <>
      <Container>
        <Header />
        <Form />

        { list.map((item) => <List key={item.id} name={item.name} done={item.done} /> ) }

      </Container>
    </>
  )
}