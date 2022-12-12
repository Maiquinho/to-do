import { useState } from 'react';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';



import { Item } from './types/Item';


export function App() {
  const [list, setList] = useState<Item[]>([
    { taskId: 1, taskName: 'Criar um To-do com React', taskDone: true },
    { taskId: 1, taskName: 'Estudar Node.js', taskDone: false },
  ]);

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