

const Note = ( {id, text, date} ) => {
    return (
        <li key={id} className="note">
            <span>{text}</span>
            <span>{date}</span>
        </li>
    )
}

export default Note;