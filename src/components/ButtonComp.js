import React,{ useState } from 'react';
import { Button } from "@material-ui/core";


export default function ButtonComp(params) {

    const [atributo, setAtributo] = useState(0);
  
    const increment = (e) =>{
        e.preventDefault();
        
        setAtributo(atributo +1);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={(e)=> increment(e)}>
                {params.name}
            </Button>
            <h1>{atributo}</h1>
        </div>


    )


}
