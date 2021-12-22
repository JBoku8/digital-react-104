import { Button } from '../ui';
import { FILTER_GOAL } from '../../constants/goals';

const activeClassName = 'btn btn-success';
const defaultClassName = 'btn btn-outline-success';

const getClassName = (check) => (check ? activeClassName : defaultClassName);

export const GoalFilters = ({ onFilter, filter }) => {
  return (
    <>
      <Button
        text="ჩემი ყველაზე მიზანი"
        className={getClassName(filter === FILTER_GOAL.ALL)}
        onClick={() => {
          onFilter(FILTER_GOAL.ALL);
        }}
      />

      <Button
        text="აქტიური მიზნები"
        className={getClassName(filter === FILTER_GOAL.ACTIVE)}
        onClick={() => {
          onFilter(FILTER_GOAL.ACTIVE);
        }}
      />

      <Button
        text="შესრულებული მიზნები"
        className={getClassName(filter === FILTER_GOAL.COMPLETED)}
        onClick={() => {
          onFilter(FILTER_GOAL.COMPLETED);
        }}
      />
    </>
  );
};
