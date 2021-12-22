import { Button } from '../ui';

export const GoalForm = ({ addNewGoal }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    // ემთხვევა input-ების name მნიშვნელობას
    const { title, completed, description } = event.target;

    const newGoal = {
      title: title.value,
      description: description.value,
      completed: completed.checked,
      id: Math.round(Math.random() * 1000000),
    };

    addNewGoal(newGoal);
    title.value = '';
    completed.checked = false;
    description.value = '';
  };

  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="goalTitle" className="form-label">
          ჩემი მიზანი
        </label>
        <input
          type="text"
          className="form-control"
          id="goalTitle"
          placeholder="ჩემი მიზანი"
          name="title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          მიზნის აღწერილობა
        </label>
        <textarea className="form-control" id="description" rows="3" name="description"></textarea>
      </div>

      <div className="mb-3 form-check">
        <label htmlFor="completed" className="form-check-label">
          მიზანი შესრულდა
        </label>
        <input type="checkbox" id="completed" className="form-check-input" name="completed" />
      </div>

      <div className="mb-3">
        <Button className="btn btn-primary" type="submit" text="მიზნის შექმნა" />
      </div>
    </form>
  );
};
