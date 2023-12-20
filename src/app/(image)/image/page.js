import React from 'react'
import natureImg from "@/public/nature.jpg"
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"
export default function ImagePic() {
    return (
        <div className='container d-flex gap-5 mt-5 justify-content-center align-items-center'>
        <div className="div">
            <h1>direct import image</h1>
            <Image src={natureImg} alt="natural image" width={500} height={500} />
        </div>
        <div>
            <h1>next.config.js add domain name</h1>
            <Image src="https://images.unsplash.com/photo-1702418933856-a9a54e724b0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="natural image" width={500} height={500} />
        </div>
        </div>
    )
}
