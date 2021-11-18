import * as React from 'react';
import {Container, TextField} from "@material-ui/core";

export default function Student() {
    return (
        <Container>
            <TextField id="outlined-basic" label="Student name" variant="outlined" />
            <TextField id="outlined-basic" label="Student address" variant="outlined" />

        </Container>
    );
}
