export const GoalForm = () => {
  return (
    <form className="mb-3">
      <div className="mb-3">
        <label htmlFor="goalTitle" className="form-label">
          ჩემი მიზანი
        </label>
        <input type="text" className="form-control" id="goalTitle" placeholder="ჩემი მიზანი" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          მიზნის აღწერილობა
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          მიზნის შექმნა
        </button>
      </div>
    </form>
  );
};
