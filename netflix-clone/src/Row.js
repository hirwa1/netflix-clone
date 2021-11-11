import React, {useState, useEffect} from 'react';
import axios from './axios';
function Row({ title, fetchUrl}) {


    const [movies, setMovies] = useState([]);

    // SNipet code 
    useEffect( () =>{
       
    }, []);
    return (
        <div>
           <h2>{title}</h2>

            {/* contaniner -> poster */}

          
        </div>
    )
}

export default Row
