import '../styles/MusicSearch.css'
import React, { useRef } from 'react';

const SearchInput = (props) => {

    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    return (
        <div className="musicSearch">
            <form onSubmit={props.handleFunction}>
                <input ref={inputRef} id="searchInput" type="text" onChange={e => props.setInput(e.target.value)} placeholder="Search information about bands and artists"></input>
                <button onClick={handleClick} id="searchButton">Search</button>
            </form>
        </div>
    );
}
export default SearchInput;