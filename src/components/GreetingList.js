import GreetingListItem from './GreetingListItem';
import { users } from '../data';

const GreetingList = () => {
  return (
    <div className="App-Greetings">
      <h1>Greetings from: </h1>

      {users.map((user) => {
        return <GreetingListItem name={user.name} key={`greeting__userId-${user.id}`} />;
      })}
    </div>
  );
};

export default GreetingList;
