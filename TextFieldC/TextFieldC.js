import {TextField} from '@material-ui/core';
import { useRef,forwardRef } from 'react';

function changedDiv(tt){
 return (
    <h3>{tt}</h3>
 )
}

function theChange({props,target}){
    try{
     let 
        hhm = document.createElement('h3'),
        bdy = document.getElementById('__next'),
        testo = target.value.match(/.{1,1}/g); 
        
        testo = testo.join(' ');
        testo = testo.toUpperCase();
//    setTimeout(changeBelow(target),1200);
     
        testo = testo.replaceAll(" ","&nbsp;");
        hhm.innerHTML = testo;        
        bdy.appendChild(hhm);

    }catch(err){
        console.log(err);
    }
}

export default forwardRef(
function TextFieldC(props,ref){

    const dentroA=()=>{
        return 23;
    }

    

    return(
        <TextField
          id="filled-full-width"
          label= "Digite o texto aqui"           
          color="secondary"          
          autoFocus={true}
          placeholder="Digite"
          forwardRef={ref}
          margin="normal"
          {...props}
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
)