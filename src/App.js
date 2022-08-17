import { useState } from "react";
import NotesList from "./components/NotesList";
import AddBtn from "./components/AddBtn";

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   id: '',
    //   text: 'to jest pierwsza notka',
    //   date: '09.04.1999'
    // },
    // {
    //   id: '',
    //   text: 'to jest druga notka',
    //   date: '15.08.1998'
    // },
    // {
    //   id: '',
    //   text: 'to jest trzecia notka',
    //   date: '18.02.1962'
    // },
  ])



  return (
    <div className="box">
      <AddBtn notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
