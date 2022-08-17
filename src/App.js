import { useState } from "react";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: '',
      text: 'to jest pierwsza notka',
      date: '09.04.1999'
    },
    {
      id: '',
      text: 'to jest druga notka',
      date: '15.08.1998'
    },
    {
      id: '',
      text: 'to jest trzecia notka',
      date: '18.02.1962'
    },
  ])


  return (
    <div className="box">
      <NotesList notes={notes}/>
      {/* {notes.map((note) => {
        return (
          <NotesList notes={notes}/>
        )
      })} */}
    </div>
  )
}

export default App;
