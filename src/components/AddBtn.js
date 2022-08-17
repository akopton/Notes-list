import React, { useEffect, useState } from "react";


const AddBtn = ({ notes, setNotes }) => {

    const [newNoteClasses, setNewNoteClasses] = useState(['newNote', 'hidden'])
    const [noteToAdd, setNoteToAdd] = useState({id:'',text:'',date:''})
    const current = new Date()
    const day = current.getDate()
    const month = current.getMonth()
    const year = current.getFullYear()
    const date = month < 10 ? `${day}.0${month}.${year}` : `${day}.${month}.${year}`

    const newNote = () => {
        if (newNoteClasses.some(el => el == 'hidden'))
        setNewNoteClasses(['newNote'])
    }

    const closeNewNote = () => {
        setNewNoteClasses(['newNote' ,'hidden'])
    }

    const saveNote = (e) => {
        setNoteToAdd({
            id: Date.now(),
            text: e.target.value,
            date: date
        })
    }

    const addNote = () => {
        // console.log('add')
        setNotes(notes = [...notes, noteToAdd])
        setNewNoteClasses(['newNote' ,'hidden'])
        setNoteToAdd({id:'',text:'',date:''})
        console.log(notes)
    }


    return (
        <div>
            <button onClick={newNoteClasses.some(el => el == 'hidden') ? newNote : closeNewNote}>elo</button>
            <div className={newNoteClasses.join(' ')}>
                <textarea
                    value={noteToAdd.text}
                    onChange={(e) => saveNote(e)}
                />
                <button 
                    className="saveNote"
                    onClick={addNote}
                >
                add
                </button>
            </div>
        </div>
    )
}


export default AddBtn;