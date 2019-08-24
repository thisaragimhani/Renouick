import React from 'react';
import TextField from '@material-ui/core/TextField';

const MyTextField = (props) => (
    <TextField
        id={props.id}
        label={props.label}
        style={{ margin: 12, width: '80%' }}
        placeholder={props.placeholder}
        helperText={props.helperText}
        
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.changed}
      />
);

export default MyTextField;