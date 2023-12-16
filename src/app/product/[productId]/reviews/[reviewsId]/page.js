
import { notFound } from "next/navigation"
export default function ReviewId({ params }) {
    if (params.productId > 1000) {
        notFound()
        // return;
    }
    return (
        <>
            <div>producr id : {params.productId}</div>
            <div>reviews id : {params.reviewsId}</div>
        </>
    )
}

