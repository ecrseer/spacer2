import {TextField} from '@material-ui/core';
import { useRef } from 'react';

function changeBelow(tt){

}

function theChange({props}){
     let testo=target.value.match(/.{1,1}/g); 
    setTimeout(changeBelow(target),1200);
     
}

export default 
function TextFieldC(props){

    const entrad = useRef(null);

    return(
        <TextField
          id="filled-full-width"
          label= "Digite o texto aqui"           
          color="secondary"          
          autoFocus={true}
          placeholder="Digite"
          ref={entrad}
          margin="normal"
          InputLabelProps={{

            shrink: true,
            root: '#aaa',
            //focused: '#fff',            
            
          }}
          InputProps={
            {
       //       className:classes.textField
          }
        }
          variant="filled"
          onChange= {theChange? theChange : ()=>{} }
          
        />
    );
}