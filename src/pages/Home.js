import React, {useEffect, useMemo, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Container, Paper, Button, Box} from '@material-ui/core';
import StudentComponent from "../components/StudentComponent";
import RegisterStudent from "./RegisterStudent";
import Typography from "@material-ui/core/Typography";


export default function Home() {

    const paperStyle={padding:'50px 20px', width:1200,margin:"20px auto"};

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}>Desafio Estude - Acelera M4U</h1>
                <Typography>Implementação do desafio proposto pelo treinamento Acelera M4U, que consiste na implementação de um sistema Font-end que gerencia os estudantes da plataforma de cursos da empresa fictícia ESTUDE.

                    Uma Single Page Application que consone a Api do sistema ESTUDE, desenvolvida com Spring.
                </Typography>
            </Paper>

        </Container>
    );
}
