"use client"
import React from 'react'

export default function Error({ error, reset }) {
    console.log();
    return (
        <>
            <div>Kya kr rhahe bhai {error.message}</div>
            <button onClick={reset}>reset</button>
        </>
    )
}
