import * as S from './styles';

type TextProp = {
  children?: React.ReactNode
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
}

const Text = ( { children, color = 'light', size = 'medium' }: TextProp) => {
  if (!children) {
    return null;
  }

  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Text;
