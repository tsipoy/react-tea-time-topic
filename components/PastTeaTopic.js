import React, { useState } from "react";

function PastTeaTopic ({topic}) {
    const [ remove, setRemove ] = useState([]);

    const removeDiscussed = (id) => {
        const newList = remove.filter(topic => topic.id !== id);
        setRemove(newList);
        console.log(id)
    }


    const discussedOnDate = new Date(Number(topic.discussedOn));
    return(
        <div className="content">
            <button className="absolutBtn" onClick={removeDiscussed}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
            <p>{topic.title}</p>
            <span>Discussed on: {discussedOnDate.toLocaleDateString()}</span>
        </div>
    )
}

export default PastTeaTopic