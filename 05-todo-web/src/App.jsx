import { useState, useEffect } from 'react';
import Card from "./components/Card";
import NewTodo from './components/NewTodo';
import RegisterUser from './components/RegisterUser';
import { getTodoList } from '../api/todo';

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
  console.log(todos);

  const [todoList, setTodoList] = useState();
  const token = window.localStorage.getItem('token');

  const getTodoListFromAPI = async () => {
    const data = await getTodoList();
    setTodoList(data);
  };

  useEffect(() => {
    getTodoListFromAPI();
  }, []);

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

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const todoChecked = event.target.checked;

    setTodos((prevTodo) => {
      const updatedTodos = prevTodo.map((todo) => {
        // return early if the id did not match to avoid changing unrelated todo item
        if (todo.id != targetId) {
          return todo;
        }

        // if id is matched, we changed the "checked"
        const updatedItem = {
          // copy existing todo details
          ...todo,
          // update checked status
          checked: todoChecked,
        };

        // return updated todos item
        return updatedItem;
      });

      return updatedTodos;
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      padding: '1rem',
    }}>
      {/* <pre>{JSON.stringify(todoList, null, 2)}</pre> */}
      {
        !token && <RegisterUser />
      }
      <NewTodo addNewTodo={handleAddNewTodo} />
      {
        todoList?.map((todo) => {
          return (
            <Card
              id={todo._id}
              key={todo._id}
              title={todo.title}
              description={todo.description}
              checked={todo.completed}
              toggleDone={handleChecked}
            />
          )
        })
      }

    </div>
  )
}

export default App;
