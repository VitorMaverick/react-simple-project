import React,{ useState } from 'react';
import {Button, Paper} from "@material-ui/core";


export default function StudentComponent(params) {

    const student = params.student;


    return (

        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
            Id:{student.id}<br/>
            Name:{student.name}<br/>
            Address:{student.age}
        </Paper>



    )


}
