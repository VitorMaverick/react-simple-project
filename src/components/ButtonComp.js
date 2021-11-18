import React,{ useState } from 'react';
import { Button } from "@material-ui/core";


export default function ButtonComp(params) {

    const [atributo, setAtributo] = useState(0)
    let cont=1;

    const increment= (e) =>{
        e.preventDefault();
        cont += 1;
        setAtributo(cont);
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
