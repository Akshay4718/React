import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    //const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Akshay4718')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()
  return (
    
    <div>
        <h2>Github Followers:{data.followers}</h2>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}