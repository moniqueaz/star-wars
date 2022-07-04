import * as S from './styles';
import Image from 'components/atoms/Image';

type ListProps = {[key: string]: string | string[] | number | boolean }

type CardProps = {
  image: string,
  title: string,
  list?: ListProps
}
const Card = ( { image, title, list = {} }: CardProps) => (
  <S.Wrapper>
    <S.Top>
      <Image src={image} size="full"/>
      <S.TitleUI color="dark" size="small">{title}</S.TitleUI>
    </S.Top>
    <S.List>
      {
        Object.keys(list).map((item: string) => <S.Item key={item}>
          <S.Item>
            <S.Label>{item.replace(/_/ig, ' ')}</S.Label>
            <S.Value>{list[item]}</S.Value>
          </S.Item>
        </S.Item>)
      }
    </S.List>
  </S.Wrapper>
);

export default Card;
