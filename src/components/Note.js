

const Note = ( {id, text, date} ) => {
    return (
        <div className="note">
            <span>{text}</span>
            <span>{date}</span>
        </div>
    )
}

export default Note;