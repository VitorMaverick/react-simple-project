import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Paper, Button, Box} from '@material-ui/core';
import StudentComponent from "../components/StudentComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}))

export default function RegisterStudent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const[students,setStudents]=useState([]);
    const classes = useStyles();


    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};


    const handleClick = (e) => {
        e.preventDefault()
        const student = {name, email, age};
        console.log(student)

        fetch("http://localhost:8080/students",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(student)
            }
        ).then(() => console.log("New Student added"));
    }


    return (
        <Container>
            <form className={classes.root}>
                <TextField id="outlined-basic" label="Student name" variant="outlined"
                           fullWidth value= {name} onChange = {(e) => setName(e.target.value)} />
                <TextField id="outlined-basic" label="Student email" variant="outlined"
                           fullWidth value= {email} onChange = {(e) => setEmail(e.target.value)} />
                <TextField id="outlined-basic" label="Student age" variant="outlined"
                           fullWidth value= {age} onChange = {(e) => setAge(e.target.value)} />
                <Box sx={{mt: 1}} >
                    <Button  variant="contained" color="primary" onClick={(e)=> handleClick(e)}>
                        Subimit
                    </Button>
                </Box>

            </form>

        </Container>
    );
}
