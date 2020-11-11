import Link from 'next/link';
import TextFieldC from '../TextFieldC/TextFieldC';

export default () => (
  <div>
  <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link>
  </div>
      
  <TextFieldC/>
  
  </div>
)
