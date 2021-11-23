import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {Container, Paper, Button, Box} from '@material-ui/core';
import StudentComponent from "../components/StudentComponent";


export default function Student() {

	const[students,setStudents]=useState([]);

	const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};

	useEffect(()=>{
	  fetch("http://localhost:8080/students")
	  .then(res=>res.json())
	  .then((result)=>{
		setStudents(result);
		console.log(result)
		});
	},[]);
	
    return (
        <Container>
				<Paper elevation={3} style={paperStyle}>
					<h1 style={{color:"blue"}}><u>Add Student</u></h1>
					  {students.map(student=>(
						<StudentComponent student={student}/>
				  ))
				}
                </Paper>

        </Container>
    );
}
