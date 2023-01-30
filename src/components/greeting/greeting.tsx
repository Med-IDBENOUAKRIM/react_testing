// Types
import { GreetingProps } from '../../types';

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

export default Greeting;
