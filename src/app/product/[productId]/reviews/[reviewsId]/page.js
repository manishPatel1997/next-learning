'use client'
import React from 'react'

export default function ReviewId({ params }) {
    return (
        <>
            <div>producr id : {params.productId}</div>
            <div>reviews id : {params.reviewsId}</div>
        </>
    )
}

