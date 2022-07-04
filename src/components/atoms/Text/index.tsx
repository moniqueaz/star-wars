import * as S from './styles';

type TextProp = {
  children?: React.ReactNode
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large',
  className?: string
}

const Text = ( { children, color = 'light', size = 'medium', className }: TextProp) => {
  if (!children) {
    return null;
  }

  return (
    <S.Wrapper color={color} size={size} className={className}>
      {children}
    </S.Wrapper>
  );
};

export default Text;
