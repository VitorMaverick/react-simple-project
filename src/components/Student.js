import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

export default function Student() {
	
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const[students,setStudents]=useState([]);
	
	 const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};
	
	
	const handleClick = (e) => {
		e.preventDefault()
		const student = {name, address};
		console.log(student)
		
		fetch("https://desafio-estude.herokuapp.com/students",
			{
			  method:"POST",
			  headers:{"Content-Type":"application/json"},
			  body:JSON.stringify(student)
			}
		).then(() => console.log("New Student added"));
	}
	
	useEffect(()=>{
	  fetch("https://desafio-estude.herokuapp.com/students")
	  .then(res=>res.json())
	  .then((result)=>{
		setStudents(result);
		});
	});
	
    return (
        <Container>
			<form>
				<TextField id="outlined-basic" label="Student name" variant="outlined" 
				fullWidth value= {name} onChange = {(e) => setName(e.target.value)} />
				<TextField id="outlined-basic" label="Student address" variant="outlined"
				fullWidth value= {address} onChange = {(e) => setAddress(e.target.value)} />
				
				<Button variant="contained" color="primary" onClick={(e)=> handleClick(e)}>
					Subimit
				</Button>
			</form>
			{name}
			{address}
			
		
				<h1>Students</h1>

				<Paper elevation={3} style={paperStyle}>

				  {students.map(student=>(
					<Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
					 Id:{student.id}<br/>
					 Name:{student.name}<br/>
					 Address:{student.address}

					</Paper>
				  ))
				}


			</Paper>
        </Container>
    );
}
