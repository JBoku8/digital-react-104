import { useState } from 'react';
// import { appConfig } from './constants/app';
import { Goals } from './components/Goals';
import { GoalForm } from './components/GoalForm';
import { Button } from './components/ui/Button';
// import Header from './components/header';

import { FILTER_GOAL } from './constants/goals';

function App() {
  const [filter, setFilter] = useState(FILTER_GOAL.ALL);

  const onFilter = (newFilter) => {
    console.log('newFilter', newFilter);
    setFilter(newFilter);
  };

  return (
    <div className="container">
      {/* <div className="row">
        <Header app={appConfig} />
      </div> */}
      <div className="row mb-5">
        <div className="col-12 shadow mb-2 p-3">
          <GoalForm />
          <hr />
          <div className="d-flex justify-content-between col-6">
            <Button
              text="ჩემი ყველაზე მიზანი"
              onClick={() => {
                onFilter(FILTER_GOAL.ALL);
              }}
            />
            <Button
              text="აქტიური მიზნები"
              onClick={() => {
                onFilter(FILTER_GOAL.ACTIVE);
              }}
            />
            <Button
              onClick={() => {
                onFilter(FILTER_GOAL.COMPLETED);
              }}
              text="შესრულებული მიზნები"
            />
          </div>
        </div>
        <div className="col-12 shadow p-3">
          <h2>ჩემი მიზნები:</h2>
          <hr />
          <Goals filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default App;
