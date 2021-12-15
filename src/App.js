import GreetingList from './components/GreetingList';
import Header from './components/Header';

import * as Values from './exports/namedExports';

function App() {
  return (
    <div className="App">
      <Header />
      <GreetingList />
      <hr />
      <h3>Exports Demo</h3>
      {Values.VALUE_1} {Values.VALUE_2} {Values.VALUE_3} {Values.VALUE_4}
    </div>
  );
}

export default App;
