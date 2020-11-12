import {TextField} from '@material-ui/core';
import { useRef } from 'react';

function changeBelow(tt){

}

function theChange({props,target}){
    try{
     let testo=target.value.match(/.{1,1}/g); 
     testo= testo.join(' ');
     testo = testo.toUpperCase();
//    setTimeout(changeBelow(target),1200);
     console.log(testo);
     console.log(
        document.querySelector('TextFieldC'));
    }catch(e){
        let er= document.createElement('h1');
        er.innerHTML="Digite algo";
        document.querySelector('body').appendChild(er);
    }
}

export default React.forwardRef(
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