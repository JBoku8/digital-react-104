import { useState } from 'react';
// import { appConfig } from './constants/app';
import { Goals } from './components/Goals';
import { GoalForm } from './components/GoalForm';
import { GoalFilters } from './components/GoalFilters';
// import Header from './components/header';

import { FILTER_GOAL, goals } from './constants/goals';

/**
 * პირველი დახატვა -> დაიმახსოვრე ობიექტების იერარქია/სტრუქტურა
 * მეორე დახატვა -> შევადაროთ პირბელ იერარქიას/სტრუქტურას ვიპვოთ განსხვავება
 */

function App() {
  const [filter, setFilter] = useState(FILTER_GOAL.ALL);
  const [goalList, setGoalList] = useState(goals);

  const onFilter = (newFilter) => {
    // console.log('newFilter', newFilter);
    setFilter(newFilter);
  };

  const addNewGoal = (newGoal) => {
    const newList = [...goalList, newGoal];
    setGoalList(newList);
  };

  const removeGoal = (goalId) => {
    const newList = goalList.filter((goal) => goal.id !== goalId);
    setGoalList(newList);
  };

  return (
    <div className="container">
      {/* <div className="row">
        <Header app={appConfig} />
      </div> */}
      <div className="row mb-5">
        <div className="col-12 shadow mb-2 p-3">
          <GoalForm addNewGoal={addNewGoal} />
          <hr />
          <div className="d-flex justify-content-between col-6">
            <GoalFilters onFilter={onFilter} filter={filter} />
          </div>
        </div>
        <div className="col-8 shadow p-3">
          <h2>ჩემი მიზნები:</h2>
          <hr />
          <Goals filter={filter} goals={goalList} removeGoal={removeGoal} />
        </div>
      </div>
    </div>
  );
}

export default App;
