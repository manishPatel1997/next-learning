/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.unsplash.com"]
    },
    // redirects:async()=>{
    //         return[
    //             {
    //                 source:"/login",
    //                 destination:"/about",
    //                 permanent:false
    //             }
    //         ]
    // },
    // output:'export' //! for static page generation in html form

}

module.exports = nextConfig
