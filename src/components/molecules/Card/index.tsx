import * as S from './styles';
import Image from 'components/atoms/Image';

type DataProps = {[key: string]: string | string[] | number | boolean }

type CardProps = {
  image: string,
  title: string,
  data?: DataProps
}
const Card = ( { image, title, data = {} }: CardProps) => (
  <S.Wrapper>
    <S.Top>
      <Image src={image} size="full"/>
      <S.TitleUI color="dark" size="small">{title}</S.TitleUI>
    </S.Top>
    <S.List>
      {
        Object.keys(data).map((item: string) => <S.Item key={item}>
          <S.Label>{item.replace(/_/ig, ' ')}</S.Label>
          <S.Value>{data[item]}</S.Value>
        </S.Item>)
      }
    </S.List>
  </S.Wrapper>
);

export default Card;
