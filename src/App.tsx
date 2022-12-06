import { useState } from 'react';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';



import { Item } from './types/Item';


export function App() {
  const [list, setList] = useState<Item[]>([
    { taskId: 1, taskName: 'Estudar React', taskDone: false },
    { taskId: 2, taskName: 'Estudar Node', taskDone: true },
  ]);

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