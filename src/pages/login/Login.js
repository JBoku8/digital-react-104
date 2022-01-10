import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
  return (
    <div className="row login-page">
      <h1 className="text-muted">Login</h1>

      <LoginForm />
    </div>
  );
};

export default Login;
