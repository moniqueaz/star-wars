import * as S from './styles';

type LoadingProps = {
  size?: 'small' | 'medium' | 'large',
  color?: 'dark' | 'light'
}
const Loading = ( { size = 'medium', color='light' }: LoadingProps) => (
  <S.Container size={size}>
    <S.Wrapper size={size}>
      <S.Bar size={size} color={color} />
      <S.RoundedEdge size={size} color={color} />
    </S.Wrapper>
  </S.Container>
);

export default Loading;
