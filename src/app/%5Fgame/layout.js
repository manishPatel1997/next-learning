'use client'

import { useState } from "react";

export default function layoutGame({ children }) {
    const [data, setData] = useState("");
    return (
        <>
            <h1>layout component of game</h1>
            <input type="text" value={data} onChange={(e) => setData(e.target.value )} />
            {children}
        </>
    )
}
