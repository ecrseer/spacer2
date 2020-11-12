import Link from 'next/link';
import SimplestMe from '../TextFieldC/SimpleF';
import TextFieldC from '../TextFieldC/TextFieldC';

export default () => (
  <div>
  <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link>
  </div>
      
  <TextFieldC/>
  <SimplestMe/>
  </div>
)
