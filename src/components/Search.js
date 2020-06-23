import React, {useState, useEffect } from 'react';
import products from '../products.json';



const Search = () =>{

    const [svalue, setSvalue] = useState("");

    const handleChange = (e)  =>{
        setSvalue(e.target.value)
       
}
    
        return(
            <>
            <form style={{float:"right"}}> 
                <input type="text" name="name" placeholder="Enter Keywords" value={svalue} onChange={handleChange}/>
            </form>
            </>
        )
}

export default Search;

