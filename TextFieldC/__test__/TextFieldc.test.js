

import react from 'react';
import ReactDOM from 'react-dom';
import TextFieldC from '../TextFieldC';
import {isTSAnyKeyword} from '@babel/types';
import {render as renderer} from '@testing-library/react';

it('render',()=>{
    let br = document.createElement('br');
    ReactDOM.render(<TextFieldC/>,br);
});

it('render with prop',()=>{
    const getByTestId= renderer(<TextFieldC onChange={({target})=>target.value='11'}/>,
    document.createElement('div'));
    
});

test('soma simples',()=>{
    let x =(new TextFieldC()).dentroA;
    expect(x).toBe(23);
})


