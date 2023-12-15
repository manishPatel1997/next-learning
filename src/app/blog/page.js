'use client'
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <div>Blog</div>
            <br />
            <h1>single slug</h1>
            <div><Link href="blog/first">First</Link></div>
            <div><Link href="blog/second">Second</Link></div>
            <div><Link href="blog/third">Third</Link></div>
            <br />
            <h1>multi slug</h1>
            <div><Link href="blog/four/five">multi</Link></div>
        </>
    )
}
