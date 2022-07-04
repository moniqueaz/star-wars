import * as S from './styles';

type TitleProps = {
  children?: React.ReactNode
  type?: 'title' | 'sessionTitle' | 'subTitle',
  color?: 'light' | 'dark',
  className?: string
}

const titleType = {
  title: (title: React.ReactNode) => <S.Title>{title}</S.Title>,
  sessionTitle: (title: React.ReactNode) => <S.SessionTitle>{title}</S.SessionTitle>,
  subTitle: (title: React.ReactNode) => <S.SubTitle>{title}</S.SubTitle>,
};

const Title = ( { type = 'title', children, color = 'light', className }: TitleProps) => {
  if (!children) {
    return null;
  }

  return (
    <S.Wrapper color={color} className={className}>
      {titleType[type](children)}
    </S.Wrapper>
  );
};

export default Title;
