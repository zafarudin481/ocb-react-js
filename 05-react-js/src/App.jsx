import { useState } from 'react';
import Card from "./components/Card";
import NewTodo from './components/NewTodo';

// const mockData = [
//   {
//     id: "1",
//     title: 'Pergi pasar',
//     description: 'Beli ikan dan ayam untuk masak',
//     checked: false,
//   },
//   {
//     id: "2",
//     title: 'Pergi hardware',
//     description: 'Beli paip air, getah hos dan gam tayar',
//     checked: false,
//   },
//   {
//     id: "3",
//     title: 'Cari tanah',
//     description: 'Beli mana-mana tanah untuk diflip di kemudian hari',
//     checked: false,
//   }
// ];


function App() {
  const [todos, setTodos] = useState([]);
  // const [test, setTest] = useState(false);

  const handleAddNewTodo = ({
    title,
    description,
  }) => {
    console.log({
      title,
      description,
    });

    const newTodoItem = {
      id: Math.trunc(Math.random() * 10000).toString(),
      title,
      description,
      checked: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodoItem];
    });
  };


  return (
    <>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      <NewTodo addNewTodo={handleAddNewTodo} />
      {
        todos.map((todo) => {
          return (
            <Card
              id={todo.id}
              key={todo.id}
              title={todo.title}
              description={todo.description}
              checked={todo.checked}
              toggleDone={() => {
                // setTest(event.target.checked);
              }}
            />
          )
        })
      }

    </>
  )
}

export default App
