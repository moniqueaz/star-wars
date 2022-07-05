import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode,
  size?: 'small' | 'normal' | 'full',
  color?: 'light' | 'dark',
  callback?: () => any
}
const Button = ( { children, size = 'normal', color = 'light', callback }: ButtonProps) => (
  <S.Button size={size} color={color} onClick={callback}>
    {children}
  </S.Button>
);

export default Button;
