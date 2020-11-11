

import react from 'react';
import ReactDOM from 'react-dom';
import TextFieldC from '../TextFieldC';
import {isTSAnyKeyword} from '@babel/types';

it('render',()=>{
    let br = document.createElement('br');
    ReactDOM.render(<TextFieldC/>,br);
});

it('render with prop',()=>{
ReactDOM.render(<TextFieldC onChange={({target})=>target.value='11'}/>);

});

