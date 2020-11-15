import Link from 'next/link';
import { createRef } from 'react';
import SimplestMe from '../TextFieldC/SimpleF';
import TextFieldC from '../TextFieldC/TextFieldC';

export default function indX() {
    const vemDoComponente = createRef();
    return (
  <div>
  <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link>
  </div>
    

  <TextFieldC ref={vemDoComponente}/>
  <SimplestMe/>
  </div>
)}
