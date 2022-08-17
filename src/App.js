import { useState } from "react";
import NotesList from "./components/NotesList";
import AddBtn from "./components/AddBtn";

const App = () => {
  const [notes, setNotes] = useState([])

  return (
    <div  className="box">
      <AddBtn notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
