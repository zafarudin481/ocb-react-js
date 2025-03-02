import Title from './components/Title';

function App() {
  const familyName = "Nakama";

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <Title
        name="Zafarudin"
        role="React Learner"
        something={() => { console.log("Everyhing!") }}
      />
      <Title
        name="Mohammad"
        role="Frontend Developer"
      />
      <Title
        name={`Zepp ${familyName}`}
        role="Product Manager"
        isManager={true}
      />
      <Title
        name="Udin"
        role="System Analyst"
      />
    </div>
  )
}

export default App
