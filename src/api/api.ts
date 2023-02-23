import client from './core';

//회원가입;
export const signUp = async (email: string, password: string) => {
  try {
    const res = await client('/auth/signup', {
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
//로그인
export const signIn = async (email: string, password: string) => {
  try {
    const res = await client('/auth/signin', {
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    return res.data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
