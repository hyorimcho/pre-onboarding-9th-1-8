type Props = {
  email: string;
  password: string;
};
export const IsValid = ({ email, password }: Props): boolean => {
  return !(email.includes('@') && password.length >= 7);
};
