export const Loader = ({ title = null }) => {
  return (
    <div className="d-flex align-items-center">
      <strong>{title} Loading...</strong>
      <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
  );
};
