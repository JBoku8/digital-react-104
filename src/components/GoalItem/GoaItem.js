export const GoalItem = ({ title = '', completed = false }) => {
  return (
    <label className="list-group-item">
      <input className="form-check-input me-1" type="checkbox" value="" checked={completed} />
      {title}
    </label>
  );
};
