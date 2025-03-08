import Counter from "./components/Counter"

function App() {
  const students = ["Zafarudin", "Kurama", "Naruto", "Sasuke", "Sakura", "Kakashi", "Itachi", "Madara", "Hashirama", "Tobirama", "Hiruzen", "Minato", "Kushina", "Nagato", "Konan", "Jiraiya", "Orochimaru", "Tsunade", "Kabuto", "Sai", "Yamato", "Kurenai", "Asuma", "Shikamaru", "Ino", "Choji", "Neji", "Hinata", "Kiba", "Shino", "Rock Lee", "Tenten", "Gaara", "Kankuro", "Temari", "Orochimaru", "Jiraiya", "Tsunade", "Kabuto", "Sai", "Yamato", "Kurenai", "Asuma", "Shikamaru", "Ino", "Choji", "Neji", "Hinata", "Kiba", "Shino", "Rock Lee", "Tenten", "Gaara", "Kankuro", "Temari", "Orochimaru", "Jiraiya", "Tsunade", "Kabuto", "Sai", "Yamato", "Kurenai", "Asuma", "Shikamaru", "Ino", "Choji", "Neji", "Hinata", "Kiba", "Shino", "Rock Lee", "Tenten", "Gaara", "Kankuro", "Temari", "Orochimaru", "Jiraiya", "Tsunade", "Kabuto", "Sai", "Yamato", "Kurenai", "Asuma", "Shikamaru", "Ino", "Choji", "Neji", "Hinata", "Kiba", "Shino", "Rock Lee", "Tenten", "Gaara", "Kankuro", "Temari", "Orochimaru", "Jiraiya", "Tsunade", "Kabuto", "Sai", "Yamato", "Kurenai", "Asuma", "Shikamaru", "Ino", "Choji", "Neji", "Hinata", "Kiba", "Shino", "Rock Lee",];

  return (
    <>
      {students.map((student) => {
        return <Counter name={student} key={student} />
      })}
    </>
  )
}

export default App
