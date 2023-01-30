// Types
import { GreetingProps } from '../../types';

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>
      <p>Hello {name ? name : 'Guest'}</p>
    </div>
  );
};

export default Greeting;
