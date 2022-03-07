import React, {useState, useEffect } from "react";
import axios from "axios";

import '../styles/Galery.css'

export default function Galery (){

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random/12")
            .then(res => {
                setDogs(res.data.message)
                console.log(res)
            })
    }, []);

    return (
      <div className='container-grid'>  
                   
                {dogs.map((dog, i) => (
                    
                    <div className='item-container' key={i}>
                        <img src={dog} alt="dogs" className="image-item"/>
                    </div>
                ))}
            </div>
    )
}