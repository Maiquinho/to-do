import { useState } from 'react';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';



import { Item } from './types/Item';


export function App() {
  const [list, setList] = useState<Item[]>([]);

  function handleAddTask(task: string){
    let newList = [...list];
    newList.push({
      taskId: list.length + 1,
      taskName: task,
      taskDone: false
    });
    setList(newList);
  }

  return (
    <>
      <Container>
        <Header />
        <Form onEnter={handleAddTask} />

        { list.map((item, index) => <List key={index} item={item} /> ) }

      </Container>
    </>
  )
}