import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { signUp } from '@/api/api';
import { IsValid } from '@/lib/utils/validation';

const SignUp = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  console.log('value.email', values.email);
  console.log('values.password', values.password);

  const onSubmit = async () => {
    const { email, password } = values;
    const res = await signUp(email, password);
    console.log('res', res);
    localStorage.setItem('token', res.access_token);
    if (res.access_token) {
      navigate('/signin');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="이메일"
          onChange={handleChange}
          value={values.email}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          value={values.password}
        />
      </div>
      <button
        type="submit"
        disabled={IsValid({ email: values.email, password: values.password })}
        onClick={onSubmit}
      >
        제출
      </button>
    </form>
  );
};
export default SignUp;
