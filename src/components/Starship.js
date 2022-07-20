import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Starship = (props) => {
    const params = useParams()
    const id = params.starshipId
    const [info, setInfo] = useState({})
    
    async function loadApi(){
        const request = await fetch(`https://swapi.dev/api/starships/${id}/`)
        const data = await request.json()
        setInfo(data)
    }

    useEffect(() => {
        loadApi()
    }, [])

    return (
       
        <div>
            <h1>{info.name}</h1>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
            <p>
                {info.model}<br />
                Passangers: {info.passengers}<br />
                Size: {info.length}<br />
                Manufacturer: {info.manufacturer}<br />
                Crew: {info.crew}<br />
                Consumables :{ info.consumables} <br />
                Cost_in-credits :{ info.cost_in_credits} <br />
                Length :{ info.length} <br />
                Max_atmosphering_speed :{ info.max_atmosphering_speed} <br />
                Cargo Capacity :{ info.cargo_capacity} <br />
                
            </p>
        </div>
        


    )
}

export default Starship