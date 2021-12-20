import { GoalItem } from '../GoalItem';
import { FILTER_GOAL, goals } from '../../constants/goals';

export const Goals = ({ filter = FILTER_GOAL.ALL }) => {
  const renderGoals = () => {
    let filtered = [...goals];

    if (filter === FILTER_GOAL.ACTIVE) {
      filtered = goals.filter((goal) => {
        return !goal.completed;
      });
    } else if (filter === FILTER_GOAL.COMPLETED) {
      filtered = goals.filter((goal) => {
        return goal.completed;
      });
    }

    return filtered.map((goal) => {
      return <GoalItem title={goal.title} completed={goal.completed} key={goal.id} />;
    });
  };

  return (
    <div className="row">
      <div className="list-group">{renderGoals()}</div>
    </div>
  );
};
