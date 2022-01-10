import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../ui';

import { HOME_PATH } from '../../constants/routes';
import { loginAsync } from '../../api/auth';
import { TOKEN_KEY } from '../../constants/app';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const response = await loginAsync(email, password);
    localStorage.setItem(TOKEN_KEY, response.token);
    navigate(HOME_PATH);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <code>
        <pre>"email": "eve.holt@reqres.in", "password": "cityslicka"</pre>
      </code>
      <div className="form-group mb-3">
        <Input
          label="ელ. ფოსტა"
          name="email"
          placeholder="example@mail.com"
          type="email"
          className="form-control"
          id="email"
          {...register('email', { required: true })}
        />
      </div>

      <div className="form-group mb-3">
        <Input
          label="პაროლი"
          name="password"
          placeholder="*******"
          type="password"
          className="form-control"
          id="password"
          {...register('password', { required: true })}
        />
      </div>

      <div className="form-group mb-3">
        <Button className="btn btn-outline-primary" type="submit" text="შესვლა" />
      </div>
    </form>
  );
};

export default LoginForm;
