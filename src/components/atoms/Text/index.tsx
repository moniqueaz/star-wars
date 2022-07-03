import * as S from './styles';

type TextProp = {
  children: React.ReactNode
  light?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Text = ( { children, light = false, size = 'medium' }: TextProp) => {
  if (!children) {
    return null;
  }

  return (
    <S.Wrapper light={light} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Text;
