
function App() {
  const stailBlue = {
    color: 'blue',
    fontSize: '2.5rem',
    textAlign: 'center'
  };
  const stailGreen = {
    color: 'green',
    fontSize: '2.5rem',
    textAlign: 'center'
  };

  return (
    <div>
      <p style={stailBlue}>My name is Zafarudin.</p>
      <p style={stailGreen}>This is my first React Project.</p>
    </div>
  )
}

export default App