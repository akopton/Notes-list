import Note from "./Note";

const NotesList = ({ notes }) => {
    return (
     <div className="list">
        {notes.map(note => {
            return (
                <Note id={note.id} text={note.text} date={note.date}/>
            )
        })}
     </div>   
    )
}

export default NotesList;