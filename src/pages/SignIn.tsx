import { signIn } from '@/api/api';
import { IsValid } from '@/lib/utils/validation';
import { ChangeEvent, FormEvent, FocusEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    if (localStorage.token) {
      alert('부적절한 접근입니다');
      navigate('/todo');
    }
  });

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    const { email, password } = values;
    const res = await signIn(email, password);
    console.log('res', res);
    localStorage.setItem('token', res.access_token);
    if (res.access_token) {
      navigate('/todo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="이메일"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          data-testid="email-input"
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          data-testid="password-input"
        />
      </div>
      <button
        type="submit"
        disabled={IsValid({ email: values.email, password: values.password })}
        onClick={onSubmit}
        data-testid="signin-button"
      >
        로그인
      </button>
      <button
        type="button"
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원이 아니신가요?
      </button>
    </form>
  );
};
export default SignIn;
