import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import AddBtn from "./components/AddBtn";

const App = () => {
  const [notes, setNotes] = useState([])
  useEffect(()=>{
    console.log('elo')
  },[notes])

  return (
    <div  className="box">
      <AddBtn notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;