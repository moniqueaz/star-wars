import * as S from './styles';
import { StyledIcon } from '@styled-icons/styled-icon';
import { RightArrow, User } from '@styled-icons/boxicons-regular';

type IconProps = {
  width?: string
  icon: string
}

type ListIconsProps = {
  [key: string]: StyledIcon
}

const listIcons = (): ListIconsProps => ( {
  arrow: RightArrow,
  user: User,
} );

const Icon = ( { width='4rem', icon } : IconProps) => {
  const Component = listIcons()[icon];

  if (!Component) {
    return null;
  }

  return (
    <S.Wrapper>
      <Component width={width}/>
    </S.Wrapper>
  );
};

export default Icon;
