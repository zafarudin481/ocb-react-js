import Card from "./components/Card"

const users = [
  {
    id: 1,
    name: "Zafarudin",
    location: "Malaysia",
    age: 35,
    active: true,
  },
  {
    id: 2,
    name: "John",
    location: "UK",
    age: 42,
    active: false,
  },
  {
    id: 3,
    name: "Doe",
    location: "US",
    age: 38,
    active: false,
  },
  {
    id: 4,
    name: "Lin Dan",
    location: "China",
    age: 41,
    active: true,
  },
  {
    id: 5,
    name: "Abu",
    location: "Kuala Sepetang",
    age: 31,
    active: true,
  },
]

function App() {
  return (
    <>
      {
        users.map((user) => {
          return <Card user={user} hidden={!user.active} key={user.id} />
        })
      }
    </>
  )
}

export default App
