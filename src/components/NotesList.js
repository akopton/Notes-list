import Note from "./Note";

const NotesList = ({ notes }) => {
    return (
     <ul className="list">
        <h1>notes list</h1>
        {notes.map(note => {
            return (
                <Note key={note.id} text={note.text} date={note.date}/>
            )
        })}
     </ul>   
    )
}

export default NotesList;