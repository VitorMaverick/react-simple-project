import React, {useEffect, useMemo, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Container, Paper, Button, Box} from '@material-ui/core';
import StudentComponent from "../components/StudentComponent";
import RegisterStudent from "./RegisterStudent";


export default function Student() {

	const[students,setStudents]=useState([]);

	const [resultSearch, setResultSearch] = useState('');

	const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};

	const filterStudents =  useMemo(() => {
		return students.filter((student) => student.name.includes(resultSearch));
	}, [resultSearch, students] )


	useEffect(()=>{
	  fetch("http://localhost:8080/students")
	  .then(res=>res.json())
	  .then((resultSearch)=>{
		  let filter = resultSearch.filter((student) => student.name.includes(resultSearch));
		setStudents(resultSearch);

		console.log(resultSearch)
		});
	},[students]);
	
    return (
        <Container>
				<Paper elevation={3} style={paperStyle}>
					<h1 style={{color:"blue"}}><u>All Student</u></h1>
					<TextField id="outlined-basic" label="Search" variant="outlined"
							   fullWidth value= {resultSearch} onChange = {(e) => setResultSearch(e.target.value)} />

					  { filterStudents.map(student=>(
						<StudentComponent student={student}/>
				  ))
				}
                </Paper>

        </Container>
    );
}
