import React, { useState } from "react";

export function Input() {
    const [value, setValue] = useState("");

    const searchInput = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h4>ADD A TOPIC</h4>
            <form onSubmit={searchInput}>
                <label>
                    <input type="text" placeholder="Write your topic ideas here" value={value} onChange={(e) => setValue(e.target.value)} />
                </label>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}