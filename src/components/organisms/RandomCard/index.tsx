import * as S from './styles';
import { useCard } from 'service/hooks/card';
import Card from 'components/molecules/Card';
import Button from 'components/atoms/Button';
import Placeholder from './placeholder';

type RandomCardProps = {
  count: number,
  callback?: () => any,
  slug: string | string[]
}

const RandomCard = ( { count, callback, slug }:RandomCardProps) => {
  const { data, error, isValidating } = useCard(slug, count);

  if (!!error) {
    return <div>Error</div>;
  }

  return (
    <S.Wrapper>
      <S.Content>
        {
        isValidating ? <Placeholder /> : (
          <Card title={data.title} data={data.card} image="https://via.placeholder.com/250"/>
          )
        }
      </S.Content>
      <Button color="secondary" callback={callback}>Random</Button>
    </S.Wrapper>
  );
};

export default RandomCard;
