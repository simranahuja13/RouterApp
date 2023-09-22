import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState()
    // useEffect(() => {
    //        fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
              
    
    // }, [])

    return (
        <div className=' flex items-center justify-between'>
            <div className="left m-10">
            <img className="max-sm:w-[400px] rounded-full shadow-2xl "src={data.avatar_url} alt="Git Display Picture" width={400}  ></img>
            </div>
            <div className="right text-center   bg-gray-100 rounded-lg shadow-md m-5">
            <h1 className=' font-medium p-5 text-2xl lg:text-5xl text-orange-700'><span className='font-bold italic'>Name ~</span> {data.name}</h1>
            <h2 className=' font-medium p-5 text-2xl lg:text-5xl text-orange-700'><span className='font-bold italic'>About Me ~</span> {data.bio}</h2>
            <h2 className='font-medium p-5 text-2xl lg:text-4xl text-orange-700'>  <span className='font-bold italic'>Github followers:</span> {data.followers}</h2>
           </div>
            
        </div>
        
        // <div className='text-center m-4  p-7 font-bold text-3xl'> {data.followers}
        // <img src={data.avatar_url} alt="Git Display Picture" width={400} ></img>
        // {/* <h1>{data.repos_url.name}</h1> */}
        // <h1>{data.name}</h1>
        // </div>

    )
}

export default Github
export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/simranahuja13')
    return res.json()


}