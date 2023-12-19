'use client'

import { useState } from "react";

export default function Template({ children }) {
    const [data, setData] = useState("");
    return (
        <>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            {children}
        </>
    )
}
